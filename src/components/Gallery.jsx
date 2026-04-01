import galleryImages from "../data/galleryData";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label">Our Vibe</div>
          <h2 className="section-title">
            A Peek <span style={{ color: "#c45e7a" }}>Inside</span>
          </h2>
          <p style={{ color: "#9a7070", fontSize: "15px" }}>
            Warm corners, pretty brews, and happy moments. 📸
          </p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
