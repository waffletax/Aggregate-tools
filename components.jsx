/* Shared components for Aggregate.Tools */

const { useState, useEffect, useMemo, useRef } = React;

/* ---------- icons (inline SVG) ---------- */

const Icon = {
  Star: ({ filled, half }) => (
    <svg viewBox="0 0 24 24" fill="none">
      <defs>
        {half && (
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        )}
      </defs>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={half ? "url(#half-grad)" : (filled ? "currentColor" : "transparent")}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Check: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12l5 5L20 7" />
    </svg>
  ),
  X: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Search: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  Plus: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Menu: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
};

/* ---------- Stars ---------- */

function Stars({ value, count }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.4 && value - full < 0.9;
  const total = 5;
  return (
    <span className="stars" style={{ color: "var(--accent)" }}>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < full;
        const half = i === full && hasHalf;
        return <Icon.Star key={i} filled={filled} half={half} />;
      })}
      <span style={{ marginLeft: 6, color: "var(--fg-muted)" }}>
        {value.toFixed(1)} {count ? <span style={{ color: "var(--muted)" }}>({count})</span> : null}
      </span>
    </span>
  );
}

/* ---------- Nav ---------- */

function Nav({ route, navigate }) {
  const links = [
    { id: "home", label: "Home", href: "#/" },
    { id: "directory", label: "Directory", href: "#/directory" },
    { id: "compare", label: "Compare", href: "#/compare" },
    { id: "consulting", label: "Consulting", href: "#/consulting" },
    { id: "about", label: "About", href: "#/about" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--paper)",
      borderBottom: "2px solid var(--border)",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        gap: 24,
      }}>
        <a href="#/" style={{ textDecoration: "none", color: "var(--fg)", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            width: 32, height: 32,
            background: "var(--fg)",
            color: "var(--bg)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontSize: 18,
            borderRadius: 3,
          }}>A</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 19, letterSpacing: "-0.01em" }}>
            AGGREGATE<span style={{ color: "var(--accent)" }}>.</span>TOOLS
          </span>
        </a>

        <nav className="nav-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.id} href={l.href} style={{
              textDecoration: "none",
              color: route === l.id ? "var(--fg)" : "var(--fg-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 600,
              borderBottom: route === l.id ? "2px solid var(--accent)" : "2px solid transparent",
              paddingBottom: 4,
            }}>{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="#/submit" className="btn btn-primary btn-sm" style={{ textDecoration: "none" }}>
            Submit Tool <Icon.Arrow size={14} />
          </a>
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(o => !o)}
            style={{
              display: "none",
              border: "2px solid var(--border)",
              background: "var(--paper)",
              padding: 8,
              borderRadius: 3,
            }}
          ><Icon.Menu /></button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile-panel" style={{
          borderTop: "1px solid var(--border-soft)",
          padding: "12px 32px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          {links.map(l => (
            <a key={l.id} href={l.href} onClick={() => setOpen(false)} style={{
              padding: "10px 0",
              borderBottom: "1px solid var(--border-soft)",
              textDecoration: "none",
              color: "var(--fg)",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: inline-flex !important; }
        }
        @media (min-width: 861px) {
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>
    </header>
  );
}

/* ---------- Footer ---------- */

function Footer({ showNewsletter = true }) {
  return (
    <footer style={{ background: "var(--fg)", color: "var(--bg)", marginTop: 0 }}>
      {showNewsletter && (
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="container" style={{ padding: "64px 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="footer-newsletter">
              <div>
                <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 12 }}>The Friday Filing</p>
                <h3 className="display h3" style={{ margin: 0, color: "var(--bg)" }}>
                  Tools we tested.<br/>
                  <span style={{ color: "var(--accent)" }}>Tools we'd skip.</span>
                </h3>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 16, fontSize: 15 }}>
                  {window.SITE_COPY.newsletterPitch}
                </p>
                <NewsletterForm dark />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container" style={{ padding: "48px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }} className="footer-cols">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, marginBottom: 12 }}>
              AGGREGATE<span style={{ color: "var(--accent)" }}>.</span>TOOLS
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, maxWidth: 380 }}>
              Independent. Field-tested. Reading every product page so you don't have to.
            </p>
          </div>
          <FooterCol title="Directory" links={[
            { label: "All tools", href: "#/directory" },
            { label: "Estimating", href: "#/directory?cat=estimating" },
            { label: "Field Ops", href: "#/directory?cat=field-ops" },
            { label: "Safety", href: "#/directory?cat=safety" },
          ]} />
          <FooterCol title="Site" links={[
            { label: "About", href: "#/about" },
            { label: "Consulting", href: "#/consulting" },
            { label: "Compare", href: "#/compare" },
            { label: "Submit tool", href: "#/submit" },
          ]} />
          <FooterCol title="Legal" links={[
            { label: "Affiliate disclosure", href: "#/about" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "mailto:hello@aggregate.tools" },
          ]} />
        </div>
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(255,255,255,0.45)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span>© 2026 Aggregate.Tools — All rights reserved</span>
          <span>Reviewed by humans · Funded by affiliates</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-newsletter { grid-template-columns: 1fr !important; gap: 24px !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="eyebrow" style={{ color: "rgba(255,255,255,0.45)", marginBottom: 14 }}>{title}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <li key={l.label}><a href={l.href} style={{
            color: "var(--bg)",
            textDecoration: "none",
            fontSize: 14,
            opacity: 0.85,
          }}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Newsletter ---------- */

function NewsletterForm({ dark }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div style={{
        padding: "16px 18px",
        border: `2px solid ${dark ? "var(--accent)" : "var(--border)"}`,
        background: dark ? "rgba(255,90,31,0.08)" : "var(--bg-alt)",
        borderRadius: 4,
        color: dark ? "var(--bg)" : "var(--fg)",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <Icon.Check />
        <span style={{ fontWeight: 600 }}>You're on. Watch for "The Friday Filing."</span>
      </div>
    );
  }
  return (
    <form onSubmit={e => { e.preventDefault(); if (email.includes("@")) setDone(true); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@yourcompany.com"
        style={{
          flex: "1 1 240px",
          padding: "14px 16px",
          border: `2px solid ${dark ? "var(--bg)" : "var(--border)"}`,
          background: dark ? "transparent" : "var(--paper)",
          color: dark ? "var(--bg)" : "var(--fg)",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          outline: "none",
          borderRadius: 4,
        }}
      />
      <button type="submit" className="btn btn-primary" style={{ boxShadow: "none" }}>
        Subscribe
      </button>
    </form>
  );
}

/* ---------- Tool Card ---------- */

function ToolCard({ tool, dense, compareToggle }) {
  const cat = window.CATEGORIES.find(c => c.id === tool.category);
  return (
    <a href={`#/tool/${tool.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div className="card card-hover" style={{
        padding: dense ? 18 : 24,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}>
        {tool.editorPick && (
          <div className="tape" style={{ position: "absolute", top: -12, left: 16 }}>EDITOR'S PICK</div>
        )}
        {tool.hot && !tool.editorPick && (
          <div style={{
            position: "absolute", top: -10, right: 16,
            background: "var(--hot)", color: "#fff",
            fontFamily: "var(--font-mono)", fontSize: 10,
            padding: "4px 8px", letterSpacing: "0.1em",
            border: "2px solid var(--border)",
          }}>HOT</div>
        )}
        {tool.new && !tool.editorPick && !tool.hot && (
          <div style={{
            position: "absolute", top: -10, right: 16,
            background: "var(--fg)", color: "var(--bg)",
            fontFamily: "var(--font-mono)", fontSize: 10,
            padding: "4px 8px", letterSpacing: "0.1em",
            border: "2px solid var(--border)",
          }}>NEW</div>
        )}

        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
          <span className="monogram" style={{ width: dense ? 48 : 56, height: dense ? 48 : 56, fontSize: dense ? 18 : 22 }}>
            {tool.monogram}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: dense ? 20 : 24,
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}>{tool.name}</h3>
            <p style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: "var(--fg-muted)",
              lineHeight: 1.4,
            }}>{tool.tagline}</p>
          </div>
        </div>

        <div style={{ marginBottom: 14 }}>
          <Stars value={tool.rating} count={tool.reviews} />
        </div>

        <div style={{ flex: 1 }} />

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
          paddingTop: 14,
          borderTop: "1px dashed var(--border-soft)",
        }}>
          <span className="badge">{cat?.name || tool.category}</span>
          <span className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{tool.price}</span>
        </div>
      </div>
    </a>
  );
}

/* ---------- Category tile ---------- */

function CategoryTile({ cat, count }) {
  return (
    <a href={`#/directory?cat=${cat.id}`} className="cat-tile">
      <span className="cat-tile-num">{String(count).padStart(2, "0")} TOOLS</span>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 40,
        marginBottom: 4,
        color: "var(--accent)",
        lineHeight: 1,
      }}>{cat.icon}</div>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: 22,
        margin: "8px 0 6px",
        letterSpacing: "-0.01em",
      }}>{cat.name}</h3>
      <p style={{ color: "var(--fg-muted)", fontSize: 14, margin: 0 }}>{cat.blurb}</p>
      <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
        Browse <Icon.Arrow size={12} />
      </div>
    </a>
  );
}

/* ---------- Page header (consistent across non-home pages) ---------- */

function PageHeader({ eyebrow, title, subtitle, accent }) {
  return (
    <section style={{
      background: accent ? "var(--fg)" : "var(--bg-alt)",
      color: accent ? "var(--bg)" : "var(--fg)",
      borderBottom: "2px solid var(--border)",
      padding: "72px 0 56px",
    }}>
      <div className="container">
        <p className="eyebrow" style={{ color: accent ? "var(--accent)" : undefined, marginBottom: 16 }}>{eyebrow}</p>
        <h1 className="display h2" style={{ margin: 0, maxWidth: 920 }}>{title}</h1>
        {subtitle && (
          <p style={{
            marginTop: 18,
            fontSize: 18,
            color: accent ? "rgba(255,255,255,0.7)" : "var(--fg-muted)",
            maxWidth: 720,
          }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}

/* expose globals */
Object.assign(window, {
  Icon, Stars, Nav, Footer, NewsletterForm, ToolCard, CategoryTile, PageHeader, FooterCol
});
