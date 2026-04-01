import { useState } from "react";
import menuData from "../data/menuData";

export default function Menu() {
  const [active, setActive] = useState(menuData[0].id);

  const activeCategory = menuData.find((c) => c.id === active) || menuData[0];

  return (
    <section id="menu" style={{
      padding: "100px 24px", background: "#fff5e4",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "3px",
            textTransform: "uppercase", color: "#c45e7a",
            marginBottom: 16, margin: "0 0 16px",
          }}>
            What We Serve
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 700,
            color: "#4a3535", margin: "0 0 16px",
            letterSpacing: "-1px",
          }}>
            Our <span style={{ color: "#c45e7a" }}>Menu</span>
          </h2>
        </div>

        {/* Menu Layout */}
        <div className="menu-container">
          
          {/* Left Sidebar - Categories */}
          <div className="menu-sidebar" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderLeft: active === cat.id ? "3px solid #c45e7a" : "3px solid transparent",
                  padding: "6px 20px",
                  textAlign: "left",
                  fontSize: 16,
                  fontWeight: active === cat.id ? 700 : 500,
                  color: active === cat.id ? "#c45e7a" : "#9a7070",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Right Content - Items */}
          <div className="menu-content">
            <h3 style={{
              fontSize: 32, fontWeight: 700, color: "#4a3535", margin: "0 0 12px",
              letterSpacing: "-0.5px"
            }}>
              {activeCategory.category}
            </h3>
            <div style={{ width: 48, height: 3, background: "#c45e7a", margin: "0 0 40px", borderRadius: 2 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {activeCategory.items.map((item) => (
                <div key={item.name} style={{ display: "flex", alignItems: "baseline" }}>
                  <span style={{ fontSize: 17, fontWeight: 500, color: "#4a3535" }}>
                    {item.name}
                  </span>
                  <span style={{
                    flexGrow: 1, 
                    borderBottom: "1.5px dotted #d4c4b7",
                    margin: "0 16px", 
                    alignSelf: "flex-end", 
                    transform: "translateY(-6px)",
                    opacity: 0.6
                  }} />
                  <span style={{ fontSize: 17, fontWeight: 600, color: "#c45e7a" }}>
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: 13, fontStyle: "italic", color: "#9a7070",
              marginTop: "56px", opacity: 0.8
            }}>
              All prices inclusive. Menu subject to change without prior notice.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .menu-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 768px) {
          .menu-container {
            grid-template-columns: 280px 1fr;
            gap: 60px;
          }
          .menu-content {
            padding-left: 20px;
          }
        }
      `}</style>
    </section>
  );
}
