import { render } from "@react-email/render";
import { Resend } from "resend";
import WelcomeEmail from "../_components/WelcomeEmail";



export async function sendWelcomeEmail(email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const htmlEmail = await render(WelcomeEmail());
    try {
        await resend.emails.send({
            from: process.env.JAMAI_EMAIL || "",
            to: email,
            subject: "Welcome to jamAI — Let’s get writing ✍️",
            html: htmlEmail,
            text: "Welcome to jamAI — Let’s get writing ✍️",
        })
    } catch {
        return { error: "Failed to send email" };
    }
}