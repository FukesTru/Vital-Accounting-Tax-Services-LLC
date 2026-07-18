/**
 * Home.tsx — Vital Accounting & Tax Services LLC
 * Design: Forest Counsel — white, deep forest green, warm cream
 * Hero: full-bleed image, clean headline, two CTAs (no form in hero)
 * Qualifying form question: "Does your annual income exceed $350,000?"
 * 3D card depth: subtle shadows, hover lift, layered sections
 * Animations: slower, scroll-triggered only
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import LeadForm from "@/components/LeadForm";

// Premium CDN images
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-exec-office-7Ng9FMY27reajLSRMXXX2q.webp";
const ADVISORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-tax-desk-e5TVkRLDrqKuWmnAjzQGZv.webp";
const CONSULT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-consultation-room-GWgibbHoJoXL4BQQ36Li6N.webp";
const NJ_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/HR4QEbSY8a9WeoViWm5HgH/vital-nj-architecture-YQtdYkcBuMoudyBrBy5Q88.webp";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const services = [
  {
    label: "Tax Strategy",
    href: "/services/tax-strategy",
    desc: "Comprehensive tax positioning for high-income individuals and households with complex federal obligations.",
  },
  {
    label: "Tax Planning",
    href: "/services/tax-planning",
    desc: "Forward-looking planning that aligns your income, investments, and obligations with a structured annual strategy.",
  },
  {
    label: "High-Income Tax Support",
    href: "/services/high-income-tax-support",
    desc: "Dedicated support for taxpayers earning $350,000 or more, where the complexity of your situation demands more.",
  },
  {
    label: "Tax Resolution",
    href: "/services/tax-resolution",
    desc: "Structured guidance for taxpayers facing significant federal tax obligations of $50,000 or more.",
  },
  {
    label: "Business Tax Support",
    href: "/services/business-tax-support",
    desc: "Tax support for business owners, executives, and self-employed professionals with complex income structures.",
  },
  {
    label: "Individual Tax Services",
    href: "/services/individual-tax-services",
    desc: "Personalized tax services for individuals with investment income, multiple income sources, or significant deductions.",
  },
];

const process = [
  {
    num: "01",
    title: "Request a Consultation",
    desc: "Submit your consultation request. The firm reviews each inquiry to confirm the engagement is an appropriate fit before scheduling.",
  },
  {
    num: "02",
    title: "Initial Review Call",
    desc: "A focused conversation to understand your income structure, current tax situation, and what you are hoping to address.",
  },
  {
    num: "03",
    title: "Structured Engagement",
    desc: "If the fit is confirmed, the firm begins a structured review of your tax position, obligations, and planning opportunities.",
  },
  {
    num: "04",
    title: "Ongoing Strategy",
    desc: "Continued engagement throughout the year to ensure your tax position remains organized, current, and well-structured.",
  },
];

const areas = [
  { label: "Randolph, NJ", href: "/service-areas/randolph-nj" },
  { label: "Morristown, NJ", href: "/service-areas/morristown-nj" },
  { label: "Caldwell, NJ", href: "/service-areas/caldwell-nj" },
  { label: "Montville, NJ", href: "/service-areas/montville-nj" },
  { label: "Paramus, NJ", href: "/service-areas/paramus-nj" },
  { label: "Bergen County, NJ", href: "/service-areas/bergen-county-nj" },
  { label: "Morris County, NJ", href: "/service-areas/morris-county-nj" },
];

function ConsultationForm(_props: { dark?: boolean }) {
  return <LeadForm height={620} />;
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const introReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const processReveal = useScrollReveal();
  const areasReveal = useScrollReveal();
  const formReveal = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover", backgroundPosition: "center 30%",
          transform: "scale(1.03)",
        }} />
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(15,40,25,0.88) 0%, rgba(15,40,25,0.72) 55%, rgba(15,40,25,0.45) 100%)" }} />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "100px" }}>
          <div style={{
            maxWidth: "780px",
            margin: "0 auto",
            textAlign: "center",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 900ms cubic-bezier(0.23,1,0.32,1), transform 900ms cubic-bezier(0.23,1,0.32,1)",
          }}>
            <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.5rem" }}>
              Vital Accounting &amp; Tax Services LLC — Randolph, NJ
            </span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.75rem" }}>
              If Your Tax Situation Demands More Than a Standard Filing, Let's Talk.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "580px", margin: "0 auto 2.5rem" }}>
              Vital Accounting &amp; Tax Services LLC is designed for clients with more complex tax situations — high income, significant federal obligations, or both.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "1rem 2.25rem",
                  backgroundColor: "#FFFFFF", color: "#1B4332",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  border: "2px solid #FFFFFF", textDecoration: "none", borderRadius: "2px",
                  transition: "background-color 200ms ease, box-shadow 200ms ease, transform 160ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F4F0"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; e.currentTarget.style.boxShadow = "none"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Request a Consultation
              </Link>
              <a
                href="tel:2018136448"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "1rem 2.25rem",
                  backgroundColor: "transparent", color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  border: "2px solid rgba(255,255,255,0.55)", textDecoration: "none", borderRadius: "2px",
                  transition: "background-color 200ms ease, border-color 200ms ease, transform 160ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Call (201) 813-6448
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ backgroundColor: "#1B4332", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ padding: "0" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}>
            {[
              { label: "Serving High-Income Clients", detail: "$350,000+ annual income" },
              { label: "Significant Tax Obligations", detail: "$50,000+ in federal taxes" },
              { label: "Consultation-Only Firm", detail: "Every engagement is reviewed" },
              { label: "Based in Randolph, NJ", detail: "Serving Morris & Bergen County" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "1.25rem 1.75rem",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#52B788", marginBottom: "0.25rem" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.72)", fontWeight: 400 }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={introReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center",
              opacity: introReveal.visible ? 1 : 0,
              transform: introReveal.visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1) 100ms, transform 800ms cubic-bezier(0.23,1,0.32,1) 100ms",
            }}
            className="responsive-grid-2"
          >
            <div>
              <span className="section-label">Our Approach</span>
              <span className="green-rule" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Clarity, Structure, and Professionalism
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                For clients earning $350,000 or more — or facing $50,000 or more in federal tax obligations — Vital Accounting &amp; Tax Services LLC provides a focused, structured approach to tax strategy designed around your income and situation.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                The firm is led by Salma Alemi and based in Randolph, NJ. Every engagement is treated with the seriousness, discretion, and professionalism that high-income clients expect.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    padding: "0.875rem 2rem",
                    backgroundColor: "#1B4332", color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                    letterSpacing: "0.07em", textTransform: "uppercase",
                    border: "2px solid #1B4332", textDecoration: "none", borderRadius: "2px",
                    transition: "background-color 200ms ease, box-shadow 200ms ease, transform 160ms ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2D6A4F"; e.currentTarget.style.borderColor = "#2D6A4F"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(27,67,50,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; e.currentTarget.style.borderColor = "#1B4332"; e.currentTarget.style.boxShadow = "none"; }}
                  onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Book a Consultation
                </Link>
                <Link href="/about"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    padding: "0.875rem 2rem",
                    backgroundColor: "transparent", color: "#1B4332",
                    fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                    letterSpacing: "0.07em", textTransform: "uppercase",
                    border: "2px solid #1B4332", textDecoration: "none", borderRadius: "2px",
                    transition: "background-color 200ms ease, color 200ms ease, transform 160ms ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; e.currentTarget.style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1B4332"; }}
                  onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "4px", overflow: "hidden",
                boxShadow: "0 24px 64px rgba(27,67,50,0.18), 0 8px 24px rgba(0,0,0,0.1)",
                transform: "perspective(1000px) rotateY(-2deg) rotateX(1deg)",
                transition: "transform 400ms ease, box-shadow 400ms ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 32px 80px rgba(27,67,50,0.22), 0 12px 32px rgba(0,0,0,0.12)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "perspective(1000px) rotateY(-2deg) rotateX(1deg)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 64px rgba(27,67,50,0.18), 0 8px 24px rgba(0,0,0,0.1)"; }}
              >
                <img src={ADVISORY_IMG} alt="Tax strategy advisory" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              </div>
              {/* Floating accent card */}
              <div style={{
                position: "absolute", bottom: "-24px", left: "-24px",
                backgroundColor: "#1B4332", color: "#FFFFFF",
                padding: "1.25rem 1.5rem", borderRadius: "4px",
                boxShadow: "0 12px 40px rgba(27,67,50,0.35)",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1 }}>$350K+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#52B788", marginTop: "4px" }}>Income Threshold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={servicesReveal.ref}
            style={{
              opacity: servicesReveal.visible ? 1 : 0,
              transform: servicesReveal.visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="section-label" style={{ display: "block", textAlign: "center" }}>Services</span>
              <span className="green-rule" style={{ margin: "0 auto 1.25rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, maxWidth: "600px", margin: "0 auto" }}>
                A Focused Set of Services for Complex Tax Situations
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {services.map((svc, i) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  style={{
                    display: "block", textDecoration: "none",
                    backgroundColor: "#FFFFFF", padding: "2rem",
                    borderRadius: "4px",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)",
                    transition: "transform 300ms cubic-bezier(0.23,1,0.32,1), box-shadow 300ms cubic-bezier(0.23,1,0.32,1), border-color 300ms ease",
                    opacity: servicesReveal.visible ? 1 : 0,
                    transform: servicesReveal.visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(27,67,50,0.12), 0 4px 12px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1B4332";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB";
                  }}
                >
                  <span className="green-rule" />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.375rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>{svc.label}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "1.25rem" }}>{svc.desc}</p>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#1B4332", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0.9375rem 2.5rem",
                  backgroundColor: "#1B4332", color: "#FFFFFF",
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

      {/* ── CONSULTATION ROOM IMAGE + QUALIFIER ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="responsive-grid-2">
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "4px", overflow: "hidden",
                boxShadow: "0 24px 64px rgba(27,67,50,0.15), 0 8px 24px rgba(0,0,0,0.08)",
              }}>
                <img src={CONSULT_IMG} alt="Private consultation room" style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            <div>
              <span className="section-label">Who This Firm Serves</span>
              <span className="green-rule" />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                When Your Income Demands a More Deliberate Approach
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Vital Accounting &amp; Tax Services LLC was built around a straightforward premise: high-income taxpayers deserve a more organized, deliberate, and professional approach to their tax situation than a general filing service can provide.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                When your income or obligations reach a certain level, the complexity of your situation changes — and the firm you work with should reflect that.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  "Clients earning $350,000 or more annually",
                  "Taxpayers facing $50,000 or more in federal tax obligations",
                  "Business owners with complex income structures",
                  "Individuals with investment income or multiple income sources",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1B4332", marginTop: "8px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#374151", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0.875rem 2rem",
                  backgroundColor: "#1B4332", color: "#FFFFFF",
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
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={processReveal.ref}
            style={{
              opacity: processReveal.visible ? 1 : 0,
              transform: processReveal.visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "0.75rem" }}>How It Works</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, maxWidth: "560px", margin: "0 auto" }}>
                How a Consultation Engagement Works
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
              {process.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    padding: "2rem",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                    transition: "background-color 300ms ease, transform 300ms ease, box-shadow 300ms ease",
                    opacity: processReveal.visible ? 1 : 0,
                    transitionDelay: `${i * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
                  }}
                >
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: "rgba(82,183,136,0.4)", lineHeight: 1, marginBottom: "1rem" }}>{step.num}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0.9375rem 2.5rem",
                  backgroundColor: "#FFFFFF", color: "#1B4332",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  border: "2px solid #FFFFFF", textDecoration: "none", borderRadius: "2px",
                  transition: "background-color 200ms ease, box-shadow 200ms ease, transform 160ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F4F0"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; e.currentTarget.style.boxShadow = "none"; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={areasReveal.ref}
            style={{
              opacity: areasReveal.visible ? 1 : 0,
              transform: areasReveal.visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="responsive-grid-2">
              <div>
                <span className="section-label">Where We Serve</span>
                <span className="green-rule" />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                  Serving High-Income Taxpayers Across New Jersey
                </h2>
                <p style={{ fontSize: "1.0625rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Based in Randolph, NJ, the firm serves clients in select communities across Morris County and Bergen County. All engagements are handled with the same level of professionalism and discretion, regardless of location.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                  {areas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 500,
                        color: "#374151", textDecoration: "none",
                        padding: "0.625rem 0.875rem",
                        border: "1px solid #E5E7EB", borderRadius: "2px",
                        backgroundColor: "#FAFAF9",
                        transition: "border-color 200ms ease, color 200ms ease, background-color 200ms ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1B4332"; (e.currentTarget as HTMLAnchorElement).style.color = "#1B4332"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EEF5F1"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E5E7EB"; (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FAFAF9"; }}
                    >
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#1B4332", flexShrink: 0 }} />
                      {area.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{
                  borderRadius: "4px", overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(27,67,50,0.15), 0 8px 24px rgba(0,0,0,0.08)",
                }}>
                  <img src={NJ_IMG} alt="New Jersey communities served" style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION FORM ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6rem 0" }}>
        <div className="container">
          <div
            ref={formReveal.ref}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start",
              opacity: formReveal.visible ? 1 : 0,
              transform: formReveal.visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 800ms cubic-bezier(0.23,1,0.32,1), transform 800ms cubic-bezier(0.23,1,0.32,1)",
            }}
            className="responsive-grid-2"
          >
            <div>
              <span style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "0.75rem" }}>Get in Touch</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Request a Consultation
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "2rem" }}>
                The firm accepts engagements by consultation only. Submit your request and the firm will review your inquiry to determine whether your situation is a strong fit.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "📞", label: "Phone", value: "(201) 813-6448", href: "tel:2018136448" },
                  { icon: "📍", label: "Location", value: "104 Mount Pleasant Tpke, Randolph, NJ 07869", href: null },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1rem" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52B788", marginBottom: "2px" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.85)" }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", padding: "2.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
              <ConsultationForm dark />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .responsive-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
