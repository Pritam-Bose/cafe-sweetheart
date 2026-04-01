/* Drawn 2D couple — man & woman at a cafe table */
function CoupleIllustration() {
  const strokeColor = "#4a3535";
  return (
    <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 380, zIndex: 1, position: "relative" }}
      aria-hidden="true">

      {/* ── Table ── */}
      <ellipse cx="130" cy="148" rx="38" ry="9" fill="none"
        stroke={strokeColor} strokeWidth="2.5" />
      <line x1="130" y1="148" x2="130" y2="175"
        stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>

      {/* ── Cups on table ── */}
      {/* left cup */}
      <rect x="103" y="136" width="13" height="11" rx="2"
        fill="#fff5e4" stroke={strokeColor} strokeWidth="1.8"/>
      <path d="M116 140 Q120 140 119 144 Q118 148 116 147"
        fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <line x1="103" y1="147" x2="116" y2="147"
        stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round"/>
      {/* right cup */}
      <rect x="144" y="136" width="13" height="11" rx="2"
        fill="#fff5e4" stroke={strokeColor} strokeWidth="1.8"/>
      <path d="M144 140 Q140 140 141 144 Q142 148 144 147"
        fill="none" stroke={strokeColor} strokeWidth="1.5"/>
      <line x1="144" y1="147" x2="157" y2="147"
        stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round"/>

      {/* ── WOMAN (left) ── */}
      <g transform="translate(0, 36)">
        {/* head */}
        <circle cx="88" cy="60" r="16" fill="#fff5e4"
          stroke={strokeColor} strokeWidth="2.2"/>
        {/* long hair */}
        <path d="M74 58 Q70 80 72 100" fill="none"
          stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M102 58 Q106 80 104 100" fill="none"
          stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M74 72 Q72 90 74 105 Q80 112 88 112 Q96 112 102 105 Q104 90 102 72"
          fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        {/* face — smile */}
        <circle cx="83" cy="58" r="2" fill={strokeColor}/>
        <circle cx="93" cy="58" r="2" fill={strokeColor}/>
        <path d="M83 66 Q88 71 93 66" fill="none"
          stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      {/* body */}
      <path d="M76 112 Q68 130 66 160 Q72 165 88 165 Q104 165 110 160 Q108 130 100 112"
        fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      {/* arm reaching to table */}
      <path d="M76 125 Q90 138 109 142"
        fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
      {/* legs */}
      <line x1="80" y1="165" x2="76" y2="190"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="96" y1="165" x2="100" y2="190"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      {/* feet */}
      <path d="M71 190 Q76 193 81 190"
        fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      <path d="M95 190 Q100 193 105 190"
        fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      {/* Chair */}
      <path d="M62 130 L62 190 M62 155 L74 155"
        fill="none" stroke={strokeColor} strokeWidth="1.8"
        strokeLinecap="round" opacity="0.6"/>


      {/* ── MAN (right) ── */}
      <g transform="translate(0, 30)">
        {/* head */}
        <circle cx="172" cy="60" r="16" fill="#fff5e4"
          stroke={strokeColor} strokeWidth="2.2"/>
        {/* short hair suggestion */}
        <path d="M158 56 Q160 44 172 43 Q184 44 186 56"
          fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
        {/* face */}
        <circle cx="167" cy="58" r="2" fill={strokeColor}/>
        <circle cx="177" cy="58" r="2" fill={strokeColor}/>
        <path d="M167 66 Q172 70 177 66" fill="none"
          stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round"/>
        {/* beard hint */}
        <path d="M160 68 Q164 76 172 77 Q180 76 184 68"
          fill="none" stroke={strokeColor} strokeWidth="1.5"
          strokeLinecap="round" opacity="0.7"/>
      </g>
      {/* body */}
      <path d="M158 112 Q150 130 148 160 Q156 165 172 165 Q188 165 196 160 Q194 130 186 112"
        fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      {/* shoulders / collar */}
      <path d="M158 112 Q165 104 172 106 Q179 104 186 112"
        fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      {/* arm reaching to table */}
      <path d="M186 125 Q172 138 151 142"
        fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round"/>
      {/* legs */}
      <line x1="164" y1="165" x2="160" y2="190"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="180" y1="165" x2="184" y2="190"
        stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round"/>
      {/* feet */}
      <path d="M155 190 Q160 193 165 190"
        fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      <path d="M179 190 Q184 193 189 190"
        fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      {/* Chair */}
      <path d="M198 130 L198 190 M186 155 L198 155"
        fill="none" stroke={strokeColor} strokeWidth="1.8"
        strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

{/* Aesthetic faintly drawn coffee cup for the background of the text */}
function CupIllustration() {
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" 
         style={{ 
           position: "absolute", width: "130%", 
           left: "-5%", top: "-15%", height: "140%", 
           opacity: 0.04, pointerEvents: "none", zIndex: 0 
         }}
         preserveAspectRatio="xMinYMid meet">
      {/* Cup body */}
      <path d="M40 70 Q40 220 120 220 Q200 220 200 70 Z" fill="none" stroke="#4a3535" strokeWidth="4" strokeLinecap="round"/>
      {/* Cup opening */}
      <ellipse cx="120" cy="70" rx="80" ry="20" fill="none" stroke="#4a3535" strokeWidth="4" />
      {/* Cup base line */}
      <path d="M85 220 L155 220" fill="none" stroke="#4a3535" strokeWidth="4" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M200 100 Q250 100 240 160 Q230 190 190 190" fill="none" stroke="#4a3535" strokeWidth="4" strokeLinecap="round" />
      {/* Steam */}
      <path d="M90 40 Q80 20 100 0 Q110 -10 100 -20" fill="none" stroke="#4a3535" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
      <path d="M140 45 Q130 25 150 5 Q160 -5 150 -15" fill="none" stroke="#4a3535" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
    </svg>
  );
}


export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", background: "#fff5e4",
      display: "flex", alignItems: "center",
      paddingTop: 64,
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "calc(100vh - 64px)",
          alignItems: "center",
          gap: 40,
        }}>

          {/* ── LEFT: Text & Background Cup ── */}
          <div style={{ paddingRight: 20, paddingTop: 40, paddingBottom: 40, position: "relative" }}>
            
            {/* The faint background cup behind the text */}
            <CupIllustration />

            <div style={{ position: "relative", zIndex: 1, paddingLeft: 12 }}>
              <p style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "3px",
                textTransform: "uppercase", color: "#c45e7a",
                marginBottom: 16, margin: "0 0 16px",
              }}>
                Golf Green, Kolkata
              </p>

              <h1 style={{
                fontSize: "clamp(52px, 6vw, 84px)",
                fontWeight: 700,
                lineHeight: 1.05, margin: "0 0 24px",
                letterSpacing: "-1.5px",
              }}>
                <span style={{ color: "#4a3535" }}>Cafe</span><br />
                <span style={{ color: "#c45e7a", fontStyle: "italic", fontWeight: 600 }}>Sweetheart</span>
              </h1>

              <div style={{
                width: 60, height: 3, background: "#f8c8dc", margin: "0 0 28px",
                borderRadius: 2
              }} />

              <p style={{
                fontSize: 18, fontWeight: 400, color: "#6b4f4f",
                lineHeight: 1.7, margin: "0 0 44px", maxWidth: 360,
              }}>
                A cozy corner for good food<br />&amp; better vibes.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="#location" className="btn-primary" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 36px",
                  background: "#c45e7a", color: "#fff",
                  fontSize: 14, fontWeight: 600, letterSpacing: "0.5px",
                  textDecoration: "none", borderRadius: 40, // Pill shaped like sketch
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 16px rgba(196, 94, 122, 0.25)",
                }}>
                  Visit us
                </a>
                <a href="#menu" className="btn-secondary" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 36px",
                  background: "transparent", color: "#4a3535",
                  fontSize: 14, fontWeight: 600, letterSpacing: "0.5px",
                  textDecoration: "none", borderRadius: 40, // Pill shaped like sketch
                  border: "2px solid #4a3535",
                  transition: "all 0.3s ease",
                }}>
                  view Menu
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Couple Illustration ── */}
          <div style={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 32,
          }}>
            {/* Soft, aesthetic organic blob shape behind the couple */}
            <div className="blob-shape" style={{
              position: "absolute",
              width: "clamp(300px, 40vw, 460px)",
              height: "clamp(300px, 40vw, 460px)",
              background: "linear-gradient(135deg, rgba(248,200,220,0.5) 0%, rgba(255,224,178,0.5) 100%)",
              borderRadius: "50%",
              zIndex: 0,
            }} />
            
            <CoupleIllustration />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes morphFloat {
          0% { border-radius: 50% 60% 40% 70% / 60% 50% 70% 40%; transform: translateY(0px) rotate(0deg); }
          50% { border-radius: 70% 40% 60% 50% / 50% 70% 40% 60%; transform: translateY(-15px) rotate(3deg); }
          100% { border-radius: 50% 60% 40% 70% / 60% 50% 70% 40%; transform: translateY(0px) rotate(0deg); }
        }
        .blob-shape {
          animation: morphFloat 8s ease-in-out infinite;
        }
        .btn-primary:hover {
          background: #a84b64 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(196, 94, 122, 0.35) !important;
        }
        .btn-secondary:hover {
          background: rgba(74, 53, 53, 0.05) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            padding-top: 40px;
            padding-bottom: 80px;
          }
          #hero > div > div > div:last-child {
            display: flex !important;
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
