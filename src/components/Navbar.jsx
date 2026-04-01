import { useState } from "react";

const links = [
  { href: "#hero",     label: "Home"    },
  { href: "#about",    label: "About"   },
  { href: "#menu",     label: "Menu"    },
  { href: "#gallery",  label: "Gallery" },
  { href: "#location", label: "Find Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,245,228,0.95)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid #ecddd0",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>

        {/* Logo */}
        <a href="#hero" style={{
          fontSize: 17, fontWeight: 600,
          textDecoration: "none", letterSpacing: "0.3px",
        }}>
          <span style={{ color: "#4a3535" }}>Cafe</span> <span style={{ color: "#c45e7a" }}>Sweetheart</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none",
          margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} style={{
                fontSize: 13, fontWeight: 500, color: "#9a7070",
                textDecoration: "none", letterSpacing: "0.5px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#4a3535"}
              onMouseLeave={e => e.target.style.color = "#9a7070"}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none",
            cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
          className="ham-btn" aria-label="menu">
          <span style={{ display: "block", width: 22, height: 2,
            background: "#4a3535", borderRadius: 2,
            transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
            transition: "0.3s" }} />
          <span style={{ display: "block", width: 22, height: 2,
            background: "#4a3535", borderRadius: 2,
            opacity: open ? 0 : 1, transition: "0.3s" }} />
          <span style={{ display: "block", width: 22, height: 2,
            background: "#4a3535", borderRadius: 2,
            transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
            transition: "0.3s" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: "12px 24px 20px", background: "#fff5e4",
          borderTop: "1px solid #ecddd0", display: "flex",
          flexDirection: "column", gap: 14 }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: "#4a3535",
                textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .ham-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
