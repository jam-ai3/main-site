import { render } from "@react-email/render";
import { Resend } from "resend";
import FeedbackAutoReply from "../_components/feedbackAutoReply";



export async function sendFeedbackEmail(email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const htmlEmail = await render(FeedbackAutoReply());
    try {
        await resend.emails.send({
            from: process.env.JAMAI_EMAIL || "",
            to: email,
            subject: "We got your feedback — and we appreciate it",
            html: htmlEmail,
            text: "We got your feedback — and we appreciate it",
        })
    } catch {
        return { error: "Failed to send email" };
    }
}