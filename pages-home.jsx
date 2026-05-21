/* Home page — Aggregate.Tools */

const { useState: useStateH, useMemo: useMemoH } = React;

function HomePage({ tweaks }) {
  const featured = window.TOOLS.filter((t) => t.editorPick || t.hot).slice(0, 6);
  const fresh = window.TOOLS.filter((t) => t.new).slice(0, 3);
  const pick = window.TOOLS.find((t) => t.id === window.PICK_OF_WEEK.toolId);

  const catCounts = useMemoH(() => {
    const counts = {};
    window.CATEGORIES.forEach((c) => counts[c.id] = 0);
    window.TOOLS.forEach((t) => {counts[t.category] = (counts[t.category] || 0) + 1;});
    return counts;
  }, []);

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: "relative",
        padding: "80px 0 60px",
        borderBottom: "2px solid var(--border)",
        overflow: "hidden"
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }} className="hero-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{
                  display: "inline-block",
                  width: 32, height: 4,
                  background: "var(--accent)"
                }} />
                <p className="eyebrow" style={{ margin: 0 }}>{window.SITE_COPY.heroEyebrow}</p>
              </div>
              <h1 className="display" style={{ margin: 0, maxWidth: 880, fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 0.95 }}>
                {tweaks.heroHeadline.split('.').map((part, i, arr) =>
                <React.Fragment key={i}>
                    {part}{i < arr.length - 1 && (i === arr.length - 2 ? <span style={{ color: "var(--accent)" }}>.</span> : '.')}
                  </React.Fragment>
                )}
              </h1>
              <p style={{
                marginTop: 24,
                fontSize: 19,
                lineHeight: 1.5,
                color: "var(--fg-muted)",
                maxWidth: 620
              }}>{tweaks.heroSub}</p>
              <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                <a href="#/directory" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>
                  Browse the directory <Icon.Arrow />
                </a>
                <a href="#/about" className="btn btn-lg" style={{ textDecoration: "none" }}>
                  Why we built this
                </a>
              </div>
            </div>
            <div className="hero-stats">
              <HeroStats catCounts={catCounts} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 980px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* Strip: human touch + AI-skeptic note */}
      <section style={{
        background: "var(--fg)",
        color: "var(--bg)",
        borderBottom: "2px solid var(--border)",
        padding: "20px 0",
        overflow: "hidden"
      }}>
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) =>
            <React.Fragment key={i}>
                <MarqueeItem>FIELD-TESTED PICKS</MarqueeItem>
                <MarqueeItem accent>·</MarqueeItem>
                <MarqueeItem>NO PAID PLACEMENTS</MarqueeItem>
                <MarqueeItem accent>·</MarqueeItem>
                <MarqueeItem>BUILT FOR THE FIELD</MarqueeItem>
                <MarqueeItem accent>·</MarqueeItem>
                <MarqueeItem>UPDATED WEEKLY</MarqueeItem>
                <MarqueeItem accent>·</MarqueeItem>
              </React.Fragment>
            )}
          </div>
        </div>
        <style>{`
          .marquee { overflow: hidden; width: 100%; }
          .marquee-track {
            display: flex;
            gap: 40px;
            animation: marquee 48s linear infinite;
            white-space: nowrap;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* PICK OF THE WEEK */}
      {pick &&
      <section style={{
        padding: "72px 0",
        background: "var(--bg-alt)",
        borderBottom: "2px solid var(--border)"
      }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>PICK OF THE WEEK · {window.PICK_OF_WEEK.weekOf}</p>
                <h2 className="display h3" style={{ margin: 0 }}>What's worth a look this week.</h2>
              </div>
              <a href={`#/tool/${pick.id}`} className="tlink">Read the full review →</a>
            </div>
            <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
            background: "var(--paper)",
            border: "2px solid var(--border)",
            boxShadow: "var(--shadow-hard)",
            padding: 40,
            alignItems: "center"
          }} className="pick-grid">
              <div>
                <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 20 }}>
                  <span className="monogram monogram-lg">{pick.monogram}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, margin: 0, letterSpacing: "-0.01em" }}>{pick.name}</h3>
                    <p style={{ margin: "4px 0 0", color: "var(--fg-muted)" }}>{pick.tagline}</p>
                  </div>
                </div>
                <Stars value={pick.rating} count={pick.reviews} />
                <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 20 }}>{window.PICK_OF_WEEK.note}</p>
                <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                  <a href={`#/tool/${pick.id}`} className="btn btn-dark" style={{ textDecoration: "none" }}>
                    Read the review <Icon.Arrow />
                  </a>
                  <a href="#" className="btn" style={{ textDecoration: "none" }}>Visit {pick.name} ↗</a>
                </div>
              </div>
              <div>
                <div style={{
                border: "2px solid var(--border)",
                background: "var(--bg-alt)",
                padding: 24
              }}>
                  <p className="eyebrow" style={{ marginBottom: 14 }}>What it does well</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {pick.pros.map((p, i) =>
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--ok)", flexShrink: 0, marginTop: 2 }}><Icon.Check /></span>
                        <span style={{ fontSize: 14 }}>{p}</span>
                      </li>
                  )}
                  </ul>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px dashed var(--border-soft)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>BEST FOR</span>
                    <span style={{ fontSize: 13, fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>{pick.bestFor}</span>
                  </div>
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .pick-grid { grid-template-columns: 1fr !important; padding: 24px !important; }
              }
            `}</style>
          </div>
        </section>
      }

      {/* FEATURED TOOLS */}
      <section style={{ padding: "96px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 8 }}>The shortlist</p>
              <h2 className="display h2" style={{ margin: 0, maxWidth: 800 }}>Featured picks.</h2>
            </div>
            <a href="#/directory" className="btn">See all {window.TOOLS.length} <Icon.Arrow /></a>
          </div>
          <div className="tools-grid">
            {featured.map((t) => <ToolCard key={t.id} tool={t} />)}
          </div>
          <style>{`
            .tools-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
            @media (max-width: 900px) {
              .tools-grid { grid-template-columns: 1fr !important; }
            }
            @media (max-width: 1100px) and (min-width: 901px) {
              .tools-grid { grid-template-columns: repeat(2, 1fr); }
            }
          `}</style>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "96px 0", background: "var(--bg-alt)", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>By trade & function</p>
            <h2 className="display h2" style={{ margin: 0 }}>Browse the yard.</h2>
            <p style={{ marginTop: 14, color: "var(--fg-muted)", fontSize: 17, maxWidth: 620 }}>
              Five aisles. Each one walked end-to-end so you don't have to.
            </p>
          </div>
          <div className="cat-grid">
            {window.CATEGORIES.map((c) =>
            <CategoryTile key={c.id} cat={c} count={catCounts[c.id] || 0} />
            )}
          </div>
          <style>{`
            .cat-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 16px;
            }
            @media (max-width: 1100px) {
              .cat-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 600px) {
              .cat-grid { grid-template-columns: 1fr; }
            }
          `}</style>
        </div>
      </section>

      {/* HOW WE PICK + AI-SKEPTIC */}
      <section style={{ padding: "96px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="two-col">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>How we pick</p>
              <h2 className="display h3" style={{ margin: 0, marginBottom: 24 }}>Boots before bytes.</h2>
              <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.6 }}>
                Every tool listed here was vetted with the same checklist we use for a sub. Does it actually save time? Will my super use it? Can it survive a Monday with no Wi-Fi? If we wouldn't put it on our own job, it isn't here.
              </p>
              <ul style={{ marginTop: 28, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                ["01", "Demo + 30 days of real use, on a real project."],
                ["02", "Calls with two reference customers we found ourselves."],
                ["03", "A read of the security/IT footprint — no marketing translations."],
                ["04", "Written verdict. Plain English. We say what we'd skip."]].
                map(([n, t]) =>
                <li key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span className="mono" style={{ fontWeight: 700, color: "var(--accent)", fontSize: 14 }}>{n}</span>
                    <span style={{ fontSize: 16 }}>{t}</span>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <div style={{
                border: "2px solid var(--border)",
                background: "var(--paper)",
                padding: 32,
                boxShadow: "var(--shadow-hard)",
                position: "relative"
              }}>
                <span className="tape" style={{ position: "absolute", top: -14, right: 24 }}>FOR THE AI-SKEPTIC</span>
                <h3 className="display" style={{ fontSize: 26, margin: "8px 0 16px", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                  Not sold on AI?<br />That's a healthy place to start.
                </h3>
                <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.6, marginBottom: 16 }}>
                  Most "AI" software in construction is rebranded software with a chatbot stapled on. We tell you which is which. We're not here to convert you. We're here to point at the few tools that genuinely move a needle, and away from the ones that don't.
                </p>
                <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
                  If you're skeptical, start with our <a href="#/directory?cat=documentation" className="tlink">Documentation</a> picks. They're the lowest-risk way in.
                </p>
                <a href="#/about" className="btn btn-dark" style={{ textDecoration: "none" }}>Our story <Icon.Arrow /></a>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
          `}</style>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        padding: "96px 0",
        background: "var(--fg)",
        color: "var(--bg)",
        borderBottom: "2px solid var(--border)"
      }}>
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 12 }}>From the field</p>
          <h2 className="display h2" style={{ margin: 0, color: "var(--bg)", marginBottom: 56, maxWidth: 900 }}>
            People you'd actually grab coffee with.
          </h2>
          <div className="testimonial-grid">
            {window.TESTIMONIALS.map((t, i) =>
            <figure key={i} style={{
              margin: 0,
              padding: 32,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.03)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              position: "relative"
            }}>
                <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                color: "var(--accent)",
                lineHeight: 0.6,
                marginTop: 8
              }}>"</div>
                <blockquote style={{ margin: 0, fontSize: 19, lineHeight: 1.5, fontFamily: "var(--font-body)", color: "var(--bg)" }}>
                  {t.quote}
                </blockquote>
                <figcaption style={{ marginTop: "auto", display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{
                  width: 44, height: 44,
                  background: "var(--accent)",
                  color: "var(--accent-ink)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  borderRadius: "50%",
                  fontSize: 16
                }}>{t.name.charAt(0)}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{t.role} · {t.location}</div>
                  </div>
                </figcaption>
              </figure>
            )}
          </div>
          <style>{`
            .testimonial-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }
            @media (max-width: 900px) { .testimonial-grid { grid-template-columns: 1fr; } }
          `}</style>
        </div>
      </section>

      {/* CONSULTING TEASER */}
      {tweaks.showConsulting &&
      <section style={{
        padding: "96px 0",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        borderBottom: "2px solid var(--border)",
        position: "relative",
        overflow: "hidden"
      }}>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }} className="consult-grid">
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>For business owners</p>
                <h2 className="display h2" style={{ margin: 0 }}>
                  Don't know where to start?<br />
                  We'll come scope it with you.
                </h2>
                <p style={{ fontSize: 18, marginTop: 20, maxWidth: 540, lineHeight: 1.5 }}>
                  A two-week engagement: we sit with your team, map the workflow, and recommend the three tools that'll actually pay back. No retainer, no upsell.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }} className="consult-cta">
                <a href="#/consulting" className="btn btn-dark btn-lg" style={{ textDecoration: "none" }}>
                  Get a scope <Icon.Arrow />
                </a>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.7 }}>$4,500 · 2 weeks · Fixed scope</span>
              </div>
            </div>
          </div>
          <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage: "repeating-linear-gradient(135deg, transparent 0 24px, currentColor 24px 25px)",
          pointerEvents: "none"
        }} />
          <style>{`@media (max-width: 900px) { .consult-grid { grid-template-columns: 1fr !important; } .consult-cta { align-items: flex-start !important; } }`}</style>
        </section>
      }

      <Footer />
    </main>);

}

function MarqueeItem({ children, accent }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: 18,
      letterSpacing: "0.05em",
      color: accent ? "var(--accent)" : "var(--bg)",
      flexShrink: 0
    }}>{children}</span>);

}

function HeroStats({ catCounts }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <StatLine label="Tools listed" value={window.TOOLS.length.toString().padStart(2, "0")} />
      <StatLine label="Reviewed in-field" value={window.TOOLS.filter((t) => t.verdict).length.toString().padStart(2, "0")} />
      <StatLine label="Categories covered" value={window.CATEGORIES.length} />
      <StatLine label="Editor's picks" value={window.TOOLS.filter((t) => t.editorPick).length} />
      <StatLine label="Updated" value="WEEKLY" small last />
    </div>);

}

function StatLine({ label, value, small, last }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "16px 0",
      borderBottom: last ? "none" : "1px solid var(--border-soft)",
      borderTop: "1px solid var(--border-soft)",
      marginBottom: -1
    }}>
      <span className="mono" style={{ fontSize: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
      <span className="display" style={{ fontSize: small ? 18 : 36, lineHeight: 1, letterSpacing: "-0.02em" }}>{value}</span>
    </div>);

}

Object.assign(window, { HomePage });
