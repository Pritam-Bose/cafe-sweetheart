const features = [
  { icon: "🌸", label: "Cozy Ambience"  },
  { icon: "💝", label: "Friendly Staff" },
  { icon: "✨", label: "Quality Food"   },
  { icon: "☕", label: "Fresh Brews"    },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-inner container">
        {/* Image Side */}
        <div className="about-img-wrap">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
            alt="Cafe Sweetheart interior"
          />
          <div className="about-badge-float">
            <span style={{ fontSize: "28px" }}>☕</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#4a3535" }}>
                Since 2020
              </div>
              <div style={{ fontSize: "11px", color: "#9a7070" }}>
                Serving with love
              </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <div className="section-label">Our Story</div>
          <h2 className="section-title">
            A Little Café with a{" "}
            <span style={{ color: "#c45e7a" }}>Big Heart</span>
          </h2>

          <p className="about-text">
            Nestled in the heart of Golf Green, Kolkata — Cafe Sweetheart is a cute
            and cozy café known for its warm atmosphere, friendly staff, and
            delicious food. Whether you're here for a quick chai or a long
            afternoon catch-up, every moment feels just right.
          </p>

          <p className="about-text">
            From rich handcrafted coffees to indulgent shakes and crispy bites,
            our menu is crafted with care — made to make you smile. 🌸
          </p>

          <div className="about-features">
            {features.map((f) => (
              <div key={f.label} className="feature-chip">
                <span style={{ fontSize: "18px" }}>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
