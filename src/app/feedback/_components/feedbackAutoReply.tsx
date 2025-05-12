import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Text,
    Button,
    Hr,
    Link,
  } from "@react-email/components";
  
  
  export default function FeedbackAutoReply() {
    return (
      <Html>
        <Head />
        <Preview>Thanks for your feedback — we really appreciate it!</Preview>
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
              Thanks for your feedback
            </Heading>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              We truly appreciate you taking the time to share your thoughts with us. Your feedback helps shape the future of <strong>jamAI</strong> and makes the experience better for everyone.
            </Text>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              If you have more ideas, suggestions, or just want to keep writing, we’re always here.
            </Text>
  
            <div style={{ textAlign: "center", margin: "28px 0" }}>
              <Button
                href="https://write.jamai.dev/"
                style={{
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  fontSize: "16px",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Keep Writing with jamAI →
              </Button>
            </div>
  
            <Hr />
            <Text style={{ fontSize: "12px", color: "#888" }}>
              If you didn’t submit feedback, feel free to ignore this message or contact us at{" "}
              <Link href="mailto:contact@jamai.dev">contact@jamai.dev</Link>.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
  