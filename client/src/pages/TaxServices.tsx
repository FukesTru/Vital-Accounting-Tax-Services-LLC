/**
 * TaxServices.tsx — Vital Accounting & Tax Services LLC
 * Design: Forest Counsel — deep forest green (#1B4332), white, warm cream
 * Consolidated tax services page — wrapped in global Layout
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";

const HERO_BG = "/manus-storage/vital2-hero_8cbde934.jpg";
const ADVISORY_IMG = "/manus-storage/vital-office-advisory_208a8e99.jpg";
const PHONE = "(201) 953-4548";
const PHONE_RAW = "2019534548";

const services = [
  {
    title: "Annual Tax Planning",
    desc: "Year-round tax planning designed to reduce your federal and state tax burden before year-end. We work with you throughout the year to identify deductions, structure income, and make proactive decisions — not reactive ones.",
  },
  {
    title: "High-Income Tax Strategy",
    desc: "Structured tax strategy for individuals and households with significant federal obligations. We analyze your full income picture — W-2, business income, investments, and more — and build a plan that addresses your specific situation.",
  },
  {
    title: "Business Tax Support",
    desc: "Tax preparation, planning, and advisory for small business owners, LLCs, S-Corps, and partnerships. We help business owners understand their tax position, plan for quarterly obligations, and stay compliant.",
  },
  {
    title: "Individual Tax Services",
    desc: "Comprehensive individual tax preparation for clients with straightforward or complex returns. Whether you have multiple income sources, investment activity, or life changes that affect your taxes, we handle it with care.",
  },
  {
    title: "Tax Filing Preparation",
    desc: "Accurate, thorough tax return preparation for individuals and businesses. We review your documents carefully, identify opportunities, and file with confidence. No rushed, assembly-line processing.",
  },
  {
    title: "Tax Resolution and IRS Notice Support",
    desc: "If you have received an IRS notice, have unfiled returns, or are dealing with a tax issue that needs to be resolved, we can help you understand your options and work toward a clear path forward.",
  },
];

const audiences = [
  {
    label: "Business Owners",
    detail: "LLCs, S-Corps, sole proprietors, and partnerships who need structured tax planning and year-round support.",
  },
  {
    label: "High-Income Individuals",
    detail: "Individuals and households with complex income situations, significant federal obligations, or multiple income sources.",
  },
  {
    label: "Self-Employed Professionals",
    detail: "Consultants, contractors, and independent professionals who need proactive quarterly planning and filing support.",
  },
  {
    label: "Families with Complex Returns",
    detail: "Families navigating investment income, real estate, life transitions, or multi-state tax situations.",
  },
  {
    label: "Clients Seeking Year-Round Guidance",
    detail: "Individuals who want a tax professional available throughout the year — not just during filing season.",
  },
];

function useFadeIn(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 900ms ${delay}ms cubic-bezier(0.23,1,0.32,1), transform 900ms ${delay}ms cubic-bezier(0.23,1,0.32,1)`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function ServiceCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  const ref = useFadeIn(delay);
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderTop: "3px solid #1B4332",
        padding: "2rem 1.75rem",
        borderRadius: "2px",
      }}
    >
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.875rem", lineHeight: 1.2 }}>
        {title}
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
        {desc}
      </p>
    </div>
  );
}

function AudienceCard({ label, detail, delay }: { label: string; detail: string; delay: number }) {
  const ref = useFadeIn(delay);
  return (
    <div ref={ref} style={{ padding: "1.75rem", backgroundColor: "#F9FAFB", borderLeft: "3px solid #1B4332", borderRadius: "2px" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem", fontWeight: 700, color: "#111827", marginBottom: "0.625rem" }}>
        {label}
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
        {detail}
      </p>
    </div>
  );
}

export default function TaxServices() {
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useFadeIn(0);
  const servicesHeaderRef = useFadeIn(0);
  const audienceRef = useFadeIn(0);
  const ctaRef = useFadeIn(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 1000ms cubic-bezier(0.23,1,0.32,1), transform 1000ms cubic-bezier(0.23,1,0.32,1)";
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <Layout>
      <div>
        {/* HERO */}
        <section style={{ position: "relative", minHeight: "520px", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 25%" }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,26,18,0.72)" }} />
          <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "120px", paddingBottom: "80px" }}>
            <div ref={heroRef}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>
                Tax Services — Vital Accounting &amp; Tax Services LLC
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: "700px" }}>
                Proactive Tax Planning and Year-Round Tax Support
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
                Vital Accounting &amp; Tax Services LLC works with individuals, business owners, and high-income taxpayers who need more than a standard filing. We provide structured tax planning, strategic guidance, and year-round support designed around your specific situation.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", backgroundColor: "#FFFFFF", color: "#1B4332", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "background-color 200ms ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F0FDF4"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                >
                  Request a Consultation
                </Link>
                <a href={`tel:${PHONE_RAW}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2rem", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.5)", textDecoration: "none", borderRadius: "2px", transition: "border-color 200ms ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="tax-services-grid">
              <div ref={overviewRef}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1B4332", marginBottom: "1rem" }}>
                  Our Approach
                </div>
                <div style={{ width: "36px", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Tax Planning That Works Before Tax Season Arrives
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Most people only think about taxes when it is time to file. By then, most of the planning opportunities have already passed. Vital Accounting &amp; Tax Services LLC is built around a different approach: working with clients throughout the year so that decisions are made with their tax impact in mind.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Whether you are a business owner managing quarterly obligations, a high-income individual looking to reduce your federal tax burden, or someone who simply wants a more organized and proactive relationship with your taxes, the firm is structured to support you at every stage.
                </p>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1.75rem", backgroundColor: "#1B4332", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "background-color 200ms ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2D6A4F"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; }}
                >
                  Schedule a Consultation
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <img src={ADVISORY_IMG} alt="Tax advisory consultation" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "2px", display: "block" }} />
                <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", backgroundColor: "#1B4332", color: "#FFFFFF", padding: "1.5rem 2rem", maxWidth: "260px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.375rem" }}>Year-Round</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Tax Guidance Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section style={{ backgroundColor: "#F9FAFB", padding: "5rem 0" }}>
          <div className="container">
            <div ref={servicesHeaderRef} style={{ marginBottom: "3rem" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1B4332", marginBottom: "1rem" }}>
                Core Tax Services
              </div>
              <div style={{ width: "36px", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, maxWidth: "560px" }}>
                What the Firm Provides
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {services.map((s, i) => (
                <ServiceCard key={s.title} title={s.title} desc={s.desc} delay={i * 100} />
              ))}
            </div>
            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2.25rem", backgroundColor: "#1B4332", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "background-color 200ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2D6A4F"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1B4332"; }}
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 0" }}>
          <div className="container">
            <div ref={audienceRef} style={{ marginBottom: "3rem" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1B4332", marginBottom: "1rem" }}>
                Who This Is For
              </div>
              <div style={{ width: "36px", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, color: "#111827", lineHeight: 1.2, maxWidth: "560px" }}>
                Clients Who Benefit Most from This Approach
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {audiences.map((a, i) => (
                <AudienceCard key={a.label} label={a.label} detail={a.detail} delay={i * 120} />
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section ref={ctaRef} style={{ backgroundColor: "#1B4332", padding: "5rem 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>
              Get Started
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
              Ready to Take a More Structured Approach to Your Taxes?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 2.5rem" }}>
              Contact Vital Accounting &amp; Tax Services LLC to schedule a consultation. The firm accepts new clients by consultation only.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2.25rem", backgroundColor: "#FFFFFF", color: "#1B4332", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "background-color 200ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F0FDF4"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
              >
                Request a Consultation
              </Link>
              <a href={`tel:${PHONE_RAW}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.875rem 2.25rem", backgroundColor: "transparent", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.45)", textDecoration: "none", borderRadius: "2px", transition: "border-color 200ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FFFFFF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; }}
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .tax-services-grid {
              grid-template-columns: 1fr !important;
            }
            .tax-services-grid img {
              height: 280px !important;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
