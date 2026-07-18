/**
 * ServiceAreaPage.tsx — Reusable SEO location page template
 * Design: Forest Counsel — white, deep forest green (#1B4332), Cormorant Garamond + Inter
 * Rich layout: hero, intro, qualifying criteria, process, FAQ, inline form, bottom CTA
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import { useFadeUp } from "@/hooks/useFadeUp";

const OFFICE_IMG =
  "/manus-storage/vital-office-advisory_bdb3a57b.jpg";

interface FAQ {
  q: string;
  a: string;
}

interface ServiceAreaPageProps {
  city: string;
  state?: string;
  county?: string;
  headline: string;
  subheadline: string;
  intro: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  localContext: string;
  localContext2?: string;
  nearbyAreas: string[];
  faqs?: FAQ[];
}

export default function ServiceAreaPage({
  city,
  state = "NJ",
  county,
  headline,
  subheadline,
  intro,
  bodyParagraph1,
  bodyParagraph2,
  localContext,
  localContext2,
  nearbyAreas,
  faqs = [],
}: ServiceAreaPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();
  const ref3 = useFadeUp();
  const ref4 = useFadeUp();

  const displayLocation = county ? `${county}, ${state}` : `${city}, ${state}`;

  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#1B4332", paddingTop: "150px", paddingBottom: "5.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${OFFICE_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%", opacity: 0.1 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", backgroundColor: "#52B788" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788" }}>
              {displayLocation} — High-Income Tax Strategy
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "2.25rem", maxWidth: "780px" }}>
            {headline}
          </h1>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref1}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="fade-up">
              <span className="section-label">Serving {displayLocation}</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 2.75vw, 2.5rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                High-Income Tax Strategy for {city} Taxpayers
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                {intro}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                {bodyParagraph1}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "2.25rem" }}>
                {bodyParagraph2}
              </p>
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
            </div>

            <div className="fade-up">
              {/* Qualifying criteria */}
              <div style={{ backgroundColor: "#EEF5F1", borderLeft: "3px solid #1B4332", padding: "2rem", marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1B4332", marginBottom: "1rem" }}>
                  Who This Service Is For
                </div>
                {[
                  "Clients earning $350,000 or more annually",
                  "Taxpayers owing $50,000 or more in federal taxes",
                  `${city}-area residents with complex income situations`,
                  "Business owners and high-income professionals",
                  "Those seeking a proactive, structured tax approach",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: i < 4 ? "0.625rem" : 0 }}>
                    <span style={{ width: "5px", height: "5px", backgroundColor: "#1B4332", borderRadius: "50%", flexShrink: 0, marginTop: "9px" }} />
                    <span style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", backgroundColor: "#E5E7EB", marginBottom: "1.5rem" }}>
                <div style={{ backgroundColor: "#1B4332", padding: "1.75rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 700, color: "#52B788", lineHeight: 1, marginBottom: "0.375rem" }}>$350K+</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)" }}>Annual income threshold</div>
                </div>
                <div style={{ backgroundColor: "#FFFFFF", padding: "1.75rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 700, color: "#1B4332", lineHeight: 1, marginBottom: "0.375rem" }}>$50K+</div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Federal tax obligation</div>
                </div>
              </div>

              <div style={{ backgroundColor: "#F5F4F0", padding: "1.5rem" }}>
                <p style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.7, fontStyle: "italic" }}>
                  Vital Accounting &amp; Tax Services LLC serves clients in {city} on a "serving clients in..." basis. The firm does not maintain a physical office in {city}. All consultations are conducted by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── LOCAL CONTEXT ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref2}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }}>
            <div className="fade-up">
              <span className="section-label">Local Context</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 2.75vw, 2.375rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
                Tax Strategy for the {city} Community
              </h2>
            </div>
            <div className="fade-up">
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                {localContext}
              </p>
              {localContext2 && (
                <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                  {localContext2}
                </p>
              )}
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>
                Vital Accounting &amp; Tax Services LLC, led by Salma Alemi and based in Randolph, NJ, serves high-income taxpayers in {city} and throughout the surrounding New Jersey communities. Every engagement is treated with the professionalism and discretion that high-income clients expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref3}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <span className="section-label">The Process</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", maxWidth: "560px", lineHeight: 1.12 }}>
              How to Get Started as a {city} Client
            </h2>
          </div>
          <div className="fade-up-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {[
              { num: "01", title: "Request a Consultation", body: "Complete the consultation request form on this website or call the firm directly at (201) 953-4548. No email required." },
              { num: "02", title: "Initial Phone Conversation", body: "A member of the firm will reach out by phone to discuss your situation and determine whether a structured engagement is the right fit." },
              { num: "03", title: "Structured Tax Review", body: "If appropriate, the firm conducts a focused review of your income sources, federal obligations, and relevant planning considerations." },
              { num: "04", title: "Clarity and Direction", body: "You leave with a clearer, more organized understanding of your tax position and the considerations that matter most for your specific situation." },
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

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref4}>
          <div className="container">
            <div className="fade-up" style={{ marginBottom: "4rem", textAlign: "center" }}>
              <span className="section-label">Frequently Asked Questions</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", margin: "0 auto 1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
                Questions from {city}-Area Clients
              </h2>
            </div>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{ borderTop: i === 0 ? "2px solid #1B4332" : "1px solid #E5E7EB", borderBottom: i === faqs.length - 1 ? "1px solid #E5E7EB" : "none" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                  >
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ width: "1.75rem", height: "1.75rem", backgroundColor: openFaq === i ? "#1B4332" : "#EEF5F1", border: "1.5px solid #1B4332", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 200ms ease", color: openFaq === i ? "#FFFFFF" : "#1B4332", fontSize: "1rem", fontWeight: 700 }}>
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: "1.5rem" }}>
                      <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INLINE FORM ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Get in Touch</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 2.5vw, 2.375rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                Request a Consultation from {city}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
                If you are a high-income taxpayer in the {city} area earning $350,000 or more, or facing a significant federal tax obligation, contact Vital Accounting &amp; Tax Services LLC to schedule a focused consultation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", backgroundColor: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "3px" }}>Phone</div>
                    <a href="tel:2019534548" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.375rem", fontWeight: 700, color: "#111827", textDecoration: "none" }}>(201) 953-4548</a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", backgroundColor: "#EEF5F1", border: "1.5px solid #1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "3px" }}>Based In</div>
                    <div style={{ fontSize: "0.9375rem", color: "#374151" }}>Randolph, NJ 07869</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#F5F4F0", padding: "2.75rem" }}>
              <LeadForm height={620} />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      {nearbyAreas.length > 0 && (
        <section style={{ backgroundColor: "#F5F4F0", padding: "4rem 0", borderTop: "1px solid #E5E7EB" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.5rem" }}>Also Serving</div>
                <p style={{ fontSize: "0.9375rem", color: "#374151" }}>Vital Accounting &amp; Tax Services LLC serves clients throughout New Jersey</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {nearbyAreas.map((area) => (
                  <Link
                    key={area}
                    href={`/service-areas/${area.toLowerCase().replace(/,?\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-nj$/, "")}-nj`}
                    style={{ padding: "0.5rem 1rem", backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "#374151", textDecoration: "none", transition: "border-color 180ms ease, color 180ms ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1B4332"; e.currentTarget.style.color = "#1B4332"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#374151"; }}
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", display: "block", marginBottom: "1.25rem" }}>
            Serving {displayLocation}
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Ready to Discuss Your Tax Situation?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", maxWidth: "520px", margin: "0 auto 2.75rem", lineHeight: 1.8 }}>
            If you are earning $350,000+ or facing a significant federal tax obligation in the {city} area, contact Vital Accounting &amp; Tax Services LLC to request a consultation.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          section > .container > div[style*="grid-template-columns: 1fr 1fr"],
          section > .container > div[style*="grid-template-columns: 1fr 1.5fr"],
          section > .container > div[style*="grid-template-columns: 1fr 1.25fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
