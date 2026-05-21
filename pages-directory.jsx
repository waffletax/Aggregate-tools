/* Directory page — Aggregate.Tools */

const { useState: useStateD, useMemo: useMemoD, useEffect: useEffectD } = React;

function DirectoryPage({ initialCat }) {
  const [query, setQuery] = useStateD("");
  const [cat, setCat] = useStateD(initialCat || "all");
  const [pricing, setPricing] = useStateD("all");
  const [sort, setSort] = useStateD("featured");

  // sync category from hash query
  useEffectD(() => {
    if (initialCat) setCat(initialCat);
  }, [initialCat]);

  const filtered = useMemoD(() => {
    let out = window.TOOLS.slice();
    if (cat !== "all") out = out.filter(t => t.category === cat);
    if (pricing !== "all") out = out.filter(t => (t.pricing || []).includes(pricing));
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        (t.description || "").toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "rating":  out.sort((a, b) => b.rating - a.rating); break;
      case "reviews": out.sort((a, b) => b.reviews - a.reviews); break;
      case "az":      out.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "newest":  out.sort((a, b) => (b.founded || 0) - (a.founded || 0)); break;
      default:        out.sort((a, b) => (b.editorPick ? 1 : 0) - (a.editorPick ? 1 : 0) || b.rating - a.rating);
    }
    return out;
  }, [query, cat, pricing, sort]);

  return (
    <main>
      <PageHeader
        eyebrow={`Directory · ${window.TOOLS.length} tools · ${window.CATEGORIES.length} categories`}
        title="The directory."
        subtitle="Every tool we've reviewed. Filter, search, sort, then read the verdicts."
      />

      {/* CONTROL BAR */}
      <div style={{
        position: "sticky",
        top: 73,
        zIndex: 20,
        background: "var(--paper)",
        borderBottom: "2px solid var(--border)",
        padding: "20px 0",
      }}>
        <div className="container">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flex: "1 1 300px",
              border: "2px solid var(--border)",
              padding: "10px 14px",
              background: "var(--bg)",
              borderRadius: 4,
            }}>
              <Icon.Search />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, what it does, or who it's for…"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  flex: 1,
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--fg)",
                }}
              />
              {query && (
                <button onClick={() => setQuery("")} style={{ border: "none", background: "transparent", color: "var(--muted)", cursor: "pointer", padding: 4 }}>
                  <Icon.X size={14} />
                </button>
              )}
            </div>

            <select value={pricing} onChange={e => setPricing(e.target.value)} style={selStyle}>
              <option value="all">All pricing</option>
              {window.PRICING_TIERS.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>

            <select value={sort} onChange={e => setSort(e.target.value)} style={selStyle}>
              <option value="featured">Sort: Featured</option>
              <option value="rating">Sort: Highest rated</option>
              <option value="reviews">Sort: Most reviewed</option>
              <option value="newest">Sort: Newest</option>
              <option value="az">Sort: A → Z</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
            <span
              className="chip-filter"
              data-active={cat === "all"}
              onClick={() => setCat("all")}
            >All ({window.TOOLS.length})</span>
            {window.CATEGORIES.map(c => {
              const count = window.TOOLS.filter(t => t.category === c.id).length;
              return (
                <span
                  key={c.id}
                  className="chip-filter"
                  data-active={cat === c.id}
                  onClick={() => setCat(c.id)}
                >{c.name} ({count})</span>
              );
            })}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <section style={{ padding: "48px 0 96px" }}>
        <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 8,
          }}>
            <p className="mono" style={{ fontSize: 12, color: "var(--fg-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Showing {filtered.length} of {window.TOOLS.length}
              {cat !== "all" && ` · ${window.CATEGORIES.find(c => c.id === cat)?.name}`}
              {pricing !== "all" && ` · ${window.PRICING_TIERS.find(p => p.id === pricing)?.label}`}
            </p>
            {(cat !== "all" || pricing !== "all" || query) && (
              <button onClick={() => { setCat("all"); setPricing("all"); setQuery(""); }} style={{
                border: "none",
                background: "transparent",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
              }}>Reset filters →</button>
            )}
          </div>

          {filtered.length === 0 ? (
            <EmptyState onReset={() => { setCat("all"); setPricing("all"); setQuery(""); }} />
          ) : (
            <div className="dir-grid">
              {filtered.map(t => <ToolCard key={t.id} tool={t} />)}
            </div>
          )}

          <style>{`
            .dir-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
            @media (max-width: 1100px) { .dir-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 700px)  { .dir-grid { grid-template-columns: 1fr; } }
          `}</style>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const selStyle = {
  padding: "11px 14px",
  border: "2px solid var(--border)",
  background: "var(--paper)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontWeight: 600,
  color: "var(--fg)",
  borderRadius: 4,
  cursor: "pointer",
};

function EmptyState({ onReset }) {
  return (
    <div style={{
      padding: 64,
      textAlign: "center",
      border: "2px dashed var(--border-soft)",
      borderRadius: 4,
    }}>
      <p className="display" style={{ fontSize: 32, margin: 0 }}>NOTHING MATCHED.</p>
      <p style={{ color: "var(--fg-muted)", marginTop: 12 }}>
        Try a wider net, or <button onClick={onReset} style={{ background: "none", border: "none", color: "var(--accent)", fontWeight: 700, cursor: "pointer", padding: 0, textDecoration: "underline" }}>reset the filters</button>.
      </p>
    </div>
  );
}

Object.assign(window, { DirectoryPage });
