/**
 * Layout.tsx — Vital Accounting & Tax Services LLC
 * Design: Forest Counsel — white, deep forest green (#1B4332), warm cream
 * Simplified navigation: Tax Services single link (no dropdown)
 * Scroll-aware transparent → opaque nav transition
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

const LOGO_URL = "/manus-storage/vital-v-transparent_da060913.png";

const areaLinks = [
  { label: "Randolph, NJ", href: "/service-areas/randolph-nj" },
  { label: "Morristown, NJ", href: "/service-areas/morristown-nj" },
  { label: "Caldwell, NJ", href: "/service-areas/caldwell-nj" },
  { label: "Montville, NJ", href: "/service-areas/montville-nj" },
  { label: "Paramus, NJ", href: "/service-areas/paramus-nj" },
  { label: "Bergen County, NJ", href: "/service-areas/bergen-county-nj" },
  { label: "Morris County, NJ", href: "/service-areas/morris-county-nj" },
];

function DropdownMenu({ items, isLight }: { items: { label: string; href: string }[]; isLight: boolean }) {
  return (
    <div style={{
      position: "absolute",
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      minWidth: "220px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E5E7EB",
      borderRadius: "4px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      overflow: "hidden",
      zIndex: 200,
      animation: "dropdownIn 180ms cubic-bezier(0.23,1,0.32,1) both",
    }}>
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            display: "block",
            padding: "0.75rem 1.25rem",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "#374151",
            textDecoration: "none",
            borderBottom: i < items.length - 1 ? "1px solid #F3F4F6" : "none",
            transition: "background-color 150ms ease, color 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#EEF5F1";
            e.currentTarget.style.color = "#1B4332";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#374151";
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setAreasOpen(false);
    setMobileAreasOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isTaxServicesActive = location === "/tax-services" || location.startsWith("/services/");
  const isHeroPage = location === "/" || location === "/tax-services" || location.startsWith("/services/") || location.startsWith("/service-areas/");
  const isLight = scrolled || !isHeroPage;
  const textColor = isLight ? "#374151" : "rgba(255,255,255,0.92)";
  const activeColor = isLight ? "#1B4332" : "#FFFFFF";
  const activeBorder = isLight ? "#1B4332" : "#FFFFFF";
  const logoColor = isLight ? "#111827" : "#FFFFFF";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FFFFFF", color: "#374151" }}>
      {/* ── NAV ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isLight ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: isLight ? "1px solid #E5E7EB" : "1px solid transparent",
          transition: "background-color 300ms cubic-bezier(0.23,1,0.32,1), border-color 300ms ease",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <img
              src={LOGO_URL}
              alt="Vital Accounting & Tax Services LLC"
              style={{ height: "38px", width: "32px", objectFit: "contain", filter: isLight ? "invert(18%) sepia(40%) saturate(800%) hue-rotate(110deg) brightness(60%) contrast(120%)" : "brightness(0) invert(1)", transition: "filter 300ms ease" }}
            />
            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: logoColor,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                transition: "color 300ms ease",
              }}>
                Vital Accounting
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 600,
                color: isLight ? "#1B4332" : "rgba(255,255,255,0.7)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginTop: "2px",
                transition: "color 300ms ease",
              }}>
                &amp; Tax Services LLC
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">

            <Link href="/" style={{ padding: "0.5rem 0.875rem", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: location === "/" ? activeColor : textColor, textDecoration: "none", transition: "color 200ms ease", borderBottom: location === "/" ? `1.5px solid ${activeBorder}` : "1.5px solid transparent" }}>
              Home
            </Link>

            <Link href="/tax-services" style={{ padding: "0.5rem 0.875rem", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: isTaxServicesActive ? activeColor : textColor, textDecoration: "none", transition: "color 200ms ease", borderBottom: isTaxServicesActive ? `1.5px solid ${activeBorder}` : "1.5px solid transparent" }}>
              Tax Services
            </Link>

            <Link href="/about" style={{ padding: "0.5rem 0.875rem", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: location === "/about" ? activeColor : textColor, textDecoration: "none", transition: "color 200ms ease", borderBottom: location === "/about" ? `1.5px solid ${activeBorder}` : "1.5px solid transparent" }}>
              About
            </Link>

            {/* Service Areas dropdown */}
            <div ref={areasRef} style={{ position: "relative" }}>
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.25rem",
                  padding: "0.5rem 0.875rem",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500,
                  color: location.startsWith("/service-areas") ? activeColor : textColor,
                  background: "none", border: "none",
                  borderBottom: location.startsWith("/service-areas") ? `1.5px solid ${activeBorder}` : "1.5px solid transparent",
                  cursor: "pointer", transition: "color 200ms ease",
                }}
              >
                Service Areas
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 200ms ease", transform: areasOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {areasOpen && <DropdownMenu items={areaLinks} isLight={isLight} />}
            </div>

            <Link href="/contact" style={{ padding: "0.5rem 0.875rem", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: location === "/contact" ? activeColor : textColor, textDecoration: "none", transition: "color 200ms ease", borderBottom: location === "/contact" ? `1.5px solid ${activeBorder}` : "1.5px solid transparent" }}>
              Contact
            </Link>

            <Link
              href="/contact"
              style={{
                marginLeft: "0.75rem",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "0.625rem 1.375rem",
                backgroundColor: "#1B4332",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                border: "2px solid #1B4332",
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background-color 200ms ease, box-shadow 200ms ease",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2D6A4F";
                e.currentTarget.style.borderColor = "#2D6A4F";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(27,67,50,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1B4332";
                e.currentTarget.style.borderColor = "#1B4332";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Request a Consultation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: "22px", height: "1.5px",
                backgroundColor: isLight ? "#111827" : "#FFFFFF",
                transition: "all 200ms ease",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E5E7EB", padding: "1.5rem 1.25rem 2rem", maxHeight: "80vh", overflowY: "auto" }}>
            <Link href="/" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#374151", textDecoration: "none", padding: "0.875rem 0", borderBottom: "1px solid #F3F4F6" }}>
              Home
            </Link>

            <Link href="/tax-services" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#374151", textDecoration: "none", padding: "0.875rem 0", borderBottom: "1px solid #F3F4F6" }}>
              Tax Services
            </Link>

            <Link href="/about" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#374151", textDecoration: "none", padding: "0.875rem 0", borderBottom: "1px solid #F3F4F6" }}>
              About
            </Link>

            {/* Mobile Service Areas */}
            <div>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#374151", background: "none", border: "none", padding: "0.875rem 0", borderBottom: "1px solid #F3F4F6", cursor: "pointer" }}
              >
                Service Areas
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileAreasOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}>
                  <path d="M1 1l4 4 4-4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileAreasOpen && (
                <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                  {areaLinks.map((link) => (
                    <Link key={link.href} href={link.href} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#1B4332", textDecoration: "none", padding: "0.625rem 0", borderBottom: "1px solid #F9FAFB" }}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 500, color: "#374151", textDecoration: "none", padding: "0.875rem 0", borderBottom: "1px solid #F3F4F6" }}>
              Contact
            </Link>

            <Link
              href="/contact"
              style={{
                marginTop: "1.5rem", display: "block", textAlign: "center",
                padding: "0.875rem 1.5rem",
                backgroundColor: "#1B4332", color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                border: "2px solid #1B4332", textDecoration: "none", borderRadius: "2px",
              }}
            >
              Request a Consultation
            </Link>
          </div>
        )}
      </header>

      {/* ── PAGE CONTENT ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#1B4332", color: "#D1D5DB" }}>

        {/* Footer body */}
        <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
                <img src={LOGO_URL} alt="Vital Accounting" style={{ height: "32px", width: "28px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 700, color: "#F9FAFB" }}>Vital Accounting</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5625rem", fontWeight: 600, color: "#52B788", letterSpacing: "0.14em", textTransform: "uppercase" }}>&amp; Tax Services LLC</div>
                </div>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#9CA3AF", lineHeight: 1.7, maxWidth: "240px" }}>
                Proactive tax planning and year-round tax support for individuals, business owners, and high-income taxpayers. Based in Randolph, NJ.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>Quick Links</div>
              {[
                { label: "Home", href: "/" },
                { label: "Tax Services", href: "/tax-services" },
                { label: "About", href: "/about" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#9CA3AF", textDecoration: "none", marginBottom: "0.5rem", transition: "color 180ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#52B788")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Service Areas */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>Service Areas</div>
              {areaLinks.map((area) => (
                <Link key={area.href} href={area.href} style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#9CA3AF", textDecoration: "none", marginBottom: "0.5rem", transition: "color 180ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#52B788")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                >
                  {area.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#52B788", marginBottom: "1.25rem" }}>Contact</div>
              <div style={{ fontSize: "0.875rem", color: "#9CA3AF", marginBottom: "0.375rem" }}>104 Mount Pleasant Tpke</div>
              <div style={{ fontSize: "0.875rem", color: "#9CA3AF", marginBottom: "1rem" }}>Randolph, NJ 07869</div>
              <a href="tel:2018136448" style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#52B788", textDecoration: "none", marginBottom: "1.5rem" }}>
                (201) 813-6448
              </a>
              <Link href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0.625rem 1.25rem",
                  backgroundColor: "#1B4332", color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none", borderRadius: "2px",
                  transition: "border-color 200ms ease, background-color 200ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; e.currentTarget.style.backgroundColor = "#2D6A4F"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.backgroundColor = "#1B4332"; }}
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
              &copy; {new Date().getFullYear()} Vital Accounting &amp; Tax Services LLC. All rights reserved. Based in Randolph, NJ.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy-policy" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/terms-of-service" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
