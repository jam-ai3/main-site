// "use client";
"use server";

import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Resend } from 'resend';
import ContactAutoReply from "../_components/auto-reply-email";
import { render } from "@react-email/components";
const emailFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function sendEmail(_: unknown, data: FormData) {
  const result = emailFormSchema.safeParse(Object.fromEntries(data.entries()));
  if (!result.success) return result.error.formErrors.fieldErrors;
  const { name, email, message } = result.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const htmlEmail = await render(ContactAutoReply(name));
  try{
    await resend.emails.send({
      from: process.env.JAMAI_EMAIL || "",
      to: email,
      subject: "Thanks for reaching out to jamAI — we'll get back to you shortly",
      html: htmlEmail,
      text: "Thanks for reaching out to jamAI — we'll get back to you shortly",
    })
  } catch {
    return { error: "Failed to send email" };
  }


  // try {
  //   await emailjs.send(
  //     process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
  //     process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
  //     { name, email, message },
  //     process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
  //   );
  // } catch {
  //   return { error: "Failed to send email" };
  // }

  return { error: undefined };
}
