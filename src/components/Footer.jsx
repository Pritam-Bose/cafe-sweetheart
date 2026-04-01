// ─────────────────────────────────────────────────────────────────────────────
// Toggle this boolean to show / hide the demo watermark.
//   true  → "Demo Version • Crafted for Cafe Sweetheart by Pritam Bose"
//   false → "© Cafe Sweetheart"
// ─────────────────────────────────────────────────────────────────────────────
const isDemo = true;

const quickLinks = [
  { href: "#hero",     label: "Home"    },
  { href: "#about",    label: "About"   },
  { href: "#menu",     label: "Menu"    },
  { href: "#gallery",  label: "Gallery" },
  { href: "#location", label: "Find Us" },
];

const menuLinks = [
  { icon: "☕", label: "Coffee"          },
  { icon: "🍵", label: "Tea"             },
  { icon: "🥤", label: "Shakes & Coolers"},
  { icon: "🍟", label: "Snacks"          },
  { icon: "🍜", label: "Fast Food"       },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Top Grid */}
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">Cafe Sweetheart ☕</div>
            <p className="footer-brand-desc">
              A cozy corner for good food &amp; better vibes.
              <br />
              Golf Green, Kolkata — your neighbourhood café with heart.
            </p>
            <div className="footer-socials">
              {["📘", "📷", "📱"].map((icon) => (
                <button key={icon} className="footer-social-btn" aria-label="Social">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <div className="footer-heading">Our Menu</div>
            <ul className="footer-links">
              {menuLinks.map(({ icon, label }) => (
                <li key={label}>
                  <a href="#menu">
                    {icon} {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            {!isDemo && "© 2024 Cafe Sweetheart · All rights reserved"}
          </span>

          {isDemo ? (
            <span className="footer-watermark">
              Demo Version &bull; Crafted for Cafe Sweetheart by Pritam Bose
            </span>
          ) : (
            <span className="footer-copy">© Cafe Sweetheart</span>
          )}
        </div>
      </div>
    </footer>
  );
}
