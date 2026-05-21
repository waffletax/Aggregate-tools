/* Compare page — side-by-side */

const { useState: useStateC, useMemo: useMemoC, useEffect: useEffectC } = React;

function ComparePage({ initialIds }) {
  const [selected, setSelected] = useStateC(() => {
    const start = (initialIds || "").split(",").filter(Boolean);
    return start.length ? start : [];
  });
  const [picker, setPicker] = useStateC(false);

  useEffectC(() => {
    if (initialIds) setSelected(initialIds.split(",").filter(Boolean));
  }, [initialIds]);

  const tools = selected.map(id => window.TOOLS.find(t => t.id === id)).filter(Boolean);

  const addTool = (id) => {
    if (selected.length >= 3 || selected.includes(id)) return;
    setSelected([...selected, id]);
    setPicker(false);
  };
  const removeTool = (id) => setSelected(selected.filter(s => s !== id));

  return (
    <main>
      <PageHeader
        eyebrow="Side-by-side"
        title="Compare up to three."
        subtitle="Drop in tools, see the spec sheet stacked. No marketing fluff in the cells."
      />

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container">
          {tools.length === 0 ? (
            <CompareEmpty onPick={() => setPicker(true)} />
          ) : (
            <CompareTable
              tools={tools}
              slotCount={3}
              onAdd={() => setPicker(true)}
              onRemove={removeTool}
            />
          )}

          {picker && (
            <PickerModal
              alreadySelected={selected}
              onSelect={addTool}
              onClose={() => setPicker(false)}
            />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CompareEmpty({ onPick }) {
  return (
    <div style={{
      padding: 64,
      textAlign: "center",
      border: "2px dashed var(--border-soft)",
      borderRadius: 4,
    }}>
      <p className="display" style={{ fontSize: 36, margin: 0, letterSpacing: "-0.02em" }}>NO TOOLS PICKED.</p>
      <p style={{ color: "var(--fg-muted)", marginTop: 12, marginBottom: 28 }}>
        Add up to three from the directory. We'll line up the specs for you.
      </p>
      <button onClick={onPick} className="btn btn-primary btn-lg">
        <Icon.Plus /> Add a tool
      </button>
    </div>
  );
}

function CompareTable({ tools, slotCount, onAdd, onRemove }) {
  const slots = Array.from({ length: slotCount }).map((_, i) => tools[i] || null);

  const rows = [
    { label: "Tagline", get: (t) => t.tagline },
    { label: "Verdict", get: (t) => <em>"{t.verdict}"</em> },
    { label: "Category", get: (t) => window.CATEGORIES.find(c => c.id === t.category)?.name },
    { label: "Rating", get: (t) => <Stars value={t.rating} count={t.reviews} /> },
    { label: "Price", get: (t) => <span className="mono" style={{ fontWeight: 600 }}>{t.price}</span> },
    { label: "Free trial", get: (t) => t.free_trial },
    { label: "Best for", get: (t) => t.bestFor },
    { label: "Pros", get: (t) => (
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {t.pros.map((p, i) => <li key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
          <span style={{ color: "var(--ok)", flexShrink: 0 }}>✓</span> <span style={{ fontSize: 14 }}>{p}</span>
        </li>)}
      </ul>
    )},
    { label: "Cons", get: (t) => (
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        {t.cons.map((p, i) => <li key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
          <span style={{ color: "var(--hot)", flexShrink: 0 }}>✕</span> <span style={{ fontSize: 14 }}>{p}</span>
        </li>)}
      </ul>
    )},
    { label: "Integrations", get: (t) => (
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {t.integrations.map(i => <span key={i} className="chip" style={{ fontSize: 10 }}>{i}</span>)}
      </div>
    )},
    { label: "HQ", get: (t) => t.hq },
    { label: "Founded", get: (t) => t.founded }
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: `180px repeat(${slotCount}, minmax(260px, 1fr))`,
        border: "2px solid var(--border)",
        background: "var(--paper)",
      }}>
        {/* header row */}
        <div style={{ background: "var(--fg)", padding: 20, borderRight: "1px solid var(--border)" }}>
          <p className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0, marginBottom: 6 }}>Specs</p>
          <p style={{ color: "var(--bg)", fontFamily: "var(--font-display)", fontSize: 24, margin: 0, lineHeight: 1, letterSpacing: "-0.01em" }}>vs.</p>
        </div>
        {slots.map((t, i) => (
          <div key={i} style={{
            padding: 20,
            background: "var(--fg)",
            color: "var(--bg)",
            borderRight: i < slotCount - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}>
            {t ? (
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span className="monogram" style={{ width: 40, height: 40, fontSize: 14, background: "var(--accent)", color: "var(--accent-ink)", border: "2px solid var(--border)" }}>{t.monogram}</span>
                  <div>
                    <a href={`#/tool/${t.id}`} style={{ color: "var(--bg)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "-0.01em", lineHeight: 1 }}>{t.name}</a>
                    <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{t.tagline.slice(0, 30)}…</p>
                  </div>
                </div>
                <button onClick={() => onRemove(t.id)} title="Remove" style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "var(--bg)",
                  width: 26, height: 26,
                  cursor: "pointer",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}><Icon.X size={12} /></button>
              </div>
            ) : (
              <button onClick={onAdd} style={{
                width: "100%",
                padding: "16px",
                background: "transparent",
                border: "2px dashed rgba(255,255,255,0.3)",
                color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                cursor: "pointer",
              }}>
                + Add tool
              </button>
            )}
          </div>
        ))}

        {/* spec rows */}
        {rows.map((row, ri) => (
          <React.Fragment key={ri}>
            <div style={{
              padding: "18px 20px",
              borderTop: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
              background: ri % 2 === 0 ? "var(--bg-alt)" : "transparent",
            }}>
              <p className="mono" style={{ fontSize: 11, color: "var(--fg-muted)", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0, fontWeight: 600 }}>{row.label}</p>
            </div>
            {slots.map((t, i) => (
              <div key={i} style={{
                padding: "18px 20px",
                borderTop: "1px solid var(--border)",
                borderRight: i < slotCount - 1 ? "1px solid var(--border-soft)" : "none",
                background: ri % 2 === 0 ? "var(--bg-alt)" : "transparent",
                fontSize: 14,
              }}>
                {t ? row.get(t) : <span style={{ color: "var(--muted)" }}>—</span>}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {tools.length < slotCount && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <button onClick={onAdd} className="btn btn-primary">
            <Icon.Plus /> Add another
          </button>
        </div>
      )}
    </div>
  );
}

function PickerModal({ alreadySelected, onSelect, onClose }) {
  const [q, setQ] = useStateC("");
  const candidates = window.TOOLS
    .filter(t => !alreadySelected.includes(t.id))
    .filter(t => !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.tagline.toLowerCase().includes(q.toLowerCase()));

  return (
    <div onClick={onClose} style={{
      position: "fixed",
      inset: 0,
      background: "rgba(14,17,22,0.65)",
      zIndex: 100,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: 80,
      padding: 24,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--paper)",
        border: "2px solid var(--border)",
        boxShadow: "var(--shadow-hard)",
        width: "100%",
        maxWidth: 640,
        maxHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{ padding: "20px 24px", borderBottom: "2px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p className="display" style={{ fontSize: 22, margin: 0, letterSpacing: "-0.01em" }}>PICK A TOOL</p>
          <button onClick={onClose} style={{ background: "transparent", border: "1px solid var(--border)", padding: 6, cursor: "pointer" }}><Icon.X /></button>
        </div>
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border-soft)" }}>
          <input
            autoFocus
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search…"
            className="input"
          />
        </div>
        <div style={{ overflowY: "auto", padding: "8px 0" }}>
          {candidates.map(t => (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                width: "100%",
                padding: "14px 24px",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--border-soft)",
                cursor: "pointer",
                textAlign: "left",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--bg-alt)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span className="monogram" style={{ width: 40, height: 40, fontSize: 14 }}>{t.monogram}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.01em" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>{t.tagline}</div>
              </div>
              <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{t.price}</span>
            </button>
          ))}
          {candidates.length === 0 && (
            <p style={{ padding: 32, textAlign: "center", color: "var(--muted)" }}>No tools match that search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ComparePage });
