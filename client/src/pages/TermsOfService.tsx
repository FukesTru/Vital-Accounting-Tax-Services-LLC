/**
 * TermsOfService.tsx — A2P/10DLC-compliant Terms of Service
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
const PRIVACY_URL = `${WEBSITE}/privacy-policy`;

export default function TermsOfService() {
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
            Terms of Service
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

            <LegalSection title="1. Acceptance of Terms">
              <p>
                By accessing or using the website located at{" "}
                <a href={WEBSITE} style={{ color: "#1B4332" }}>{WEBSITE}</a>{" "}
                (the "Site"), you agree to be bound by these Terms of Service (the
                "Terms"). These Terms apply to all visitors, users, and others who
                access or use the Site. If you do not agree to these Terms, please
                do not use the Site.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                These Terms are entered into between you and {FIRM_NAME} ("{FIRM_SHORT},"
                "we," "us," or "our").
              </p>
            </LegalSection>

            <LegalSection title="2. Use of the Website">
              <p>
                The Site is provided for informational purposes and to facilitate
                contact with {FIRM_SHORT} regarding its professional tax and accounting
                services. You agree to use the Site only for lawful purposes and in a
                manner that does not infringe the rights of others or restrict or
                inhibit their use and enjoyment of the Site.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                The content on this Site does not constitute legal, tax, or financial
                advice. All professional services are provided only pursuant to a
                formal engagement agreement with {FIRM_SHORT}.
              </p>
            </LegalSection>

            <LegalSection title="3. Consultation and Services">
              <p>
                {FIRM_SHORT} provides tax preparation, tax planning, tax resolution,
                and related accounting and advisory services. All services are provided
                by appointment and subject to a formal engagement agreement. Submitting
                a contact form or consultation request does not create an
                attorney-client or accountant-client relationship. A formal engagement
                is established only upon execution of a written agreement.
              </p>
            </LegalSection>

            <LegalSection title="4. SMS Messaging Terms">
              <p>
                The following terms govern all SMS (text message) communications
                between {FIRM_SHORT} and individuals who have opted in to receive such
                communications.
              </p>

              <SubSection title="How You Opt In">
                <p>
                  You may opt in to receive SMS messages from {FIRM_SHORT} by
                  submitting a website form, contact form, consultation request form,
                  scheduling form, or another documented consent method on our website.
                  By providing your mobile phone number and checking the applicable
                  consent box (where provided), you expressly consent to receive text
                  messages from us.
                </p>
              </SubSection>

              <SubSection title="Types of Messages You May Receive">
                <p>After opting in, you may receive the following types of SMS messages:</p>
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

              <SubSection title="Consent Is Not Required to Purchase Services">
                <p>
                  <strong>
                    Consent to receive SMS messages is not a condition of purchasing
                    any goods or services from {FIRM_SHORT}. You may engage our
                    services without opting in to SMS communications.
                  </strong>
                </p>
              </SubSection>

              <SubSection title="Message Frequency">
                <p>
                  Message frequency may vary depending on your interaction with our
                  business.
                </p>
              </SubSection>

              <SubSection title="Message and Data Rates">
                <p>
                  Message and data rates may apply. Standard messaging rates charged
                  by your mobile carrier may apply to messages sent and received.
                </p>
              </SubSection>

              <SubSection title="How to Opt Out">
                <p>
                  Reply <strong>STOP</strong> at any time to unsubscribe from SMS
                  communications. After replying STOP, you will receive one
                  confirmation message acknowledging your opt-out request, and you
                  will not receive any additional SMS messages from us unless you
                  choose to opt in again.
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
                <p>
                  Wireless carriers are not responsible for delayed or undelivered
                  messages.
                </p>
              </SubSection>

              <SubSection title="Privacy of SMS Data">
                <p>
                  Your SMS opt-in data and consent will not be shared with any third
                  parties for marketing or promotional purposes. For full details on
                  how we handle your information, please review our{" "}
                  <a href={PRIVACY_URL} style={{ color: "#1B4332" }}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </SubSection>
            </LegalSection>

            <LegalSection title="5. Intellectual Property">
              <p>
                All content on this Site, including but not limited to text, graphics,
                logos, images, and page design, is the property of {FIRM_SHORT} or its
                content suppliers and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative
                works from any content on this Site without the prior written consent
                of {FIRM_SHORT}.
              </p>
            </LegalSection>

            <LegalSection title="6. Disclaimer of Warranties">
              <p>
                The Site and its content are provided on an "as is" and "as available"
                basis without warranties of any kind, either express or implied.{" "}
                {FIRM_SHORT} does not warrant that the Site will be uninterrupted,
                error-free, or free of viruses or other harmful components. The
                information on this Site is provided for general informational purposes
                only and does not constitute professional tax, legal, or financial
                advice.
              </p>
            </LegalSection>

            <LegalSection title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, {FIRM_SHORT} shall
                not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of, or inability
                to use, the Site or its content. Our total liability to you for any
                claim arising from these Terms or your use of the Site shall not exceed
                one hundred dollars ($100.00).
              </p>
            </LegalSection>

            <LegalSection title="8. Third-Party Links">
              <p>
                The Site may contain links to third-party websites. These links are
                provided for your convenience only. {FIRM_SHORT} has no control over
                the content of those sites and accepts no responsibility for them or
                for any loss or damage that may arise from your use of them.
              </p>
            </LegalSection>

            <LegalSection title="9. Privacy Policy">
              <p>
                Your use of the Site is also governed by our Privacy Policy, which is
                incorporated into these Terms by reference. Please review our Privacy
                Policy at{" "}
                <a href={PRIVACY_URL} style={{ color: "#1B4332" }}>
                  {PRIVACY_URL}
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="10. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the
                laws of the State of New Jersey, without regard to its conflict of law
                provisions. Any dispute arising under these Terms shall be subject to
                the exclusive jurisdiction of the state and federal courts located in
                New Jersey.
              </p>
            </LegalSection>

            <LegalSection title="11. Changes to These Terms">
              <p>
                We reserve the right to update or modify these Terms at any time. When
                we do, we will revise the effective date at the top of this page. Your
                continued use of the Site following any changes constitutes your
                acceptance of the revised Terms. We encourage you to review these Terms
                periodically.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact Us">
              <p>
                If you have any questions about these Terms of Service, please contact
                us:
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
