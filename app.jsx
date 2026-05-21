/* App shell — router + tweaks integration */

const { useState: useStateA, useEffect: useEffectA } = React;

/* Default tweak values — wrapped in editmode markers so the host persists edits. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "orange",
  "background": "paper",
  "showConsulting": true,
  "heroHeadline": "AI tools that pull their weight.",
  "heroSub": "A working directory of AI software for Trade and Construction."
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#ff5a1f", "#ffd400", "#c8ff2a", "#e63946"];
const ACCENT_NAMES = { "#ff5a1f": "orange", "#ffd400": "yellow", "#c8ff2a": "lime", "#e63946": "red" };
const NAME_TO_HEX = { orange: "#ff5a1f", yellow: "#ffd400", lime: "#c8ff2a", red: "#e63946" };

function parseHash() {
  const h = window.location.hash || "#/";
  const [pathPart, queryPart] = h.replace(/^#/, "").split("?");
  const path = pathPart || "/";
  const params = {};
  if (queryPart) {
    queryPart.split("&").forEach(p => {
      const [k, v] = p.split("=");
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
  }
  return { path, params };
}

function App() {
  const [route, setRoute] = useStateA(parseHash());
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectA(() => {
    const onHash = () => { setRoute(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* apply tweaks to :root */
  useEffectA(() => {
    document.documentElement.setAttribute("data-accent", tweaks.accent);
    document.documentElement.setAttribute("data-theme",
      tweaks.background === "white" ? "white" : tweaks.background === "dark" ? "dark" : "paper");
  }, [tweaks.accent, tweaks.background]);

  const { path, params } = route;
  const seg = path.split("/").filter(Boolean);

  // Compose tweak-aware data for home
  const homeTweaks = {
    heroHeadline: tweaks.heroHeadline,
    heroSub: tweaks.heroSub,
    showConsulting: tweaks.showConsulting,
  };

  let pageEl;
  let routeId = "home";

  if (seg.length === 0) {
    pageEl = <HomePage tweaks={homeTweaks} />;
    routeId = "home";
  } else if (seg[0] === "directory") {
    pageEl = <DirectoryPage initialCat={params.cat} />;
    routeId = "directory";
  } else if (seg[0] === "tool" && seg[1]) {
    pageEl = <ToolDetailPage slug={seg[1]} />;
    routeId = "directory";
  } else if (seg[0] === "compare") {
    pageEl = <ComparePage initialIds={params.ids} />;
    routeId = "compare";
  } else if (seg[0] === "about") {
    pageEl = <AboutPage />;
    routeId = "about";
  } else if (seg[0] === "submit") {
    pageEl = <SubmitPage />;
    routeId = "submit";
  } else if (seg[0] === "consulting") {
    pageEl = <ConsultingPage />;
    routeId = "consulting";
  } else {
    pageEl = <HomePage tweaks={homeTweaks} />;
  }

  // Convert accent string ("orange") <-> hex for TweakColor
  const accentHex = NAME_TO_HEX[tweaks.accent] || "#ff5a1f";

  return (
    <>
      <Nav route={routeId} />
      {pageEl}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Look & feel" />
        <TweakColor
          label="Accent color"
          value={accentHex}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", ACCENT_NAMES[v] || "orange")}
        />
        <TweakRadio
          label="Background"
          value={tweaks.background}
          options={["paper", "white", "dark"]}
          onChange={(v) => setTweak("background", v)}
        />

        <TweakSection label="Hero copy" />
        <TweakText
          label="Headline"
          value={tweaks.heroHeadline}
          placeholder="One bold sentence"
          onChange={(v) => setTweak("heroHeadline", v)}
        />
        <TweakText
          label="Sub-headline"
          value={tweaks.heroSub}
          onChange={(v) => setTweak("heroSub", v)}
        />

        <TweakSection label="Home page" />
        <TweakToggle
          label="Show consulting CTA"
          value={tweaks.showConsulting}
          onChange={(v) => setTweak("showConsulting", v)}
        />
      </TweaksPanel>
    </>
  );
}

/* ---------- mount ---------- */
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
