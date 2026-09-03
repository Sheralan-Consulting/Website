export default function BrandLogo() {
  return (
    <span className="ridge-logo" aria-hidden="true">
      <svg
        viewBox="0 0 640 160"
        role="presentation"
      >
        <text
          className="ridge-logo-word"
          x="18"
          y="105"
          textLength="600"
          lengthAdjust="spacingAndGlyphs"
        >
          SHERALAN
        </text>
        <path
          className="ridge-logo-profile"
          d="M278 45 344 29 404 5 469 32 526 16 580 39 624 47"
          fill="none"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          className="ridge-logo-accent"
          d="M404 5 469 32"
          fill="none"
          strokeWidth="7"
          strokeLinecap="square"
        />
        <text
          className="ridge-logo-subtitle"
          x="142"
          y="148"
          textLength="356"
          lengthAdjust="spacing"
        >
          CONSULTING
        </text>
      </svg>
    </span>
  );
}
