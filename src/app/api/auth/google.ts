import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";
import db from "@/db/db";
import { signToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_REDIRECT_PATH } from "@/lib/constants";

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error("Invalid Google token");

    let user = await db.user.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          email: payload.email!,
          password: "", // No password needed for OAuth users
        },
      });
    }

    const jwtToken = await signToken({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    });

    (await cookies()).set({
      name: process.env.JWT_KEY!,
      value: jwtToken,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: process.env.DOMAIN,
      path: "/",
    });

    redirect(AUTH_REDIRECT_PATH);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}
