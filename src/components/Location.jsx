const MAP_SRC =
  "https://maps.google.com/maps?q=GOPAL+NIBAS+7%2F28+Bijoygarh+Rd+Golf+Green+Kolkata+West+Bengal+700040&output=embed";

export default function Location() {
  return (
    <section id="location">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label">Find Us</div>
          <h2 className="section-title">
            We're in{" "}
            <span style={{ color: "#c45e7a" }}>Golf Green, Kolkata</span>
          </h2>
        </div>

        <div className="location-inner">
          {/* Map */}
          <div className="map-wrap">
            <iframe
              src={MAP_SRC}
              allowFullScreen=""
              loading="lazy"
              title="Cafe Sweetheart Location — Golf Green, Kolkata"
            />
          </div>

          {/* Info Cards */}
          <div className="location-info">
            {/* Main Details */}
            <div className="info-card">
              <div className="info-card-title">📍 Cafe Sweetheart</div>

              <div className="info-row">
                <span className="info-icon">🏠</span>
                <div>
                  <div className="info-label">Address</div>
                  <div className="info-value">
                    GOPAL NIBAS, 7/28, Bijoygarh Rd,
                    <br />
                    Golf Green, Kolkata — 700040
                  </div>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon">🕐</span>
                <div>
                  <div className="info-label">Hours</div>
                  <div className="info-value">Opens at 12:00 PM</div>
                  <span className="open-badge">
                    <span className="open-dot" />
                    Open · Closes 11 PM
                  </span>
                </div>
              </div>

              <div className="info-row">
                <span className="info-icon">📞</span>
                <div>
                  <div className="info-label">Contact</div>
                  <div className="info-value">+91 98300 XXXXX</div>
                </div>
              </div>
            </div>

            {/* Getting Here Card */}
            <div
              className="info-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(248,200,220,.25), rgba(255,245,228,.7))",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>🚗</div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#4a3535",
                  marginBottom: "6px",
                }}
              >
                Getting Here
              </div>
              <p style={{ fontSize: "13px", color: "#9a7070", lineHeight: 1.75 }}>
                Easily accessible from Golf Green Metro Station. Just 5 minutes
                from Bijoygarh Road main crossing. Look for our pink signboard!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
