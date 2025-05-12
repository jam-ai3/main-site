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
  
  export default function WelcomeEmail() {
    return (
      <Html>
        <Head />
        <Preview>Welcome to jamAI — your new favorite writing space</Preview>
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
              Welcome to jamAI 👋
            </Heading>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              We're so excited you've joined us! jamAI is your intelligent writing space.
            </Text>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Whether you’re writing an essay, assignment, or personal piece, jamAI helps you reword, clarify, and improve your writing without losing your voice.
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
                Start Writing Now →
              </Button>
            </div>
  
            <Hr />
            <Text style={{ fontSize: "12px", color: "#888" }}>
              If you didn’t sign up for jamAI, you can safely ignore this message or contact us at{" "}
              <Link href="mailto:contact@jamai.dev">contact@jamai.dev</Link>.
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }