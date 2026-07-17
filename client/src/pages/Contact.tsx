/**
 * Contact.tsx — Request a Consultation
 * Design: Forest Counsel — clean white, deep forest green (#1B4332), Cormorant Garamond + Inter
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useFadeUp } from "@/hooks/useFadeUp";

const OFFICE_IMG =
  "/manus-storage/vital2-hero_c5021874.jpg";

export default function Contact() {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();

  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#1B4332", paddingTop: "150px", paddingBottom: "5.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${OFFICE_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.12 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", backgroundColor: "#52B788" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788" }}>
              Contact the Firm
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.25rem", maxWidth: "680px" }}>
            Request a High-Income Tax Strategy Consultation
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, maxWidth: "560px" }}>
            If you are earning $350,000 or more annually, or facing $50,000 or more in federal tax obligations, contact Vital Accounting &amp; Tax Services LLC to schedule a focused, structured consultation.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref1}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "start" }}>

            {/* LEFT — Info */}
            <div className="fade-up">
              <span className="section-label">Get in Touch</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 2.5vw, 2.375rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                The First Step Is a Conversation
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Vital Accounting &amp; Tax Services LLC does not work with every prospective client. The firm focuses on a specific type of engagement — high-income tax strategy for clients whose situation warrants a more deliberate, structured approach.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                The consultation request below is the first step. A member of the firm will review your submission and reach out by phone to discuss your situation and determine whether a structured engagement is the right fit.
              </p>

              {/* Contact Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div style={{ width: "3rem", height: "3rem", backgroundColor: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.375rem" }}>Phone</div>
                    <a href="tel:2019534548" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 700, color: "#111827", textDecoration: "none", display: "block", lineHeight: 1.1 }}>(201) 953-4548</a>
                    <p style={{ fontSize: "0.8125rem", color: "#9CA3AF", marginTop: "0.25rem" }}>Monday – Friday, 9:00 AM – 5:00 PM ET</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div style={{ width: "3rem", height: "3rem", backgroundColor: "#EEF5F1", border: "1.5px solid #1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.375rem" }}>Address</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
                      104 Mount Pleasant Tpke<br />Randolph, NJ 07869
                    </div>
                  </div>
                </div>
              </div>

              {/* Who Should Reach Out */}
              <div style={{ backgroundColor: "#EEF5F1", borderLeft: "3px solid #1B4332", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1B4332", marginBottom: "0.875rem" }}>
                  Who Should Reach Out
                </div>
                {[
                  "Clients earning $350,000 or more annually",
                  "Taxpayers owing $50,000 or more in federal taxes",
                  "Business owners with complex income structures",
                  "High-income NJ taxpayers seeking a structured approach",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: i < 3 ? "0.625rem" : 0 }}>
                    <span style={{ width: "5px", height: "5px", backgroundColor: "#1B4332", borderRadius: "50%", flexShrink: 0, marginTop: "9px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.75rem" }}>
                  Service Areas
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Randolph, NJ", "Morristown, NJ", "Caldwell, NJ", "Montville, NJ", "Paramus, NJ", "Bergen County", "Morris County"].map((area) => (
                    <span key={area} style={{ padding: "0.375rem 0.875rem", backgroundColor: "#F5F4F0", border: "1px solid #E5E7EB", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#374151" }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form (LeadConnector embedded form) */}
            <div className="fade-up" style={{ backgroundColor: "#F5F4F0", padding: "3rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 700, color: "#111827", marginBottom: "0.375rem" }}>
                  Consultation Request
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "#9CA3AF", lineHeight: 1.6 }}>
                  Complete the form below. A member of the firm will contact you by phone to discuss your situation.
                </p>
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/BE2emhMRiJKlZ92V3FSv"
                style={{ width: "100%", height: "542px", border: "none", borderRadius: "10px" }}
                id="inline-BE2emhMRiJKlZ92V3FSv"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Form (Vital Accounting & Tax Services LLC)"
                data-height="542"
                data-layout-iframe-id="inline-BE2emhMRiJKlZ92V3FSv"
                data-form-id="BE2emhMRiJKlZ92V3FSv"
                title="Website Form (Vital Accounting & Tax Services LLC)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref2}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <span className="section-label">What Happens Next</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", maxWidth: "560px", lineHeight: 1.12 }}>
              What to Expect After You Submit
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { num: "01", title: "Submission Review", body: "A member of the firm reviews your submission to understand your situation and determine whether a structured tax strategy engagement is the right fit for your circumstances." },
              { num: "02", title: "Phone Outreach", body: "The firm will contact you by phone at the number you provided. There is no email communication — all initial conversations happen by phone for efficiency and discretion." },
              { num: "03", title: "Initial Discussion", body: "The initial call is a brief, focused conversation about your situation — your income, your tax obligations, and what you are looking for. No commitment is required." },
              { num: "04", title: "Engagement Decision", body: "If a structured tax strategy engagement is the right fit, the firm will outline the next steps. If it is not, the firm will tell you honestly and point you in the right direction." },
            ].map((step) => (
              <div key={step.num} style={{ borderTop: "2px solid #1B4332", paddingTop: "1.75rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.75rem", fontWeight: 700, color: "#E5EDE8", lineHeight: 1, marginBottom: "0.875rem" }}>{step.num}</div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 700, color: "#111827", marginBottom: "0.625rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.8 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", display: "block", marginBottom: "1.25rem" }}>
            Vital Accounting &amp; Tax Services LLC — Randolph, NJ
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Prefer to Call Directly?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", maxWidth: "480px", margin: "0 auto 2.75rem", lineHeight: 1.8 }}>
            The firm is available Monday through Friday. Call during business hours to speak with a member of the team about your situation.
          </p>
          <a href="tel:2019534548" className="btn-white" style={{ fontSize: "1.0625rem" }}>
            Call (201) 953-4548
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          section > .container > div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 1.25rem"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
