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
    lastName?: string;
    intention: string;
    regType: string;
    amount?: string;
    numGuests?: number;
    participation?: string;
    dietary?: string;
    childCare?: string;
    numChildren?: number;
    agesChildren?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://gala.auburnsda.org";

export const RSVPConfirmationEmail = ({
    firstName,
    lastName,
    intention,
    regType,
    amount,
    numGuests,
    participation,
    dietary,
    childCare,
    numChildren,
    agesChildren,
}: RSVPConfirmationEmailProps) => {
    const previewText = `Your registration for the 2026 Vision & Hope Dinner Gala is confirmed, ${firstName}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={headerSection}>
                        <Img
                            src={`${baseUrl}/logo/SDA-Logo-2.png`}
                            width="110"
                            height="auto"
                            alt="Auburn SDA Logo"
                            style={logo}
                        />
                        <Heading style={heading}>2026 VISION & HOPE DINNER GALA</Heading>
                        <Text style={subheading}>FOUNDATION FOR THE FUTURE</Text>
                    </Section>

                    <Section style={contentSection}>
                        <Heading style={greeting}>Thank you for your Support, {firstName}!</Heading>
                        <Text style={paragraph}>
                            We are honored to confirm your registration and support for the <strong>2026 Vision & Hope Dinner Gala</strong>. 
                            Your generous gift helps us build a lasting foundation for generations to come.
                        </Text>

                        <Section style={detailsCard}>
                            <Heading style={detailsTitle}>Contribution & Attendance Summary</Heading>
                            <Hr style={hr} />
                            
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Partner Type</Column>
                                <Column style={detailValue}>{regType === "personal" ? "Private Guest" : "Corporate Partner"}</Column>
                            </Row>
                            
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Intention</Column>
                                <Column style={detailValue}>{intention === "both" ? "Attend & Pledge" : intention === "attend" ? "Attend Dinner Gala" : "Faith Promise"}</Column>
                            </Row>

                            {intention !== "pledge" && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Guests</Column>
                                    <Column style={detailValue}>{numGuests} {numGuests === 1 ? 'Person' : 'People'}</Column>
                                </Row>
                            )}

                            {amount && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Support Gift</Column>
                                    <Column style={detailValue}>${amount}</Column>
                                </Row>
                            )}
                        </Section>

                        {(dietary || childCare === "yes") && (
                            <Section style={detailsCard}>
                                <Heading style={detailsTitle}>Special Requirements</Heading>
                                <Hr style={hr} />
                                
                                {dietary && (
                                    <Row style={detailRow}>
                                        <Column style={detailLabel}>Dietary</Column>
                                        <Column style={detailValue}>{dietary}</Column>
                                    </Row>
                                )}
                                
                                {childCare === "yes" && (
                                    <Row style={detailRow}>
                                        <Column style={detailLabel}>Child Care</Column>
                                        <Column style={detailValue}>
                                            {numChildren} {numChildren === 1 ? 'Child' : 'Children'} (Ages: {agesChildren || "Standard"})
                                        </Column>
                                    </Row>
                                )}
                            </Section>
                        )}

                        <Text style={paragraph}>
                            Our hospitality team is already preparing for your arrival. You will receive a formal digital invitation packet with venue details and schedule closer to the event date.
                        </Text>

                        <Section style={buttonContainer}>
                            <Link href={`${baseUrl}`} style={button}>
                                View Event Details
                            </Link>
                        </Section>
                    </Section>

                    <Section style={footerSection}>
                        <Hr style={footerHr} />
                        <Text style={footerText}>
                            Auburn Seventh-day Adventist Church<br />
                            Vision & Hope Dinner Gala 2026<br />
                            <Link href={`${baseUrl}`} style={footerLink}>gala.auburnsda.org</Link>
                        </Text>
                        <Text style={privacyText}>
                            This email was sent to you because of your recent contribution and registration for the Auburn Vision & Hope Dinner Gala. 
                            Your information is stored securely and only accessible by authorized coordinators.
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
    padding: "50px 20px",
    backgroundColor: "#6B6F4C",
    borderRadius: "16px 16px 0 0",
};

const logo = {
    margin: "0 auto 20px",
    display: "block",
};

const heading = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0",
    letterSpacing: "4px",
};

const subheading = {
    fontSize: "10px",
    fontWeight: "bold",
    color: "#e2e2e2",
    margin: "12px 0 0",
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

const privacyText = {
    fontSize: "10px",
    color: "#aaaaaa",
    lineHeight: "14px",
    marginTop: "20px",
    textAlign: "center" as const,
};
