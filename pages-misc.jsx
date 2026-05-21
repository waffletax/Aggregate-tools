/* About / Submit / Consulting pages */

const { useState: useStateM } = React;

/* ===================== ABOUT ===================== */

function AboutPage() {
  const values = [
    { num: "01", title: "Transparency", body: "We tell you what we got paid for, by whom, and what we'd say without the check." },
    { num: "02", title: "Honesty",      body: "If a tool's a dud, we say it's a dud. The polite version. But still." },
    { num: "03", title: "Simplicity",   body: "No 4,000-word reviews. A verdict, what's good, what's not, what you'd pay." },
    { num: "04", title: "Real-world",   body: "If we haven't run it on a real project, it doesn't get a star. Period." },
    { num: "05", title: "Support",      body: "We answer emails. The same day, most days. Try us." },
    { num: "06", title: "Community",    body: "Built in public. We share our spreadsheet. You tell us what to test next." },
  ];

  return (
    <main>
      <PageHeader
        eyebrow="About · The story · Affiliate disclosure"
        title="Built for the trades, with the trades."
        subtitle="It started as a spreadsheet we kept for friends in the field. It grew into this directory."
        accent
      />

      {/* OUR STORY */}
      <section style={{ padding: "80px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }} className="story-grid">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Our story</p>
              <h2 className="display h2" style={{ margin: 0 }}>
                It started as a spreadsheet.
              </h2>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>EST. 2025</span>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>BASED IN THE FIELD</span>
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>INDEPENDENT</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--fg-muted)" }}>
                We started keeping a list because vendors kept calling. Every week a new "AI" something for construction. Half of them were a rebrand. Some were genuinely useful. None of the directories we could find seemed to know the difference.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--fg-muted)", marginTop: 16 }}>
                So we made a spreadsheet. Then a friend running a project asked for a copy. Then a buddy with a roofing crew did. Then it was a website.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--fg-muted)", marginTop: 16 }}>
                This is that website. The tools listed here are the ones we'd point a friend to over a beer. Nothing more, nothing less. We work alongside trade businesses every day — we don't pretend to swing a hammer for a living.
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 18, marginTop: 28, letterSpacing: "-0.01em" }}>
                {window.SITE_COPY.founderName}
              </p>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "96px 0", background: "var(--bg-alt)", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 8 }}>What we stand for</p>
            <h2 className="display h2" style={{ margin: 0 }}>Six things, posted on the wall.</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "2px solid var(--border)",
            background: "var(--paper)",
          }} className="val-grid">
            {values.map((v, i) => (
              <div key={v.num} style={{
                padding: 32,
                borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--border-soft)" : "none",
                borderBottom: i < 3 ? "1px solid var(--border-soft)" : "none",
              }}>
                <p className="mono" style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", margin: 0, marginBottom: 12 }}>{v.num}</p>
                <h3 className="display" style={{ fontSize: 26, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 900px) { .val-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}
      <section style={{ padding: "96px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: 48,
            position: "relative",
          }}>
            <div className="tape" style={{ position: "absolute", top: -16, left: 32 }}>FTC AFFILIATE DISCLOSURE</div>

            <h2 className="display h2" style={{ margin: "12px 0 24px", color: "var(--bg)" }}>
              How we make money,<br/>
              <span style={{ color: "var(--accent)" }}>in plain English.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }} className="disclose-grid">
              {[
                { n: "01", h: "We earn commissions.", b: "When you click a link to a tool and end up subscribing, the vendor pays us a referral fee. It's how the site keeps the lights on." },
                { n: "02", h: "You don't pay extra.", b: "The vendor's price is the same whether you find them through us or by Googling. The fee comes out of their marketing budget, not your pocket." },
                { n: "03", h: "Our incentives line up.", b: "We only get paid if you actually sign up and stick around. So we have a strong reason not to recommend something you'll cancel in 30 days." },
              ].map(item => (
                <div key={item.n}>
                  <p className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 12 }}>{item.n}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.01em" }}>{item.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", margin: 0 }}>{item.b}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 800, margin: 0 }}>
                Not every tool we list has an affiliate program. We list them anyway when they're worth listing. We tell you which ones have a paid relationship with us on the tool page. We also tell you when we'd recommend a free alternative instead.
              </p>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .disclose-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", textAlign: "center", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>That's the pitch</p>
          <h2 className="display h2" style={{ margin: 0, maxWidth: 800, marginInline: "auto" }}>
            Now go find something that saves you a Tuesday.
          </h2>
          <div style={{ display: "flex", gap: 12, marginTop: 32, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#/directory" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>
              Explore the directory <Icon.Arrow />
            </a>
            <a href="#/consulting" className="btn btn-lg" style={{ textDecoration: "none" }}>
              Hire us to scope it
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ===================== SUBMIT ===================== */

function SubmitPage() {
  const [done, setDone] = useStateM(false);
  const [form, setForm] = useStateM({
    name: "", url: "", contactName: "", email: "",
    description: "", category: "estimating", pricing: "Paid",
    freeTrial: false, freePlan: false,
    features: [],
    affiliate: "",
    notes: ""
  });

  const update = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [k]: v }));
  };

  const toggleFeature = (f) => {
    setForm(s => ({
      ...s,
      features: s.features.includes(f) ? s.features.filter(x => x !== f) : [...s.features, f]
    }));
  };

  const features = ["Auto-takeoff", "Field reporting", "Computer vision", "Voice/transcript", "Scheduling", "Estimating", "Document AI", "Job costing", "Punch lists", "Safety detection"];

  if (done) {
    return (
      <main>
        <PageHeader
          eyebrow="Submitted"
          title="We got it. Thanks."
          subtitle="A human will read this within a week. If it's a fit, we'll be in touch to schedule a demo."
        />
        <div className="container" style={{ padding: "72px 32px 96px", maxWidth: 720 }}>
          <div style={{
            background: "var(--paper)",
            border: "2px solid var(--border)",
            padding: 40,
            boxShadow: "var(--shadow-hard)",
            textAlign: "center",
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "var(--ok)", color: "white",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              marginBottom: 24,
              border: "2px solid var(--border)",
            }}><Icon.Check size={28} /></div>
            <h2 className="display h3" style={{ margin: 0 }}>Submission received.</h2>
            <p style={{ color: "var(--fg-muted)", marginTop: 12, marginBottom: 28, fontSize: 16 }}>
              We don't auto-list. Every tool gets a 30-day vetting. We'll reply either way.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#/directory" className="btn btn-primary">Browse the directory</a>
              <button onClick={() => { setDone(false); setForm(f => ({ ...f, name: "", url: "" })); }} className="btn">Submit another</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        eyebrow="For vendors"
        title="Submit your tool."
        subtitle="If you've built something for construction trades and it actually works, we want to see it. Honest reviews only — we'll tell you both."
      />

      <section style={{ padding: "64px 0 96px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56 }} className="submit-grid">
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo(0, 0); }} style={{
              background: "var(--paper)",
              border: "2px solid var(--border)",
              padding: 36,
              boxShadow: "var(--shadow-hard)",
            }}>
              <FieldGroup title="The basics" num="01">
                <Field label="Tool name" required>
                  <input className="input" required value={form.name} onChange={update("name")} placeholder="e.g. Boltline" />
                </Field>
                <Field label="Website URL" required>
                  <input className="input" type="url" required value={form.url} onChange={update("url")} placeholder="https://" />
                </Field>
                <Row>
                  <Field label="Your name" required>
                    <input className="input" required value={form.contactName} onChange={update("contactName")} />
                  </Field>
                  <Field label="Email" required>
                    <input className="input" type="email" required value={form.email} onChange={update("email")} />
                  </Field>
                </Row>
              </FieldGroup>

              <FieldGroup title="What it does" num="02">
                <Field label="Short description (140 chars or less)" required>
                  <textarea className="textarea" maxLength={140} required value={form.description} onChange={update("description")} placeholder="One sentence. What does it do? Who's it for?" />
                </Field>
                <Row>
                  <Field label="Category" required>
                    <select className="select" value={form.category} onChange={update("category")}>
                      {window.CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </Field>
                  <Field label="Pricing" required>
                    <select className="select" value={form.pricing} onChange={update("pricing")}>
                      <option>Free</option>
                      <option>Freemium</option>
                      <option>Paid</option>
                      <option>Enterprise</option>
                    </select>
                  </Field>
                </Row>
                <Row>
                  <Checkbox label="Free trial available" checked={form.freeTrial} onChange={update("freeTrial")} />
                  <Checkbox label="Free plan available" checked={form.freePlan} onChange={update("freePlan")} />
                </Row>
              </FieldGroup>

              <FieldGroup title="Key features" num="03">
                <p style={{ margin: "0 0 14px", color: "var(--fg-muted)", fontSize: 14 }}>Pick all that apply.</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {features.map(f => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => toggleFeature(f)}
                      className="chip-filter"
                      data-active={form.features.includes(f)}
                    >{f}</button>
                  ))}
                </div>
              </FieldGroup>

              <FieldGroup title="Affiliate program" num="04">
                <Field label="Do you offer an affiliate program? Tell us about it." subtitle="Not required. We list useful tools regardless.">
                  <textarea className="textarea" value={form.affiliate} onChange={update("affiliate")} placeholder="Commission rate, cookie window, payout terms…" />
                </Field>
              </FieldGroup>

              <FieldGroup title="Anything else" num="05">
                <Field label="What should we know that the marketing page won't say?">
                  <textarea className="textarea" value={form.notes} onChange={update("notes")} placeholder="Be honest. We were field guys before we ran a directory." />
                </Field>
              </FieldGroup>

              <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 24, borderTop: "1px dashed var(--border-soft)" }}>
                <p className="mono" style={{ fontSize: 12, color: "var(--muted)", margin: 0 }}>We don't sell or share your contact info.</p>
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit for review <Icon.Arrow />
                </button>
              </div>
            </form>

            <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Sidecard
                eyebrow="Why submit"
                title="Reach contractors who actually buy."
                body="Our readership is GCs, supers, PMs, and owner-operators. The people who hold the credit card on day one and decide whether to renew on day 365."
              />
              <Sidecard
                eyebrow="What happens next"
                title="30-day vetting, then a verdict."
                body="A demo, a reference call, and 30 days running on a real project. Then we publish a review — good, bad, or otherwise. We don't take payment for placement."
              />
              <Sidecard
                eyebrow="The fine print"
                title="We don't list vapor."
                body="If your tool is in stealth or a pre-launch, come back when it's GA. If it's a wrapper around a chatbot with no construction-specific work behind it, please don't bother."
                muted
              />
            </aside>
          </div>
          <style>{`@media (max-width: 900px) { .submit-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FieldGroup({ title, num, children }) {
  return (
    <div style={{ marginBottom: 36, paddingBottom: 28, borderBottom: "1px dashed var(--border-soft)" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 18 }}>
        <span className="mono" style={{ color: "var(--accent)", fontWeight: 700, fontSize: 14 }}>{num}</span>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.01em" }}>{title}</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{children}</div>
    </div>
  );
}

function Field({ label, subtitle, required, children }) {
  return (
    <div>
      <label className="label" style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
        {label} {required && <span style={{ color: "var(--accent)", fontWeight: 400 }}>*</span>}
      </label>
      {subtitle && <p style={{ margin: "0 0 8px", color: "var(--muted)", fontSize: 12 }}>{subtitle}</p>}
      {children}
    </div>
  );
}

function Row({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
    {children}
    <style>{`@media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }`}</style>
  </div>;
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      padding: "12px 14px",
      border: `2px solid ${checked ? "var(--accent)" : "var(--border)"}`,
      background: checked ? "rgba(255,90,31,0.06)" : "var(--paper)",
      borderRadius: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 600,
      transition: "background 80ms ease",
    }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ width: 16, height: 16, accentColor: "var(--accent)" }} />
      {label}
    </label>
  );
}

function Sidecard({ eyebrow, title, body, muted }) {
  return (
    <div style={{
      padding: 24,
      border: "2px solid var(--border)",
      background: muted ? "var(--bg-alt)" : "var(--paper)",
      boxShadow: muted ? "none" : "var(--shadow-hard)",
    }}>
      <p className="eyebrow" style={{ color: muted ? "var(--muted)" : "var(--accent)", marginBottom: 8 }}>{eyebrow}</p>
      <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "-0.01em", marginBottom: 10 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

/* ===================== CONSULTING ===================== */

function ConsultingPage() {
  return (
    <main>
      <section style={{
        background: "var(--fg)",
        color: "var(--bg)",
        borderBottom: "2px solid var(--border)",
        padding: "72px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="eyebrow" style={{ color: "var(--accent)", marginBottom: 16 }}>For business owners · B2B</p>
          <h1 className="display" style={{ margin: 0, color: "var(--bg)", maxWidth: 880, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
            We'll scope your AI <span style={{ color: "var(--accent)" }}>so you don't have to guess.</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", marginTop: 20, maxWidth: 620, lineHeight: 1.5 }}>
            Two weeks. We sit with your team, map the workflow, and write a one-page memo: three tools to try, two to skip.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>Start a scope <Icon.Arrow /></a>
            <a href="#process" className="btn btn-lg" style={{ textDecoration: "none", background: "transparent", color: "var(--bg)", borderColor: "rgba(255,255,255,0.4)" }}>See the process</a>
          </div>
        </div>
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: "repeating-linear-gradient(135deg, transparent 0 32px, var(--accent) 32px 33px)",
        }} />
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "96px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 8 }}>The work</p>
          <h2 className="display h2" style={{ margin: 0, marginBottom: 56 }}>Two weeks. Five visits. One page.</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
            border: "2px solid var(--border)",
          }} className="process-grid">
            {[
              { d: "DAY 01", t: "Kickoff", b: "60-minute call. You tell us the pain. We listen, no slides." },
              { d: "DAY 02-05", t: "Shadowing", b: "We sit with your estimator, your PM, your bookkeeper. Watch the actual work." },
              { d: "DAY 06-09", t: "Shortlist", b: "Six tools tested against your real data, in our sandbox. Most lose." },
              { d: "DAY 10-12", t: "Pilot prep", b: "We set up trials for the survivors with your IT and your team." },
              { d: "DAY 13-14", t: "Handoff", b: "A one-page memo. Three picks, two to skip, who to call if you get stuck." },
            ].map((step, i) => (
              <div key={i} style={{
                padding: 28,
                background: i % 2 === 0 ? "var(--paper)" : "var(--bg-alt)",
                borderRight: i < 4 ? "1px solid var(--border)" : "none",
              }}>
                <p className="mono" style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", margin: 0, marginBottom: 16 }}>{step.d}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: 0, marginBottom: 10, letterSpacing: "-0.01em" }}>{step.t}</h3>
                <p style={{ fontSize: 14, color: "var(--fg-muted)", margin: 0, lineHeight: 1.5 }}>{step.b}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .process-grid {
                grid-template-columns: 1fr !important;
              }
              .process-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); }
              .process-grid > div:last-child { border-bottom: none; }
            }
          `}</style>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "96px 0", background: "var(--bg-alt)", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="pricing-grid">
            <div>
              <p className="eyebrow" style={{ marginBottom: 8 }}>Pricing</p>
              <h2 className="display h2" style={{ margin: 0 }}>Fixed. No retainer.<br/>No upsell.</h2>
              <p style={{ marginTop: 20, fontSize: 17, color: "var(--fg-muted)", maxWidth: 540 }}>
                One flat fee. Two weeks of work. A memo you can hand to your CFO or pin to the wall in the shop. If we can't find three picks that pay back, you pay half.
              </p>
            </div>

            <div style={{
              background: "var(--paper)",
              border: "2px solid var(--border)",
              padding: 36,
              boxShadow: "var(--shadow-hard)",
            }}>
              <p className="eyebrow" style={{ color: "var(--accent)" }}>SCOPE ENGAGEMENT</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 12, marginBottom: 8 }}>
                <span className="display" style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em" }}>$4,500</span>
                <span className="mono" style={{ fontSize: 14, color: "var(--muted)" }}>USD · flat</span>
              </div>
              <p className="mono" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 24 }}>2 WEEKS · 1 COMPANY · NO RETAINER</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "60-min kickoff + 4 days of on-site shadowing",
                  "6 tools tested against your real data",
                  "Pilot setup with your IT for the survivors",
                  "1-page recommendation memo",
                  "30 days of email follow-up",
                  "Half refund if we can't recommend 3 picks"
                ].map((line, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--ok)", flexShrink: 0, marginTop: 2 }}><Icon.Check /></span>
                    <span style={{ fontSize: 14 }}>{line}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary full-w" style={{ marginTop: 28, justifyContent: "center", textDecoration: "none" }}>
                Book a scope <Icon.Arrow />
              </a>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: "96px 0", borderBottom: "2px solid var(--border)" }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 8 }}>Right fit</p>
          <h2 className="display h2" style={{ margin: 0, marginBottom: 48 }}>You're a good fit if…</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="fit-grid">
            <FitCol
              title="Yes, talk to us"
              items={[
                "You run a contracting or trade business doing $2M–$50M/yr",
                "You've heard \"AI is the future\" enough times to be tired of it",
                "Your ops team is stretched and you need a clear answer, not a Gartner report",
                "You'd rather pay a flat fee than fight with a consultancy",
              ]}
              icon={<Icon.Check />}
              color="var(--ok)"
            />
            <FitCol
              title="Probably not"
              items={[
                "You're already three tools deep and want a fourth opinion",
                "You don't have a workflow yet — you have an idea for one",
                "You need a 60-page deliverable to justify the spend",
                "You'd hate someone honest telling you the answer is \"keep doing what you're doing\"",
              ]}
              icon={<Icon.X />}
              color="var(--hot)"
            />
          </div>
          <style>{`@media (max-width: 900px) { .fit-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "96px 0",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        borderBottom: "2px solid var(--border)",
      }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" }} className="contact-grid">
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Step one</p>
              <h2 className="display h2" style={{ margin: 0 }}>Send us a note.</h2>
              <p style={{ fontSize: 18, marginTop: 20, lineHeight: 1.5, maxWidth: 480 }}>
                Tell us what kind of business you run, where you're stuck, and one workflow you'd love to make 30% faster. We'll reply within two business days.
              </p>
              <p style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600 }}>
                consulting@aggregate.tools
              </p>
            </div>
            <ContactForm />
          </div>
          <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <Footer showNewsletter={false} />
    </main>
  );
}

function FitCol({ title, items, icon, color }) {
  return (
    <div style={{
      background: "var(--paper)",
      border: "2px solid var(--border)",
      padding: 32,
    }}>
      <h3 className="display" style={{ fontSize: 28, margin: 0, marginBottom: 20, letterSpacing: "-0.01em", color }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color, flexShrink: 0, marginTop: 2 }}>{icon}</span>
            <span style={{ fontSize: 15, lineHeight: 1.5 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactForm() {
  const [done, setDone] = useStateM(false);
  const [form, setForm] = useStateM({ company: "", role: "", size: "$2M–$5M", workflow: "", email: "" });
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  if (done) {
    return (
      <div style={{
        background: "var(--fg)",
        color: "var(--bg)",
        padding: 40,
        textAlign: "center",
        border: "2px solid var(--border)",
        boxShadow: "var(--shadow-hard)",
      }}>
        <Icon.Check size={32} />
        <h3 className="display h3" style={{ margin: "16px 0 12px", color: "var(--bg)" }}>Got it. We'll be in touch.</h3>
        <p style={{ color: "rgba(255,255,255,0.7)" }}>Two business days, max. Usually faster.</p>
      </div>
    );
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{
      background: "var(--paper)",
      color: "var(--fg)",
      padding: 32,
      border: "2px solid var(--border)",
      boxShadow: "var(--shadow-hard)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <Row>
        <Field label="Company" required><input className="input" required value={form.company} onChange={upd("company")} /></Field>
        <Field label="Your role" required><input className="input" required value={form.role} onChange={upd("role")} placeholder="Owner, PM, COO…" /></Field>
      </Row>
      <Row>
        <Field label="Annual revenue" required>
          <select className="select" value={form.size} onChange={upd("size")}>
            <option>Under $2M</option>
            <option>$2M–$5M</option>
            <option>$5M–$15M</option>
            <option>$15M–$50M</option>
            <option>$50M+</option>
          </select>
        </Field>
        <Field label="Email" required><input className="input" type="email" required value={form.email} onChange={upd("email")} /></Field>
      </Row>
      <Field label="One workflow you'd love to make 30% faster">
        <textarea className="textarea" value={form.workflow} onChange={upd("workflow")} placeholder="Bidding, scheduling, billing, RFIs…" />
      </Field>
      <button type="submit" className="btn btn-dark btn-lg" style={{ marginTop: 6, justifyContent: "center" }}>
        Send the note <Icon.Arrow />
      </button>
    </form>
  );
}

Object.assign(window, { AboutPage, SubmitPage, ConsultingPage });
