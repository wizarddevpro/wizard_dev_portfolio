import React from "react";
import "./SplashVisual.css";

/** 6-digit hex -> rgba(); strips #RRGGBBAA to #RRGGBB when needed */
function withAlpha(hex, alpha) {
  if (!hex || typeof hex !== "string") {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  let h = hex.replace("#", "").trim();
  if (h.length === 8) {
    h = h.slice(0, 6);
  }
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  if (h.length !== 6 || Number.isNaN(parseInt(h, 16))) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function SplashVisual(props) {
  const { theme, id } = props;
  const { imageHighlight, jacketColor, highlight, body, text, dark, splashBg } =
    theme;
  const sparkles = [
    { left: "16%", top: "20%", delay: "0.2s", dur: "4.8s" },
    { left: "82%", top: "25%", delay: "0.9s", dur: "5.6s" },
    { left: "22%", top: "74%", delay: "1.4s", dur: "4.4s" },
    { left: "76%", top: "70%", delay: "0.5s", dur: "5.1s" },
    { left: "50%", top: "12%", delay: "1.1s", dur: "4.9s" },
    { left: "9%", top: "52%", delay: "1.8s", dur: "5.7s" },
    { left: "92%", top: "54%", delay: "0.3s", dur: "4.6s" },
  ];

  return (
    <div
      className="splash-visual"
      id={id}
      style={{
        "--sv-a": highlight,
        "--sv-b": imageHighlight,
        "--sv-c": body,
        "--sv-d": jacketColor || imageHighlight,
        "--sv-splash": splashBg,
        "--sv-text": text,
        "--sv-dark": dark,
        "--sv-card-edge": withAlpha(imageHighlight, 0.42),
        "--sv-card-edge-inner": withAlpha(imageHighlight, 0.12),
        "--sv-card-glow": withAlpha(imageHighlight, 0.35),
        "--sv-grid-a": withAlpha(imageHighlight, 0.16),
        "--sv-grid-b": withAlpha(highlight, 0.09),
        "--sv-glass-hi": withAlpha(body, 0.1),
        "--sv-glass-lo": withAlpha(dark, 0.55),
        "--sv-shine-mid": withAlpha(highlight, 0.35),
        "--sv-shine-tip": withAlpha(imageHighlight, 0.2),
        "--sv-vignette": withAlpha(dark, 0.55),
        "--sv-mark-stroke": withAlpha(imageHighlight, 0.9),
        "--sv-mark-glow-a": withAlpha(imageHighlight, 0.55),
        "--sv-mark-glow-b": withAlpha(highlight, 0.35),
        "--sv-bar-track": withAlpha(text, 0.18),
        "--sv-bar-glow": withAlpha(imageHighlight, 0.65),
        "--sv-noise": withAlpha(text, 0.05),
        "--sv-spark": withAlpha(highlight, 0.8),
        "--sv-meta": withAlpha(body, 0.95),
        "--sv-meta-muted": withAlpha(body, 0.62),
        "--sv-electric": withAlpha(imageHighlight, 0.95),
        "--sv-neon": withAlpha(highlight, 0.9),
        "--sv-ink": withAlpha(dark, 0.78),
      }}
    >
      <div className="splash-visual__mesh" aria-hidden="true">
        <span className="splash-visual__mesh-blob splash-visual__mesh-blob--1" />
        <span className="splash-visual__mesh-blob splash-visual__mesh-blob--2" />
        <span className="splash-visual__mesh-blob splash-visual__mesh-blob--3" />
        <span className="splash-visual__mesh-blob splash-visual__mesh-blob--4" />
      </div>
      <div className="splash-visual__mesh-accent" aria-hidden="true" />
      <div className="splash-visual__beams" aria-hidden="true">
        <span className="splash-visual__beam splash-visual__beam--1" />
        <span className="splash-visual__beam splash-visual__beam--2" />
        <span className="splash-visual__beam splash-visual__beam--3" />
      </div>
      <div className="splash-visual__grain" aria-hidden="true" />
      <div className="splash-visual__sparkles" aria-hidden="true">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className="splash-visual__spark"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.dur,
            }}
          />
        ))}
      </div>
      <div className="splash-visual__grid" aria-hidden="true" />
      <div className="splash-visual__vignette" aria-hidden="true" />

      <div className="splash-visual__card">
        <div className="splash-visual__card-shine" aria-hidden="true" />
        <div className="splash-visual__halo" aria-hidden="true" />

        <div className="splash-visual__orbit">
          <div className="splash-visual__ring splash-visual__ring--outer" />
          <div className="splash-visual__ring splash-visual__ring--mid" />
          <div className="splash-visual__ring splash-visual__ring--inner" />
          <span className="splash-visual__satellite splash-visual__satellite--1" />
          <span className="splash-visual__satellite splash-visual__satellite--2" />
          <span className="splash-visual__satellite splash-visual__satellite--3" />
        </div>

        <div className="splash-visual__mark" aria-hidden="true">
          <span className="splash-visual__mark-aura" />
          <span className="splash-visual__mark-frame" />
          <span className="splash-visual__mark-core" />
        </div>

        <div className="splash-visual__corners" aria-hidden="true">
          <span className="splash-visual__corner splash-visual__corner--tl" />
          <span className="splash-visual__corner splash-visual__corner--tr" />
          <span className="splash-visual__corner splash-visual__corner--bl" />
          <span className="splash-visual__corner splash-visual__corner--br" />
        </div>

        <div className="splash-visual__meta" aria-hidden="true">
          <span className="splash-visual__meta-main">PORTFOLIO</span>
          <span className="splash-visual__meta-sub">Initializing experience</span>
        </div>

        <div className="splash-visual__pulse-track" aria-hidden="true">
          <span className="splash-visual__pulse-dot splash-visual__pulse-dot--1" />
          <span className="splash-visual__pulse-dot splash-visual__pulse-dot--2" />
          <span className="splash-visual__pulse-dot splash-visual__pulse-dot--3" />
        </div>
      </div>

      <div className="splash-visual__bar" aria-hidden="true">
        <span className="splash-visual__bar-fill" />
      </div>
    </div>
  );
}

export default SplashVisual;
