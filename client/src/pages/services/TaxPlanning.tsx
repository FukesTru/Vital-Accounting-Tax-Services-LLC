/**
 * TaxPlanning.tsx — Vital Accounting & Tax Services LLC
 * Service page: Tax Planning
 * Design: Forest Counsel — white, deep forest green (#1B4332), warm cream (#F5F4F0)
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-exec-office-7Ng9FMY27reajLSRMXXX2q.webp";
const SIDE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-tax-desk-e5TVkRLDrqKuWmnAjzQGZv.webp";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function ConsultationForm() {
  return <LeadForm height={620} />;
}

const whatItems = [
  ["Income Structure Review", "A review of how your income is structured — W-2, self-employment, investment, rental, or business — and how each source affects your overall tax position."],
  ["Deduction and Credit Analysis", "A structured look at the deductions and credits available to you based on your income, filing status, and financial activity."],
  ["Estimated Tax Planning", "For clients with variable or self-employment income, the firm helps structure quarterly estimated tax payments to avoid underpayment penalties."],
  ["Year-End Positioning", "Strategic review of your tax position before year-end to identify any adjustments that can be made before the filing deadline."],
  ["Multi-Year Planning", "For clients with significant income changes, business transactions, or investment activity, the firm provides multi-year planning to manage the tax impact over time."],
  ["Coordination with Other Advisors", "The firm works alongside your financial advisor, attorney, or CPA to ensure your tax plan is aligned with your broader financial strategy."],
];

const faqs = [
  ["Who is tax planning designed for?", "Tax planning is designed for high-income individuals, business owners, and investors who want a structured, forward-looking approach to their tax obligations — not just a year-end filing."],
  ["How is tax planning different from tax preparation?", "Tax preparation is backward-looking — it records what happened. Tax planning is forward-looking — it helps you structure your financial activity to manage your tax position before the year ends."],
  ["When should I start tax planning?", "The earlier in the year, the better. However, the firm works with clients at any point in the year. Even mid-year or year-end planning can provide meaningful structure and clarity."],
  ["Do you work with clients outside of Randolph, NJ?", "Yes. The firm serves clients throughout Morris County and Bergen County, including Morristown, Caldwell, Montville, Paramus, and surrounding communities."],
];

export default function TaxPlanning() {
  const [heroVisible, setHeroVisible] = useState(false);
  const introReveal = useScrollReveal();
  const whatReveal = useScrollReveal();
  const faqReveal = useScrollReveal();
  const formReveal = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,40,25,0.92) 0%, rgba(15,40,25,0.78) 55%, rgba(15,40,25,0.55) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "80px" }}>
          <div style={{
            maxWidth: "680px",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 900ms cubic-bezier(0.23,1,0.32,1), transform 900ms cubic-bezier(0.23,1,0.32,1)",
          }}>
            <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>
              Tax Planning — Vital Accounting &amp; Tax Services LLC
            </span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              A Structured Annual Tax Plan Built Around Your Income
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: "560px" }}>
              For high-income individuals and business owners who want a deliberate, forward-looking approach to their tax obligations — not just a year-end filing.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "1rem 2.25rem", backgroundColor: "#FFFFFF", color: "#1B4332",
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase", border: "2px solid #FFFFFF",
                textDecoration: "none", borderRadius: "2px",
                transition: "background-color 200ms ease, transform 160ms ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F4F0"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Request a Consultation
              </Link>
              <a href="tel:2018136448" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "1rem 2.25rem", backgroundColor: "transparent", color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                border: "2px solid rgba(255,255,255,0.55)", textDecoration: "none", borderRadius: "2px",
                transition: "background-color 200ms ease, border-color 200ms ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; }}
              >
                Call (201) 813-6448
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="container">
          <div ref={introReveal.ref} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center",
            opacity: introReveal.visible ? 1 : 0,
            transform: introReveal.visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1) 100ms, transform 800ms cubic-bezier(0.23,1,0.32,1) 100ms",
          }} className="responsive-grid-2">
            <div>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1B4332", marginBottom: "0.75rem" }}>Tax Planning</span>
              <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Planning Ahead Is the Difference Between Reacting and Positioning
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Most taxpayers at higher income levels are not failing because of poor decisions — they are failing because no one has taken the time to build a structured plan around their specific income, deductions, and obligations. Vital Accounting &amp; Tax Services LLC provides a focused tax planning engagement designed to bring clarity and structure to your annual tax position.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                Tax planning is not about finding loopholes. It is about understanding your full financial picture — income sources, investment activity, business structures, and obligations — and building a plan that keeps you organized, compliant, and positioned appropriately for the year ahead.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "0.875rem 2rem", backgroundColor: "#1B4332", color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                border: "2px solid #1B4332", textDecoration: "none", borderRadius: "2px",
                transition: "background-color 200ms ease, box-shadow 200ms ease, transform 160ms ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2D6A4F"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(27,67,50,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; e.currentTarget.style.boxShadow = "none"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Book a Consultation
              </Link>
            </div>
            <div style={{
              borderRadius: "4px", overflow: "hidden",
              boxShadow: "0 24px 64px rgba(27,67,50,0.18), 0 8px 24px rgba(0,0,0,0.1)",
              transform: "perspective(1000px) rotateY(-2deg) rotateX(1deg)",
              transition: "transform 400ms ease, box-shadow 400ms ease",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 32px 80px rgba(27,67,50,0.22), 0 12px 32px rgba(0,0,0,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "perspective(1000px) rotateY(-2deg) rotateX(1deg)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 64px rgba(27,67,50,0.18), 0 8px 24px rgba(0,0,0,0.1)"; }}
            >
              <img src={SIDE_IMG} alt="Tax planning consultation" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "6rem 0" }}>
        <div className="container">
          <div ref={whatReveal.ref} style={{
            opacity: whatReveal.visible ? 1 : 0,
            transform: whatReveal.visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
          }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1B4332", marginBottom: "0.75rem" }}>Scope of Service</span>
              <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#1B4332", margin: "0 auto 1.25rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, maxWidth: "600px", margin: "0 auto" }}>
                What Tax Planning Covers
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {whatItems.map((item, i) => (
                <div key={i} style={{
                  backgroundColor: "#FFFFFF", padding: "2rem", borderRadius: "4px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)",
                  transition: "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
                  opacity: whatReveal.visible ? 1 : 0,
                  transitionDelay: `${i * 80}ms`,
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(27,67,50,0.12)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#1B4332"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB"; }}
                >
                  <span style={{ display: "block", width: "32px", height: "2px", backgroundColor: "#1B4332", marginBottom: "1rem" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>{item[0]}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.7 }}>{item[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "0.9375rem 2.5rem", backgroundColor: "#1B4332", color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                border: "2px solid #1B4332", textDecoration: "none", borderRadius: "2px",
                transition: "background-color 200ms ease, box-shadow 200ms ease, transform 160ms ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2D6A4F"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(27,67,50,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; e.currentTarget.style.boxShadow = "none"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div ref={faqReveal.ref} style={{
            opacity: faqReveal.visible ? 1 : 0,
            transform: faqReveal.visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
          }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1B4332", marginBottom: "0.75rem" }}>Common Questions</span>
              <span style={{ display: "block", width: "40px", height: "2px", backgroundColor: "#1B4332", margin: "0 auto 1.25rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  borderBottom: "1px solid #E5E7EB", paddingBottom: "1.5rem",
                  opacity: faqReveal.visible ? 1 : 0,
                  transitionDelay: `${i * 80}ms`,
                  transition: "opacity 600ms ease",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>{faq[0]}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.75 }}>{faq[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ backgroundColor: "#1B4332", padding: "6rem 0" }}>
        <div className="container">
          <div ref={formReveal.ref} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start",
            opacity: formReveal.visible ? 1 : 0,
            transform: formReveal.visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
          }} className="responsive-grid-2">
            <div>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "0.75rem" }}>Get in Touch</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Request a Consultation
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "2rem" }}>
                The firm accepts engagements by consultation only. Submit your request and the firm will review your inquiry to determine whether your situation is a strong fit.
              </p>
              <a href="tel:2018136448" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", fontWeight: 600, color: "#52B788", textDecoration: "none", marginBottom: "0.5rem" }}>
                (201) 813-6448
              </a>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)" }}>104 Mount Pleasant Tpke, Randolph, NJ 07869</span>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", padding: "2.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .responsive-grid-2 { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </Layout>
  );
}
