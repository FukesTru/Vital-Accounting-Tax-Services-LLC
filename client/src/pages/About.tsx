/**
 * About.tsx — About Vital Accounting & Tax Services LLC
 * Design: Forest Counsel — clean white, deep forest green (#1B4332), Cormorant Garamond + Inter
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useFadeUp } from "@/hooks/useFadeUp";

const OFFICE_IMG =
  "/manus-storage/vital-office-advisory_208a8e99.jpg";
const CONSULT_IMG =
  "/manus-storage/vital-consultation_b1589086.jpg";
const NJ_IMG =
  "/manus-storage/vital2-about_4ee027e7.jpg";

const pillars = [
  {
    title: "Clarity",
    body: "Every client engagement begins with a clear, organized understanding of the tax situation at hand. The firm does not make assumptions, offer generic advice, or rush to conclusions. The first priority is always to understand your specific circumstances fully.",
  },
  {
    title: "Structure",
    body: "Complex income and significant tax obligations require a structured, methodical approach. The firm brings organization to situations that can feel overwhelming — breaking down the relevant factors, identifying the key considerations, and presenting them in a way that is clear and actionable.",
  },
  {
    title: "Professionalism",
    body: "Clients earning $350,000+ or facing large federal tax obligations deserve a professional, discreet, and thoughtful advisory relationship. Every engagement at Vital Accounting & Tax Services LLC is treated with the seriousness and confidentiality it warrants.",
  },
  {
    title: "Honesty",
    body: "The firm does not make promises about tax outcomes, does not guarantee reductions in tax liability, and does not overstate what a tax strategy conversation can accomplish. Honest, accurate communication is the foundation of every client relationship.",
  },
];

export default function About() {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();
  const ref3 = useFadeUp();
  const ref4 = useFadeUp();

  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#1B4332", paddingTop: "150px", paddingBottom: "5.5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${NJ_IMG})`, backgroundSize: "cover", backgroundPosition: "center 60%", opacity: 0.15 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "block", width: "2rem", height: "1.5px", backgroundColor: "#52B788" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788" }}>
              About the Firm
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.5rem", maxWidth: "700px" }}>
            About Vital Accounting &amp; Tax Services LLC
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.8, maxWidth: "580px", marginBottom: "2.5rem" }}>
            A high-income tax strategy firm based in Randolph, NJ, led by Salma Alemi and focused exclusively on clients earning $350,000+ or facing $50,000+ in federal tax obligations.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      {/* ── FIRM OVERVIEW ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref1}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="fade-up" style={{ position: "relative" }}>
              <img
                src={OFFICE_IMG}
                alt="Vital Accounting & Tax Services LLC — Randolph, NJ tax strategy firm"
                style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: "2rem",
                right: "-1.5rem",
                backgroundColor: "#1B4332",
                padding: "1.75rem 2rem",
                color: "#FFFFFF",
                maxWidth: "280px",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.625rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "0.375rem" }}>Salma Alemi</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#52B788" }}>
                  Vital Accounting &amp; Tax Services LLC
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>Randolph, NJ</div>
              </div>
            </div>

            <div className="fade-up">
              <span className="section-label">The Firm</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                A Firm Built Exclusively for High-Income Tax Strategy
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Vital Accounting &amp; Tax Services LLC is led by Salma Alemi and focuses exclusively on high-income tax strategy for clients earning $350,000 or more annually, or taxpayers facing $50,000 or more in federal tax obligations.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                The firm was built around a simple premise: high-income taxpayers deserve a more deliberate, organized, and professional approach to their tax situation than a general filing service can provide. When your income or obligations reach a certain level, the complexity of your situation changes — and the firm you work with should reflect that.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Based in Randolph, NJ, the firm serves clients in select New Jersey communities including Morristown, Caldwell, Montville, Paramus, Bergen County, and Morris County. Every engagement is treated with the seriousness, discretion, and professionalism that high-income clients expect and deserve.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>
                The firm's approach is built around four core principles: clarity, structure, professionalism, and honesty. These are not marketing words — they are the standards that govern every client relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH PILLARS ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref2}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <span className="section-label">Our Approach</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", lineHeight: 1.12 }}>
                The Principles That Guide Every Engagement
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85 }}>
                These are not aspirational values — they are the operating standards that define how the firm works with every client, in every engagement, without exception.
              </p>
            </div>
          </div>

          <div className="fade-up-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5px", backgroundColor: "#E5E7EB" }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "2.5rem 2rem" }}>
                <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.25rem" }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.75rem", fontWeight: 700, color: "#E5EDE8", lineHeight: 1, marginBottom: "0.75rem" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "0.875rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "7rem 0" }} ref={ref3}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="fade-up">
              <span className="section-label">Who We Serve</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                Serving High-Income Taxpayers Across New Jersey
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Vital Accounting &amp; Tax Services LLC is not a general-purpose accounting firm. The firm focuses on a specific type of client: high-income individuals and taxpayers with significant federal tax obligations who want a more structured, organized approach to their tax situation.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                This focus is intentional. By working exclusively with high-income clients, the firm is able to bring a deeper level of attention, expertise, and structure to each engagement — rather than spreading resources across a broad range of general tax preparation work.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                The firm serves clients in Randolph, Morristown, Caldwell, Montville, Paramus, Bergen County, and Morris County, New Jersey. Consultations are available to clients throughout the service area.
              </p>
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
            </div>

            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", backgroundColor: "#E5E7EB" }}>
              {[
                { label: "Income Threshold", value: "$350,000+", note: "Annual income" },
                { label: "Federal Obligation", value: "$50,000+", note: "Tax threshold" },
                { label: "Primary Service", value: "Tax Strategy", note: "High-income focused" },
                { label: "Firm Leader", value: "Salma Alemi", note: "Randolph, NJ" },
                { label: "Morris County", value: "Served", note: "Morristown, Montville, Randolph" },
                { label: "Bergen County", value: "Served", note: "Paramus & surrounding areas" },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#FFFFFF", padding: "1.75rem 1.5rem" }}>
                  <div style={{ width: "1.75rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "0.875rem" }} />
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "0.375rem" }}>{item.label}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111827", lineHeight: 1.1, marginBottom: "0.25rem" }}>{item.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION IMAGE SECTION ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "7rem 0" }} ref={ref4}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="fade-up">
              <img
                src={CONSULT_IMG}
                alt="Tax strategy consultation — Vital Accounting & Tax Services LLC, Randolph NJ"
                style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="fade-up">
              <span className="section-label">Why It Matters</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.875rem, 3vw, 2.75rem)", fontWeight: 700, color: "#111827", marginBottom: "1.25rem", lineHeight: 1.12 }}>
                Why the Right Firm Matters at This Income Level
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                When your income reaches $350,000 or more, or when your federal tax obligations climb to $50,000 or higher, the stakes of your tax decisions increase significantly. The difference between a reactive, filing-only approach and a proactive, strategic one can be meaningful — not just in terms of your tax position, but in terms of your confidence and clarity around your obligations.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Vital Accounting &amp; Tax Services LLC was built to serve clients at exactly this level — with the depth, structure, and professionalism that the situation demands.
              </p>
              <div style={{ backgroundColor: "#EEF5F1", borderLeft: "3px solid #1B4332", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.75, fontStyle: "italic" }}>
                  The firm does not make promises about tax outcomes. Every engagement is focused on clarity, structure, and informed decision-making — not guarantees.
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">Request a Consultation</Link>
                <Link href="/tax-strategy" className="btn-outline">Learn About Our Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", display: "block", marginBottom: "1.25rem" }}>
            Get in Touch
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Ready to Discuss Your Tax Situation?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", maxWidth: "520px", margin: "0 auto 2.75rem", lineHeight: 1.8 }}>
            If you are earning $350,000+ or facing a significant federal tax obligation, contact Vital Accounting &amp; Tax Services LLC to request a consultation. The firm will review your situation and discuss whether a structured engagement is the right fit.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          section > .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
