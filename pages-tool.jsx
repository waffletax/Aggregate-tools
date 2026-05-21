/* Tool detail page — deep review */

function ToolDetailPage({ slug }) {
  const tool = window.TOOLS.find(t => t.id === slug);
  if (!tool) return <NotFound slug={slug} />;

  const cat = window.CATEGORIES.find(c => c.id === tool.category);
  const related = window.TOOLS
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <main>
      {/* HEADER */}
      <section style={{
        background: "var(--bg-alt)",
        borderBottom: "2px solid var(--border)",
        padding: "32px 0 56px",
      }}>
        <div className="container">
          <div style={{ marginBottom: 24, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#/directory" className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}>
              Directory
            </a>
            <span style={{ color: "var(--muted)" }}>/</span>
            <a href={`#/directory?cat=${tool.category}`} className="mono" style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}>
              {cat?.name}
            </a>
            <span style={{ color: "var(--muted)" }}>/</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--fg)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{tool.name}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56, alignItems: "start" }} className="tool-head">
            <div>
              <div style={{ display: "flex", gap: 22, alignItems: "flex-start", marginBottom: 24 }}>
                <span className="monogram monogram-lg">{tool.monogram}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                    {tool.editorPick && <span className="badge badge-accent">Editor's Pick</span>}
                    {tool.hot && <span className="badge badge-hot">Hot</span>}
                    {tool.new && <span className="badge badge-dark">New</span>}
                    <span className="badge">{cat?.name}</span>
                  </div>
                  <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: 0, letterSpacing: "-0.02em", lineHeight: 0.95 }}>{tool.name}</h1>
                  <p style={{ fontSize: 20, color: "var(--fg-muted)", margin: "12px 0 0", maxWidth: 580 }}>{tool.tagline}</p>
                </div>
              </div>

              <div style={{
                background: "var(--paper)",
                border: "2px solid var(--border)",
                padding: "20px 24px",
                marginTop: 24,
                position: "relative",
                boxShadow: "var(--shadow-hard)",
              }}>
                <span className="tape" style={{ position: "absolute", top: -14, left: 16 }}>OUR VERDICT</span>
                <p style={{ margin: 0, marginTop: 6, fontSize: 18, lineHeight: 1.4, fontWeight: 500 }}>"{tool.verdict}"</p>
              </div>
            </div>

            <aside>
              <div style={{
                background: "var(--paper)",
                border: "2px solid var(--border)",
                padding: 24,
                boxShadow: "var(--shadow-hard)",
              }}>
                <div style={{ marginBottom: 18 }}>
                  <Stars value={tool.rating} count={tool.reviews} />
                </div>

                <SpecRow label="Pricing" value={tool.price} />
                <SpecRow label="Free trial" value={tool.free_trial} />
                <SpecRow label="Best for" value={tool.bestFor} />
                <SpecRow label="HQ" value={tool.hq} />
                <SpecRow label="Founded" value={tool.founded} last />

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
                  <a href="#" className="btn btn-primary" style={{ textDecoration: "none", justifyContent: "center" }}>
                    Visit {tool.name} ↗
                  </a>
                  <a href={`#/compare?ids=${tool.id}`} className="btn" style={{ textDecoration: "none", justifyContent: "center" }}>
                    Add to compare
                  </a>
                </div>

                <p style={{ marginTop: 16, fontSize: 11, color: "var(--muted)", lineHeight: 1.4, fontFamily: "var(--font-mono)" }}>
                  Visiting via this link helps fund the directory at no cost to you.
                </p>
              </div>
            </aside>
          </div>
          <style>{`
            @media (max-width: 900px) { .tool-head { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: "72px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 56 }} className="tool-body">
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>The pitch</p>
              <h2 className="display h3" style={{ margin: "0 0 18px" }}>What it actually does.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--fg-muted)" }}>{tool.description}</p>

              <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="pros-cons">
                <div style={{ background: "var(--paper)", border: "2px solid var(--border)", padding: 24 }}>
                  <p className="eyebrow" style={{ color: "var(--ok)", marginBottom: 14 }}>What we like</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {tool.pros.map((p, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--ok)", flexShrink: 0, marginTop: 2 }}><Icon.Check /></span>
                        <span style={{ fontSize: 15 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: "var(--paper)", border: "2px solid var(--border)", padding: 24 }}>
                  <p className="eyebrow" style={{ color: "var(--hot)", marginBottom: 14 }}>What we don't</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {tool.cons.map((p, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--hot)", flexShrink: 0, marginTop: 2 }}><Icon.X /></span>
                        <span style={{ fontSize: 15 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: 56 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Features we tested</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {tool.features.map(f => <span key={f} className="chip">{f}</span>)}
                </div>
              </div>

              <div style={{ marginTop: 36 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Integrates with</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {tool.integrations.map(f => <span key={f} className="chip" style={{ background: "transparent" }}>{f}</span>)}
                </div>
              </div>
            </div>

            {/* Sidebar — best for */}
            <aside>
              <div style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: 28,
                position: "sticky",
                top: 140,
              }}>
                <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 10 }}>Who it's for</p>
                <p style={{ fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", lineHeight: 1.15, marginBottom: 24 }}>
                  {tool.bestFor}
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20 }}>
                  <p className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Pricing tiers</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {(tool.pricing || []).map(p => (
                      <span key={p} style={{
                        padding: "5px 10px",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        border: "1px solid rgba(255,255,255,0.3)",
                        color: "var(--bg)",
                      }}>{window.PRICING_TIERS.find(x => x.id === p)?.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .tool-body { grid-template-columns: 1fr !important; }
              .pros-cons { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section style={{ padding: "72px 0", background: "var(--bg-alt)", borderBottom: "2px solid var(--border)" }}>
          <div className="container">
            <div style={{ marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
              <h3 className="display h3" style={{ margin: 0 }}>More in <span style={{ color: "var(--accent)" }}>{cat?.name}</span></h3>
              <a href={`#/directory?cat=${tool.category}`} className="tlink">See all →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: 24 }} className="related-grid">
              {related.map(t => <ToolCard key={t.id} tool={t} />)}
            </div>
            <style>{`@media (max-width: 900px) { .related-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function SpecRow({ label, value, last }) {
  if (value === undefined || value === null) return null;
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      padding: "10px 0",
      borderBottom: last ? "none" : "1px dashed var(--border-soft)",
    }}>
      <span className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, textAlign: "right" }}>{value}</span>
    </div>
  );
}

function NotFound({ slug }) {
  return (
    <main>
      <PageHeader eyebrow="404" title="Couldn't find that tool." subtitle={`No tool with id "${slug}" exists. Try the directory.`} />
      <div className="container" style={{ padding: "48px 32px 96px" }}>
        <a href="#/directory" className="btn btn-primary">Back to directory <Icon.Arrow /></a>
      </div>
      <Footer />
    </main>
  );
}

Object.assign(window, { ToolDetailPage });
