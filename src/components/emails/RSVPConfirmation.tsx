import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
    Column,
} from "@react-email/components";
import * as React from "react";

interface RSVPConfirmationEmailProps {
    firstName: string;
    intention: string;
    regType: string;
    amount?: string;
    numGuests?: number;
    participation?: string;
}

export const RSVPConfirmationEmail = ({
    firstName,
    intention,
    regType,
    amount,
    numGuests,
    participation,
}: RSVPConfirmationEmailProps) => {
    const previewText = `Your registration for the 2026 Vision Gala is confirmed, ${firstName}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={headerSection}>
                         {/* Placeholder for Logo - You should replace with your actual URL */}
                        <Heading style={heading}>2026 VISION GALA</Heading>
                        <Text style={subheading}>FOUNDATION FOR THE FUTURE</Text>
                    </Section>

                    <Section style={contentSection}>
                        <Heading style={greeting}>Welcome to the Legacy, {firstName}!</Heading>
                        <Text style={paragraph}>
                            We are honored to confirm your registration for the upcoming <strong>2026 Vision Gala</strong>. 
                            Your commitment helps us build a lasting foundation for generations to come.
                        </Text>

                        <Section style={detailsCard}>
                            <Heading style={detailsTitle}>Registration Summary</Heading>
                            <Hr style={hr} />
                            
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Partner Type</Column>
                                <Column style={detailValue}>{regType === "personal" ? "Private Guest" : "Corporate Partner"}</Column>
                            </Row>
                            
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Intention</Column>
                                <Column style={detailValue}>{intention === "both" ? "Attend & Pledge" : intention === "attend" ? "Attend Gala" : "Faith Promise"}</Column>
                            </Row>

                            {intention !== "pledge" && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Guests</Column>
                                    <Column style={detailValue}>{numGuests} {numGuests === 1 ? 'Person' : 'People'}</Column>
                                </Row>
                            )}

                            {amount && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Commitment</Column>
                                    <Column style={detailValue}>${amount}</Column>
                                </Row>
                            )}
                        </Section>

                        <Text style={paragraph}>
                            Our hospitality team is already preparing for your arrival. You will receive a formal digital invitation packet with venue details and schedule closer to the event date.
                        </Text>

                        <Section style={buttonContainer}>
                            <Link href="https://gala.auburnsda.org" style={button}>
                                View Event Details
                            </Link>
                        </Section>
                    </Section>

                    <Section style={footerSection}>
                        <Hr style={footerHr} />
                        <Text style={footerText}>
                            Auburn Seventh-day Adventist Church<br />
                            Foundation Gala 2026<br />
                            <Link href="https://gala.auburnsda.org" style={footerLink}>gala.auburnsda.org</Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default RSVPConfirmationEmail;

const main = {
    backgroundColor: "#f9f9f9",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "600px",
};

const headerSection = {
    textAlign: "center" as const,
    paddingBottom: "30px",
};

const heading = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#6B6F4C",
    margin: "0",
    letterSpacing: "4px",
};

const subheading = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#b89a3b",
    margin: "8px 0 0",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
};

const contentSection = {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid #d3d3d3",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const greeting = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#6B6F4C",
    margin: "0 0 20px",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#4a4a4a",
    margin: "0 0 20px",
};

const detailsCard = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    margin: "20px 0",
};

const detailsTitle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#6B6F4C",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    margin: "0 0 10px",
};

const detailRow = {
    padding: "8px 0",
};

const detailLabel = {
    fontSize: "13px",
    color: "#888888",
    width: "40%",
};

const detailValue = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#6B6F4C",
};

const hr = {
    borderColor: "#e6e6e6",
    margin: "10px 0",
};

const buttonContainer = {
    textAlign: "center" as const,
    marginTop: "30px",
};

const button = {
    backgroundColor: "#6B6F4C",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "16px 32px",
};

const footerSection = {
    textAlign: "center" as const,
    marginTop: "40px",
};

const footerHr = {
    borderColor: "#d3d3d3",
    margin: "20px 0",
};

const footerText = {
    fontSize: "12px",
    color: "#888888",
    lineHeight: "18px",
};

const footerLink = {
    color: "#b89a3b",
    textDecoration: "underline",
};
