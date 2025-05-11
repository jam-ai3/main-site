import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Hr,
    Link,
    Button,
} from "@react-email/components";

export default function ContactAutoReply(name: string) {
    //TODO: colors need to be updated to match the rest of the site
    return (
        <Html>
            <Head />
            <Preview>Thanks for reaching out to jamAI — we'll get back to you soon</Preview>
            <Body style={{ backgroundColor: "#f9fafb", padding: "40px 0", fontFamily: "sans-serif" }}>
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "32px",
                        borderRadius: "8px",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    <Heading style={{ fontSize: "24px", marginBottom: "12px" }}>
                        Hi {name}, We've received your message 📨
                    </Heading>
                    <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        Thanks for contacting jamAI! We’ve received your message and will get back to you as soon as we can — usually within 48 hours.
                    </Text>
                    <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        While you wait, feel free to explore the writing space or check out our latest updates.
                    </Text>
                    <div style={{ margin: "24px 0" }}>
                        <Button
                            href="https://write.jamai.dev/"
                            style={{
                                backgroundColor: "#4f46e5",
                                color: "#ffffff",
                                fontSize: "16px",
                                padding: "12px 24px",
                                borderRadius: "6px",
                                textDecoration: "none",
                            }}>
                            Start Writing Now →
                        </Button>
                    </div>
                    <Hr />
                    <Text style={{ fontSize: "12px", color: "#888" }}>
                        If you didn’t submit a message on our website, you can ignore this email or contact us directly at contact@jamai.dev.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}