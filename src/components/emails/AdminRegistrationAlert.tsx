import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Row,
    Column,
} from "@react-email/components";
import * as React from "react";

interface AdminRegistrationAlertProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    intention: string;
    regType: string;
    businessName?: string;
    participation?: string;
    amount?: string;
    numGuests?: number;
    guestNames?: string;
    stayOvernight?: string;
    dietary?: string;
    childCare?: string;
    numChildren?: number;
    agesChildren?: string;
    childNeeds?: string;
    pledgeAmount?: string;
    pledgeFrequency?: string;
    pledgeTimeframe?: string;
    commitmentType?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://gala.auburnsda.org";

export const AdminRegistrationAlert = ({
    firstName,
    lastName,
    email,
    phone,
    intention,
    regType,
    businessName,
    participation,
    amount,
    numGuests,
    guestNames,
    stayOvernight,
    dietary,
    childCare,
    numChildren,
    agesChildren,
    childNeeds,
    pledgeAmount,
    pledgeFrequency,
    pledgeTimeframe,
    commitmentType,
}: AdminRegistrationAlertProps) => {
    const previewText = `New Dinner Gala Registration: ${firstName} ${lastName}`;

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
                        <Heading style={heading}>REGISTRATION ALERT</Heading>
                        <Text style={subheading}>2026 VISION & HOPE DINNER GALA • INTERNAL NOTIFICATION</Text>
                    </Section>

                    <Section style={contentSection}>
                        <Heading style={greeting}>New Submission Received</Heading>
                        <Text style={paragraph}>
                            A new registration has been submitted through the website. Below are the full details for processing.
                        </Text>

                        <Section style={detailsCard}>
                            <Heading style={detailsTitle}>Contact Information</Heading>
                            <Hr style={hr} />
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Name</Column>
                                <Column style={detailValue}>{firstName} {lastName}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Email</Column>
                                <Column style={detailValue}>{email}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Phone</Column>
                                <Column style={detailValue}>{phone}</Column>
                            </Row>
                        </Section>

                        <Section style={detailsCard}>
                            <Heading style={detailsTitle}>Registration Details</Heading>
                            <Hr style={hr} />
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Type</Column>
                                <Column style={detailValue}>{regType.toUpperCase()}</Column>
                            </Row>
                            {businessName && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Organization</Column>
                                    <Column style={detailValue}>{businessName}</Column>
                                </Row>
                            )}
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Intention</Column>
                                <Column style={detailValue}>{intention.toUpperCase()}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Level</Column>
                                <Column style={detailValue}>{participation || "N/A"}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Gift/Pledge Amount</Column>
                                <Column style={detailValue}>${amount || pledgeAmount || "0"}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Fulfillment Status</Column>
                                <Column style={detailValue}>
                                    {commitmentType === "immediate" 
                                        ? "FULFILLED (Credit/Debit)" 
                                        : "PLEDGE (Faith Promise / Deferred)"}
                                </Column>
                            </Row>
                        </Section>

                        <Section style={detailsCard}>
                            <Heading style={detailsTitle}>Hospitality & Logistics</Heading>
                            <Hr style={hr} />
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Guests</Column>
                                <Column style={detailValue}>{numGuests || 1}</Column>
                            </Row>
                            {guestNames && (
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Guest Names</Column>
                                    <Column style={detailValue}>{guestNames}</Column>
                                </Row>
                            )}
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Overnight</Column>
                                <Column style={detailValue}>{stayOvernight || "No"}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Dietary</Column>
                                <Column style={detailValue}>{dietary || "None specified"}</Column>
                            </Row>
                            <Row style={detailRow}>
                                <Column style={detailLabel}>Childcare</Column>
                                <Column style={detailValue}>{childCare === "yes" ? "YES" : "No"}</Column>
                            </Row>
                            {childCare === "yes" && (
                                <>
                                    <Row style={detailRow}>
                                        <Column style={detailLabel}>Children</Column>
                                        <Column style={detailValue}>{numChildren} (Ages: {agesChildren || "N/A"})</Column>
                                    </Row>
                                    <Row style={detailRow}>
                                        <Column style={detailLabel}>Needs</Column>
                                        <Column style={detailValue}>{childNeeds || "None"}</Column>
                                    </Row>
                                </>
                            )}
                        </Section>

                        {intention !== "attend" && (
                            <Section style={detailsCard}>
                                <Heading style={detailsTitle}>Faith Promise Commitment</Heading>
                                <Hr style={hr} />
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Total Amount</Column>
                                    <Column style={detailValue}>${parseInt(pledgeAmount || "0").toLocaleString()}</Column>
                                </Row>
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Frequency</Column>
                                    <Column style={detailValue}>{(pledgeFrequency || "one-time").toUpperCase()}</Column>
                                </Row>
                                <Row style={detailRow}>
                                    <Column style={detailLabel}>Timeframe</Column>
                                    <Column style={detailValue}>{pledgeTimeframe} days</Column>
                                </Row>
                                
                                {/* Installment Breakdown Calculation */}
                                {pledgeFrequency !== "one-time" && pledgeAmount && (
                                    <Section style={pillBox}>
                                        <Text style={pillText}>
                                            ESTIMATED SCHEDULE: 
                                            {pledgeFrequency === "monthly" ? (
                                                ` ${Math.round(parseInt(pledgeTimeframe || "30") / 30)} monthly installments of $${Math.round(parseInt(pledgeAmount) / Math.round(parseInt(pledgeTimeframe || "30") / 30)).toLocaleString()}`
                                            ) : (
                                                ` Quarterly distribution over ${pledgeTimeframe} days`
                                            )}
                                        </Text>
                                    </Section>
                                )}
                            </Section>
                        )}
                    </Section>

                    <Text style={footerText}>
                        This is an automated notification from the Vision & Hope Dinner Gala 2026 Admin Panel.<br />
                        Confidentiality: For internal use only.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default AdminRegistrationAlert;

const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const headerSection = {
    backgroundColor: "#6B6F4C",
    padding: "50px 40px",
    borderRadius: "16px 16px 0 0",
    textAlign: "center" as const,
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
    margin: "10px 0 0",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
};

const contentSection = {
    padding: "32px",
    backgroundColor: "#f9fafb",
    borderRadius: "0 0 12px 12px",
    border: "1px solid #e5e7eb",
};

const greeting = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 16px",
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#4b5563",
    margin: "0 0 24px",
};

const detailsCard = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    marginBottom: "20px",
};

const detailsTitle = {
    fontSize: "12px",
    fontWeight: "700",
    color: "#6B6F4C",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    margin: "0 0 12px",
};

const detailRow = {
    padding: "8px 0",
};

const detailLabel = {
    fontSize: "12px",
    color: "#6b7280",
    width: "35%",
};

const detailValue = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#111827",
};

const hr = {
    borderColor: "#f3f4f6",
    margin: "12px 0",
};

const pillBox = {
    backgroundColor: "#6B6F4C0D",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "12px",
    borderLeft: "4px solid #6B6F4C",
};

const pillText = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#6B6F4C",
    margin: "0",
    letterSpacing: "0.02em",
};

const footerText = {
    fontSize: "12px",
    textAlign: "center" as const,
    color: "#9ca3af",
    marginTop: "24px",
};
