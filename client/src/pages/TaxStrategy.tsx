/**
 * TaxStrategy.tsx — High-Income Tax Strategy Service Page
 * Design: Forest Counsel — clean white, deep forest green (#1B4332), Cormorant Garamond + Inter
 * Standalone deep-content SEO page targeting high-income NJ taxpayers
 */
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";
import { useFadeUp } from "@/hooks/useFadeUp";

const HERO_BG =
  "/manus-storage/vital2-hero_8cbde934.jpg";
const OFFICE_IMG =
  "/manus-storage/vital-office-advisory_208a8e99.jpg";
const PLANNING_IMG =
  "/manus-storage/vital-tax-planning_5753010a.jpg";
const CONSULT_IMG =
  "/manus-storage/vital-consultation_b1589086.jpg";

const forWhom = [
  {
    title: "High-Income Individuals",
    body: "Clients earning $350,000 or more annually — whether from salary, business income, investment returns, or a combination of sources — whose federal tax position has grown complex enough to warrant a more deliberate, structured approach.",
  },
  {
    title: "Business Owners and Entrepreneurs",
    body: "Self-employed individuals, S-corp owners, and business owners whose compensation structure, pass-through income, or entity-level decisions create meaningful tax planning considerations.",
  },
  {
    title: "Taxpayers Facing $50,000+ in Federal Obligations",
    body: "When your federal tax liability reaches a significant level, understanding the full scope of that obligation — and the factors driving it — is no longer optional. It is essential.",
  },
  {
    title: "Investors with Complex Income",
    body: "Individuals with capital gains, rental income, stock compensation, or other investment-related income who want a clearer picture of how those sources interact with their overall federal tax position.",
  },
  {
    title: "New Jersey Residents Seeking Proactive Guidance",
    body: "High-income taxpayers in Randolph, Morristown, Caldwell, Montville, Paramus, Bergen County, and Morris County who want a year-round strategic tax conversation — not just an annual filing.",
  },
];

const whatWeReview = [
  {
    icon: "01",
    title: "Income Structure & Sources",
    body: "We review all sources of income — wages, business distributions, investment returns, rental income, and other compensation — to understand the full picture of your federal tax exposure.",
  },
  {
    icon: "02",
    title: "Federal Tax Obligations",
    body: "We examine your current and projected federal tax obligations, identifying the key drivers and helping you understand exactly what you owe and why.",
  },
  {
    icon: "03",
    title: "Entity & Compensation Considerations",
    body: "For business owners, we review how your entity structure and compensation arrangements interact with your personal tax position — an area where the details matter significantly.",
  },
  {
    icon: "04",
    title: "Timing & Year-Round Planning",
    body: "Tax strategy is not a once-a-year event. We discuss the timing of income, deductions, and key decisions throughout the year — not just at filing time.",
  },
  {
    icon: "05",
    title: "Retirement & Investment Accounts",
    body: "We consider how contributions, distributions, and account structures interact with your overall tax position — an important component of high-income tax planning.",
  },
  {
    icon: "06",
    title: "State & Local Tax Interaction",
    body: "For New Jersey residents, we consider how state and local tax obligations interact with your federal position — particularly relevant for high-income earners in NJ.",
  },
];

const faqs = [
  {
    q: "What is high-income tax strategy?",
    a: "High-income tax strategy is a focused, structured approach to understanding and managing your federal tax obligations when your income or tax liability has reached a level where generic filing services are no longer sufficient. It involves a deliberate review of your income sources, obligations, entity structure, and planning considerations — designed to give you clarity, organization, and a more informed position.",
  },
  {
    q: "Who qualifies for this service?",
    a: "Vital Accounting & Tax Services LLC works with clients earning $350,000 or more annually, or taxpayers facing $50,000 or more in federal tax obligations. If your income or tax situation has grown complex — multiple income streams, business ownership, significant investment income, or large federal bills — this service is designed for you.",
  },
  {
    q: "Does this service guarantee a reduction in my taxes?",
    a: "No. A tax strategy conversation is designed to help you better understand your situation, identify areas that may benefit from closer attention, and make more informed decisions. It does not guarantee any specific tax outcome or reduction in tax liability. Any representation to the contrary would be misleading, and the firm does not make such claims.",
  },
  {
    q: "Do you serve clients outside of Randolph, NJ?",
    a: "Yes. Vital Accounting & Tax Services LLC serves high-income taxpayers in Randolph, Morristown, Caldwell, Montville, Paramus, Bergen County, and Morris County, New Jersey. The firm does not claim physical offices in those communities — consultations are available to clients throughout the service area.",
  },
  {
    q: "How do I get started?",
    a: "The first step is to request a consultation. Contact the firm by phone at (201) 953-4548 or submit a consultation request through this website. A member of the firm will reach out to discuss your situation and determine whether a structured tax strategy engagement is the right fit.",
  },
  {
    q: "What is the difference between tax strategy and tax preparation?",
    a: "Tax preparation is the process of compiling and filing your tax returns based on what has already happened. Tax strategy is a forward-looking, proactive conversation about how your income, decisions, and circumstances interact with your federal obligations — and what considerations are worth examining throughout the year. High-income taxpayers benefit most from combining both.",
  },
];

export default function TaxStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ref1 = useFadeUp();
  const ref2 = useFadeUp();
  const ref3 = useFadeUp();
  const ref4 = useFadeUp();
  const ref5 = useFadeUp();

  return (
    <Layout>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 25%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,25,18,0.97) 0%, rgba(10,25,18,0.65) 55%, rgba(10,25,18,0.25) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "160px", paddingBottom: "5.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", backgroundColor: "#52B788" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788" }}>
              Core Service — Vital Accounting &amp; Tax Services LLC
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4.25rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.5rem", maxWidth: "780px" }}>
            High-Income Tax Strategy for New Jersey Taxpayers
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "2.25rem" }}>
            A structured, focused tax strategy engagement for high-income individuals and taxpayers facing significant federal obligations in Randolph, Morristown, Bergen County, Morris County, and surrounding New Jersey communities.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      {/* ── INTRO — What Is High-Income Tax Strategy ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref1}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="fade-up">
              <span className="section-label">What It Is</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                What Is High-Income Tax Strategy — and Why Does It Matter?
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                For most taxpayers, filing a return is a straightforward process. But when your income reaches $350,000 or more — or when your federal tax obligation climbs to $50,000 or higher — the complexity of your situation changes fundamentally. The decisions you make throughout the year, not just at filing time, begin to have meaningful consequences for your federal obligations.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                High-income tax strategy is a deliberate, organized approach to understanding that complexity. It is a focused conversation about your income sources, your obligations, your entity structure if applicable, and the planning considerations that are relevant to your specific situation.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "2rem" }}>
                At Vital Accounting &amp; Tax Services LLC, led by Salma Alemi and based in Randolph, NJ, this is the only kind of work the firm does. Not general tax preparation. Not bookkeeping. Focused, structured tax strategy for high-income clients who need more than a filing service.
              </p>
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
            </div>

            <div className="fade-up" style={{ position: "relative" }}>
              <img
                src={OFFICE_IMG}
                alt="High-income tax strategy office — Vital Accounting & Tax Services LLC, Randolph NJ"
                style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: "2rem",
                left: "-1.5rem",
                backgroundColor: "#1B4332",
                padding: "1.75rem 2rem",
                color: "#FFFFFF",
                maxWidth: "280px",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 700, color: "#52B788", lineHeight: 1, marginBottom: "0.5rem" }}>$350K+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>Annual income threshold for clients Vital Accounting & Tax Services LLC is designed to serve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref2}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <span className="section-label">Who This Is For</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
                This Service Is Designed for a Specific Type of Client
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>
                Vital Accounting &amp; Tax Services LLC does not serve general tax preparation clients. Every engagement is focused on high-income individuals and taxpayers whose situation warrants a more deliberate, structured approach. If you see yourself in one of the profiles below, this firm was built for you.
              </p>
            </div>
          </div>

          <div className="fade-up-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5px", backgroundColor: "#E5E7EB" }}>
            {forWhom.map((item, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "2.25rem 2rem" }}>
                <div style={{ width: "2rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1rem" }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.5rem" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem", lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>


      {/* ── WHAT WE REVIEW ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref3}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <span className="section-label">What We Review</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
                A Comprehensive Review of Your Tax Position
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>
                Every tax strategy engagement at Vital Accounting &amp; Tax Services LLC begins with a thorough, organized review of the factors that shape your federal tax position. The goal is clarity — not assumptions, not generic advice.
              </p>
            </div>
          </div>

          <div className="fade-up-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {whatWeReview.map((item) => (
              <div key={item.icon} style={{ borderTop: "2px solid #1B4332", paddingTop: "1.75rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.75rem", fontWeight: 700, color: "#E5EDE8", lineHeight: 1, marginBottom: "0.875rem" }}>{item.icon}</div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 700, color: "#111827", marginBottom: "0.625rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK — Planning ── */}
      <section style={{ position: "relative", height: "400px", overflow: "hidden" }}>
        <img
          src={PLANNING_IMG}
          alt="Tax planning documents — Vital Accounting & Tax Services LLC"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.55) 50%, rgba(27,67,50,0.15) 100%)" }} />
        <div className="container" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: "560px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              The Difference Between Filing and Strategy
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Filing tells the government what happened. Strategy shapes what happens next. For high-income taxpayers, the gap between those two approaches can be significant — and the earlier in the year you begin the conversation, the more useful it becomes.
            </p>
            <Link href="/contact" className="btn-white">Begin the Conversation</Link>
          </div>
        </div>
      </section>

      {/* ── THE ENGAGEMENT PROCESS ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref4}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="fade-up">
              <span className="section-label">The Process</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                How a Tax Strategy Engagement Works
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Every engagement at Vital Accounting &amp; Tax Services LLC follows a deliberate, structured process. There are no shortcuts, no generic templates, and no assumptions. The process is designed around your specific situation — not a one-size-fits-all approach.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                The goal of every engagement is the same: to give you a clearer, more organized understanding of your tax position — and to identify the considerations that are most relevant to your circumstances.
              </p>
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
            </div>

            <div className="fade-up">
              {[
                { num: "01", title: "Initial Consultation Request", body: "You contact the firm by phone or through the website. A member of the team will reach out to discuss your situation and determine whether a structured tax strategy engagement is the right fit for your circumstances." },
                { num: "02", title: "Situation Review", body: "We conduct a thorough review of your income sources, federal tax obligations, entity structure if applicable, and other relevant factors. This is not a surface-level review — it is a deliberate examination of the full picture." },
                { num: "03", title: "Strategic Discussion", body: "We walk through the relevant planning considerations for your specific situation — clearly, without jargon, and without making promises about outcomes. The goal is to give you the information and structure you need to make more informed decisions." },
                { num: "04", title: "Ongoing Engagement", body: "Tax strategy is not a once-a-year event. The firm remains available for ongoing strategic conversations as your income, circumstances, or obligations change throughout the year." },
              ].map((step, i) => (
                <div key={step.num} style={{ display: "flex", gap: "1.5rem", marginBottom: i < 3 ? "2rem" : 0 }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", backgroundColor: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>{step.num}</span>
                    </div>
                    {i < 3 && <div style={{ width: "1px", height: "calc(100% - 2.5rem)", backgroundColor: "#D1D5DB", margin: "0 auto" }} />}
                  </div>
                  <div style={{ paddingBottom: i < 3 ? "0.5rem" : 0 }}>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.8 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION IMAGE BREAK ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="fade-up">
              <span className="section-label">What to Expect</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                A Professional, Discreet, and Organized Engagement
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                High-income clients deserve a professional, discreet advisory relationship. At Vital Accounting &amp; Tax Services LLC, every engagement is treated with the seriousness and confidentiality it warrants. You will not be rushed, you will not receive generic advice, and you will not be sold on services you do not need.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                What you will receive is a focused, honest, and organized conversation about your tax situation — and the clarity that comes from working with a firm that understands the specific challenges facing high-income taxpayers in New Jersey.
              </p>
              <div style={{ backgroundColor: "#EEF5F1", borderLeft: "3px solid #1B4332", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.75, fontStyle: "italic" }}>
                  A tax strategy conversation is designed to help you better understand your situation and identify areas for review. It does not guarantee any specific tax outcome or reduction in tax liability.
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">Request a Consultation</Link>
                <a href="tel:2019534548" className="btn-outline">Call (201) 953-4548</a>
              </div>
            </div>
            <div className="fade-up">
              <img
                src={CONSULT_IMG}
                alt="Tax strategy consultation — Vital Accounting & Tax Services LLC, Randolph NJ"
                style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref5}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem", textAlign: "center" }}>
            <span className="section-label">Frequently Asked Questions</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", margin: "0 auto 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
              Common Questions About High-Income Tax Strategy
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
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    backgroundColor: openFaq === i ? "#1B4332" : "#EEF5F1",
                    border: "1.5px solid #1B4332",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background-color 200ms ease",
                    color: openFaq === i ? "#FFFFFF" : "#1B4332",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}>
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



      {/* ── INLINE FORM ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Get in Touch</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.5rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                Request a High-Income Tax Strategy Consultation
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
                If you are earning $350,000 or more, or facing a significant federal tax obligation, contact Vital Accounting &amp; Tax Services LLC to schedule a focused consultation. The firm will review your situation and discuss whether a structured tax strategy engagement is the right fit.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", backgroundColor: "#1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#FFFFFF", fontSize: "1rem" }}>&#9742;</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "3px" }}>Phone</div>
                    <a href="tel:2019534548" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.375rem", fontWeight: 700, color: "#111827", textDecoration: "none" }}>(201) 953-4548</a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", backgroundColor: "#EEF5F1", border: "1.5px solid #1B4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#1B4332", fontSize: "0.875rem" }}>&#9679;</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "3px" }}>Address</div>
                    <div style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.5 }}>104 Mount Pleasant Tpke<br />Randolph, NJ 07869</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#FFFFFF", padding: "2.75rem", border: "1px solid #E5E7EB" }}>
              <LeadForm height={620} />
            </div>
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
            When Your Tax Situation Demands More Than a Filing Service
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", maxWidth: "540px", margin: "0 auto 2.75rem", lineHeight: 1.8 }}>
            If you are earning $350,000+ or facing a significant federal tax obligation, the firm is ready to have a focused, structured conversation about your situation. No generic advice. No assumptions. Just clarity.
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
          section > .container > div[style*="grid-template-columns: 1fr 1.25fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
