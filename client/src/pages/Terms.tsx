/**
 * Terms.tsx — Terms & Conditions Placeholder
 * Design: Obsidian Counsel
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section style={{ backgroundColor: "#0D0F14", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid #252833" }}>
        <div className="container">
          <span className="section-label">Legal</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F2EFE9", maxWidth: "600px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Terms &amp; Conditions
          </h1>
        </div>
      </section>
      <section style={{ backgroundColor: "#141720", padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{
            backgroundColor: "#1C2030",
            border: "1px solid #252833",
            borderLeft: "3px solid #B8965A",
            padding: "2.5rem",
            marginBottom: "2rem",
          }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "#B8965A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Placeholder — Pending Final Review
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(242,239,233,0.7)", lineHeight: 1.8 }}>
              Terms &amp; Conditions content is pending final review and approval. This placeholder page will be replaced with the final approved legal text before launch.
            </p>
          </div>
          <p style={{ fontSize: "0.875rem", color: "#8A8A96", lineHeight: 1.8, marginBottom: "2rem" }}>
            If you have questions about the terms of engagement with Vital Accounting &amp; Tax Services LLC, please contact the firm directly.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Contact the Firm</Link>
            <Link href="/" className="btn-outline">Return Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
