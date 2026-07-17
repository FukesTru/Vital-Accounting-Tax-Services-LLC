/**
 * ServiceAreas.tsx — Service Areas Index Page
 * Design: Forest Counsel — white, deep forest green
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useFadeUp } from "@/hooks/useFadeUp";

const areas = [
  {
    city: "Randolph",
    state: "NJ",
    county: "Morris County",
    href: "/service-areas/randolph-nj",
    description: "The firm's home base. Vital Accounting & Tax Services LLC is headquartered in Randolph and serves local high-income taxpayers directly.",
  },
  {
    city: "Morristown",
    state: "NJ",
    county: "Morris County",
    href: "/service-areas/morristown-nj",
    description: "The county seat of Morris County and a hub for high-income professionals, corporate executives, and business owners in northern New Jersey.",
  },
  {
    city: "Caldwell",
    state: "NJ",
    county: "Essex County",
    href: "/service-areas/caldwell-nj",
    description: "An established residential borough in Essex County with a significant population of high-income professionals and business owners.",
  },
  {
    city: "Montville",
    state: "NJ",
    county: "Morris County",
    href: "/service-areas/montville-nj",
    description: "An affluent township in Morris County known for its high-income residential community and concentration of executives and business owners.",
  },
  {
    city: "Paramus",
    state: "NJ",
    county: "Bergen County",
    href: "/service-areas/paramus-nj",
    description: "A commercially active Bergen County borough with a large population of high-income professionals, many of whom work in or near New York City.",
  },
  {
    city: "Bergen County",
    state: "NJ",
    county: "Bergen County",
    href: "/service-areas/bergen-county-nj",
    description: "One of the most affluent counties in the United States, home to a large concentration of high-income professionals and executives.",
  },
  {
    city: "Morris County",
    state: "NJ",
    county: "Morris County",
    href: "/service-areas/morris-county-nj",
    description: "One of New Jersey's most prosperous counties, encompassing Randolph, Morristown, Montville, and many other high-income communities.",
  },
];

export default function ServiceAreas() {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();

  return (
    <Layout>
      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#1B4332", paddingTop: "140px", paddingBottom: "5rem" }}>
        <div className="container">
          <span style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#52B788", marginBottom: "1rem" }}>
            Where We Serve
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem", maxWidth: "680px" }}>
            Service Areas
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: "560px" }}>
            Vital Accounting &amp; Tax Services LLC serves high-income taxpayers in select New Jersey communities. The firm is based in Randolph, NJ and serves clients in the following areas.
          </p>
        </div>
      </section>

      {/* ── AREAS GRID ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "6rem 0" }} ref={ref1}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "3rem" }}>
            <span className="section-label">New Jersey Service Areas</span>
            <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1.25rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 2.75vw, 2.375rem)", fontWeight: 700, color: "#111827", maxWidth: "560px", lineHeight: 1.2 }}>
              Serving High-Income Taxpayers Across Northern New Jersey
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.8, maxWidth: "600px", marginTop: "1rem" }}>
              The firm serves clients earning $350,000+ or facing $50,000 or more in federal taxes in the following communities. Select a location to learn more about how Vital Accounting &amp; Tax Services LLC can help taxpayers in that area.
            </p>
          </div>

          <div className="fade-up-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {areas.map((area, i) => (
              <Link key={i} href={area.href} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderTop: "3px solid #1B4332",
                    padding: "2rem",
                    height: "100%",
                    transition: "box-shadow 200ms ease, transform 200ms ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(27,67,50,0.12)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.375rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                        {area.city}, {area.state}
                      </h3>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginTop: "3px" }}>
                        {area.county}
                      </div>
                    </div>
                    <span style={{ color: "#1B4332", fontSize: "1.125rem", fontWeight: 700, flexShrink: 0 }}>&#8594;</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.75 }}>{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE ── */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "4rem 0", borderTop: "1px solid #E5E7EB" }} ref={ref2}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "center" }}>
            <div className="fade-up">
              <span className="section-label">Important Note</span>
              <div style={{ width: "2.5rem", height: "2px", backgroundColor: "#1B4332", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                About Our Service Area
              </h3>
            </div>
            <div className="fade-up">
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.8, marginBottom: "0.875rem" }}>
                Vital Accounting &amp; Tax Services LLC is based in Randolph, NJ and serves clients in the listed communities using a "serving clients in..." approach. The firm does not maintain physical office locations in every listed city or county.
              </p>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.75 }}>
                All consultations are conducted by appointment. To request a consultation, complete the form on the Contact page or call the firm directly at (201) 953-4548.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ backgroundColor: "#1B4332", padding: "6rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#52B788", display: "block", marginBottom: "1rem" }}>
            Get in Touch
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Ready to Discuss Your Tax Situation?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
            Contact Vital Accounting &amp; Tax Services LLC to request a consultation. The firm serves high-income taxpayers throughout northern New Jersey.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Request a Consultation</Link>
            <a href="tel:2019534548" className="btn-outline-white">Call (201) 953-4548</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div[style*="grid-template-columns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}
