/**
 * PrivacyPolicy.tsx — A2P/10DLC-compliant Privacy Policy
 * Design: Forest Counsel — white, deep forest green (#1B4332), Cormorant Garamond + Inter
 */
import Layout from "@/components/Layout";

const EFFECTIVE_DATE = "July 2, 2025";
const FIRM_NAME = "Vital Accounting & Tax Services Limited Liability Company";
const FIRM_SHORT = "Vital Accounting & Tax Services LLC";
const WEBSITE = "https://vitalaccountingtaxes.com";
const EMAIL = "info@vitalaccountingtaxes.com";
const PHONE = "(201) 953-4548";
const ADDRESS = "104 Mount Pleasant Tpke, New Jersey";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section
        style={{
          backgroundColor: "#1B4332",
          paddingTop: "140px",
          paddingBottom: "4rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                display: "block",
                width: "2rem",
                height: "1.5px",
                backgroundColor: "#52B788",
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#52B788",
              }}
            >
              Legal
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 0 6rem" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>

            <LegalSection title="1. Introduction">
              <p>
                {FIRM_NAME} ("{FIRM_SHORT}", "we," "us," or "our") is committed to
                protecting the privacy and personal information of every individual
                who visits our website at{" "}
                <a href={WEBSITE} style={{ color: "#1B4332" }}>
                  {WEBSITE}
                </a>{" "}
                or contacts us through any channel. This Privacy Policy explains
                what information we collect, how we use it, and the rights you have
                with respect to your personal information.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                By using our website or submitting any form on our site, you
                acknowledge that you have read and understood this Privacy Policy.
              </p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
              <p>
                We collect information that you voluntarily provide to us when you
                fill out a contact form, consultation request form, scheduling form,
                or any other form on our website. This may include:
              </p>
              <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", lineHeight: 2 }}>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>A brief description of your tax or financial situation (as provided by you)</li>
                <li>Any other information you choose to include in your message</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                We may also collect non-personally identifiable information
                automatically when you visit our website, including browser type,
                device type, pages visited, and referring URLs, through standard
                web analytics tools.
              </p>
            </LegalSection>

            <LegalSection title="3. How We Use Your Information">
              <p>We use the information you provide solely for the following purposes:</p>
              <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", lineHeight: 2 }}>
                <li>To respond to your consultation request or inquiry</li>
                <li>To schedule and confirm appointments</li>
                <li>To send appointment reminders and service-related updates</li>
                <li>To provide customer support</li>
                <li>To communicate follow-up information related to a quote or service discussion</li>
                <li>To send SMS messages for which you have expressly opted in (see Section 5 below)</li>
                <li>To comply with applicable legal obligations</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                We do not use your personal information for any purpose beyond
                those listed above without your explicit consent.
              </p>
            </LegalSection>

            <LegalSection title="4. How We Share Your Information">
              <p>We do not sell, rent, or trade your personal information to any third party.</p>
              <p style={{ marginTop: "0.75rem", fontWeight: 600, color: "#111827" }}>
                No mobile information will be shared with third parties or affiliates
                for marketing or promotional purposes.
              </p>
              <p style={{ marginTop: "0.75rem", fontWeight: 600, color: "#111827" }}>
                Text messaging originator opt-in data and consent will not be shared
                with any third parties for marketing or promotional purposes.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                We may share your information only in the following limited circumstances:
              </p>
              <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", lineHeight: 2 }}>
                <li>
                  <strong>Service providers:</strong> We may share your information
                  with third-party service providers who assist us in delivering SMS
                  messages, managing appointment scheduling, or operating our website.
                  These providers are permitted to use your information only to perform
                  services on our behalf and are contractually required to protect your
                  information and maintain its confidentiality. SMS data may only be
                  shared with such providers for the sole purpose of delivering the
                  requested messaging service.
                </li>
                <li style={{ marginTop: "0.5rem" }}>
                  <strong>Legal compliance:</strong> We may disclose your information
                  if required to do so by law, court order, or governmental authority,
                  or if we believe in good faith that such disclosure is necessary to
                  protect our rights or the safety of others.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="5. SMS Communications and Text Messaging">
              <p>
                {FIRM_SHORT} may communicate with you via SMS (text message) for the
                purposes described in this section. The following terms apply to all
                SMS communications.
              </p>

              <SubSection title="Opt-In and Consent">
                <p>
                  You will only receive SMS messages from us after you have expressly
                  opted in by submitting a website form, contact form, consultation
                  request form, scheduling form, or another documented consent method
                  on our website. Providing your phone number alone does not constitute
                  consent to receive text messages.
                </p>
                <p style={{ marginTop: "0.75rem", fontWeight: 600, color: "#111827" }}>
                  Consent to receive text messages is not a condition of purchasing any
                  goods or services from {FIRM_SHORT}.
                </p>
              </SubSection>

              <SubSection title="Types of Messages">
                <p>After opting in, you may receive the following types of SMS messages from us:</p>
                <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", lineHeight: 2 }}>
                  <li>Appointment reminders</li>
                  <li>Appointment confirmations</li>
                  <li>Customer support messages</li>
                  <li>Service updates</li>
                  <li>Quote follow-ups</li>
                  <li>Account notifications</li>
                  <li>
                    Marketing and promotional messages — only after you have provided
                    separate, explicit consent for this type of communication
                  </li>
                </ul>
              </SubSection>

              <SubSection title="Message Frequency">
                <p>Message frequency may vary depending on your interaction with our business.</p>
              </SubSection>

              <SubSection title="Message and Data Rates">
                <p>Message and data rates may apply.</p>
              </SubSection>

              <SubSection title="How to Opt Out">
                <p>
                  Reply <strong>STOP</strong> at any time to unsubscribe from SMS
                  communications. After replying STOP, you will receive one confirmation
                  message acknowledging your opt-out request, and you will not receive
                  any additional SMS messages from us unless you choose to opt in again.
                </p>
              </SubSection>

              <SubSection title="How to Get Help">
                <p>
                  Reply <strong>HELP</strong> for assistance, or contact us directly at{" "}
                  <a href={`mailto:${EMAIL}`} style={{ color: "#1B4332" }}>{EMAIL}</a>{" "}
                  or{" "}
                  <a href="tel:2019534548" style={{ color: "#1B4332" }}>{PHONE}</a>.
                </p>
              </SubSection>

              <SubSection title="Carrier Disclaimer">
                <p>Wireless carriers are not responsible for delayed or undelivered messages.</p>
              </SubSection>
            </LegalSection>

            <LegalSection title="6. Data Retention">
              <p>
                We retain personal information only for as long as necessary to fulfill
                the purposes for which it was collected, to provide our services, or as
                required by applicable law. When personal information is no longer needed,
                we take reasonable steps to securely delete or anonymize it.
              </p>
            </LegalSection>

            <LegalSection title="7. Your Rights">
              <p>
                You have the right to request access to, correction of, or deletion of
                the personal information we hold about you. To exercise any of these
                rights, please contact us using the information in Section 10 below. We
                will respond to your request within a reasonable timeframe and in
                accordance with applicable law.
              </p>
            </LegalSection>

            <LegalSection title="8. Cookies and Analytics">
              <p>
                Our website may use cookies and similar tracking technologies to improve
                your browsing experience and analyze website traffic. You may configure
                your browser to refuse cookies; however, doing so may affect certain
                features of the website. We do not use cookies to collect personally
                identifiable information without your knowledge.
              </p>
            </LegalSection>

            <LegalSection title="9. Children's Privacy">
              <p>
                Our website and services are not directed to individuals under the age of
                13. We do not knowingly collect personal information from children under
                13. If you believe we have inadvertently collected such information,
                please contact us immediately and we will take steps to delete it.
              </p>
            </LegalSection>

            <LegalSection title="10. Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy
                Policy or our data practices, please contact us:
              </p>
              <div
                style={{
                  backgroundColor: "#F5F4F0",
                  borderLeft: "3px solid #1B4332",
                  padding: "1.5rem 1.75rem",
                  marginTop: "1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#374151",
                  lineHeight: 2,
                }}
              >
                <strong>{FIRM_NAME}</strong><br />
                {ADDRESS}<br />
                Phone:{" "}
                <a href="tel:2019534548" style={{ color: "#1B4332" }}>{PHONE}</a><br />
                Email:{" "}
                <a href={`mailto:${EMAIL}`} style={{ color: "#1B4332" }}>{EMAIL}</a><br />
                Website:{" "}
                <a href={WEBSITE} style={{ color: "#1B4332" }}>{WEBSITE}</a>
              </div>
            </LegalSection>

            <LegalSection title="11. Changes to This Privacy Policy">
              <p>
                We reserve the right to update or modify this Privacy Policy at any time.
                When we do, we will revise the effective date at the top of this page. We
                encourage you to review this Privacy Policy periodically to stay informed
                about how we protect your information. Your continued use of our website
                following any changes constitutes your acceptance of the revised policy.
              </p>
            </LegalSection>

          </div>
        </div>
      </section>
    </Layout>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "2.75rem" }}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.375rem",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          color: "#374151",
          lineHeight: 1.85,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <h3
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          color: "#1B4332",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          color: "#374151",
          lineHeight: 1.85,
        }}
      >
        {children}
      </div>
    </div>
  );
}
