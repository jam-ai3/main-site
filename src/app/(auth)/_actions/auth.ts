"use server";

import db from "@/db/db";
import { hashPassword, signToken, verifyPassword } from "@/lib/auth";
import { ACCOUNT_PATH, AUTH_REDIRECT_PATH } from "@/lib/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function handleLogin(_: unknown, data: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(data.entries()));
  if (!result.success) return result.error.formErrors.fieldErrors;

  const user = await db.user.findUnique({
    where: { email: result.data.email },
  });
  if (!user) return { email: ["Invalid email or password"] };

  if (!(await verifyPassword(result.data.password, user.password)))
    return { email: ["Invalid email or password"] };

  const token = await signToken({
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
  });

  (await cookies()).set({
    name: process.env.JWT_KEY!,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: process.env.DOMAIN,
    path: "/",
  });

  redirect(AUTH_REDIRECT_PATH);
}

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export async function handleRegister(_: unknown, data: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(data.entries()));
  if (!result.success) return result.error.formErrors.fieldErrors;

  if (result.data.password !== result.data.confirmPassword)
    return { confirmPassword: ["Passwords do not match"] };

  const user = await db.user.findUnique({
    where: { email: result.data.email },
  });
  if (user) return { email: ["User already exists"] };

  const hashedPassword = await hashPassword(result.data.password);
  const newUser = await db.user.create({
    data: {
      email: result.data.email,
      password: hashedPassword,
    },
  });

  const token = await signToken({
    id: newUser.id,
    email: newUser.email,
    isAdmin: newUser.isAdmin,
  });

  (await cookies()).set({
    name: process.env.JWT_KEY!,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: process.env.DOMAIN!,
    path: "/",
  });

  redirect(ACCOUNT_PATH);
}
