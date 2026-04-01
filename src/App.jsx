import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Menu     from "./components/Menu";
import Gallery  from "./components/Gallery";
import Location from "./components/Location";
import Footer   from "./components/Footer";

// ── CTA Section (inline — lightweight, no separate file needed) ────────────
function CTA() {
  return (
    <section id="cta">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="cta-icon">💖</span>
        <h2 className="cta-title">Visit Cafe Sweetheart Today 💖</h2>
        <p className="cta-sub">
          Come, sit down, sip slowly — this place was made for you.
        </p>
        <div className="cta-btns">
          <a
            href="https://maps.google.com/?q=GOPAL+NIBAS+7/28+Bijoygarh+Rd+Golf+Green+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brown"
          >
            🗺️ Get Directions
          </a>
          <a href="#" className="btn-outline" style={{ background: "rgba(255,255,255,0.5)" }}>
            📞 Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <CTA />
      <Footer />
    </>
  );
}
