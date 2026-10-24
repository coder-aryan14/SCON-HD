import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./SqueezeCarousel.css";

const shares = [-0.06, 0.61, 0.3, 0.15];
const stretchedShares = [0, 0.71, 0.4, 0.25];
const squeezedShares = [-0.12, 0.59, 0.28, 0.13];

function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default function SqueezeCarousel({
  slides,
  defaultIndex = 0,
  onIndexChange,
  height = "clamp(180px, 32cqi, 340px)",
  slatWidth = 8,
  slatGap = 8,
  gap = 16,
  radius = 6,
  duration = 1000,
  hoverGrow = true,
  autoplay = false,
  interval = 6000,
  controls = true,
  accent = "#203d60",
  accentForeground = "#ffffff",
  label = "Featured",
  className = "",
}) {
  const count = slides.length;
  const wrap = (index) => ((index % count) + count) % count;
  const slats = clamp(count - 4, 1, 3);
  const visible = 4 + slats;
  const reduced = useReducedMotion();
  const transitionDuration = reduced ? 0 : duration;
  const ids = useId();
  const nextKey = useRef(0);
  const timers = useRef([]);
  const columnRef = useRef(0);
  const forward = useRef(true);
  const [column, setColumn] = useState(0);
  const [slid, setSlid] = useState(0);
  const [still, setStill] = useState(false);
  const [hover, setHover] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [cards, setCards] = useState(() =>
    Array.from({ length: visible }, (_, index) => ({
      key: nextKey.current++,
      slide: wrap(defaultIndex + index),
    })),
  );
  const open = cards[-column]?.slide ?? defaultIndex;

  const settle = useCallback(() => {
    setCards((strip) =>
      forward.current ? strip.slice(-visible) : strip.slice(0, visible),
    );
    columnRef.current = 0;
    setColumn(0);
    setSlid(0);
    setStill(true);
  }, [visible]);

  useEffect(
    () => () => timers.current.forEach((timer) => window.clearTimeout(timer)),
    [],
  );

  useLayoutEffect(() => {
    if (!still) return undefined;
    const frame = window.requestAnimationFrame(() => setStill(false));
    return () => window.cancelAnimationFrame(frame);
  }, [still]);

  const step = useCallback(
    (by) => {
      if (count < 2 || by === 0) return;

      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
      forward.current = by > 0;

      if (by > 0) {
        setCards((strip) => [
          ...strip,
          ...Array.from({ length: by }, (_, index) => ({
            key: nextKey.current++,
            slide: wrap(strip[strip.length - 1].slide + 1 + index),
          })),
        ]);
        columnRef.current -= by;
        setColumn(columnRef.current);
        setSlid((current) => current - by);
      } else {
        setCards((strip) => [
          ...Array.from({ length: -by }, (_, index) => ({
            key: nextKey.current++,
            slide: wrap(strip[0].slide - (-by - index)),
          })),
          ...strip,
        ]);
        setSlid((current) => current + by);
        setStill(true);
        timers.current.push(window.setTimeout(() => setSlid(0), 0));
      }

      timers.current.push(
        window.setTimeout(settle, transitionDuration + 20),
      );
    },
    [count, settle, transitionDuration],
  );

  const goTo = useCallback(
    (index) => {
      const forwardSteps = wrap(index - open);
      if (forwardSteps === 0) return;
      step(
        forwardSteps <= count / 2
          ? forwardSteps
          : forwardSteps - count,
      );
    },
    [count, open, step],
  );

  useEffect(() => {
    onIndexChange?.(open);
  }, [onIndexChange, open]);

  useEffect(() => {
    if (!autoplay || paused || reduced || count < 2) return undefined;
    const timer = window.setTimeout(() => step(1), interval);
    return () => window.clearTimeout(timer);
  }, [autoplay, count, interval, open, paused, reduced, step]);

  if (!count) return null;

  const activeShares =
    hoverGrow && hover >= 0 && hover <= 3 && !reduced ? null : shares;
  const slat = typeof slatWidth === "number" ? `${slatWidth}px` : slatWidth;
  const widthOf = (col) => {
    if (col < 0 || col > 3) return slat;
    const share = activeShares
      ? shares[col]
      : hover === col
        ? stretchedShares[col]
        : squeezedShares[col];
    return col === 0
      ? `calc(var(--sq-hero) + var(--sq-room) * ${share})`
      : `calc(var(--sq-room) * ${share})`;
  };
  const move = `translateX(calc(${slid} * (${slat} + var(--sq-gap))))`;
  const carouselStyle = {
    "--sq-h": typeof height === "number" ? `${height}px` : height,
    "--sq-gap": typeof gap === "number" ? `${gap}px` : gap,
    "--sq-slat-gap": typeof slatGap === "number" ? `${slatGap}px` : slatGap,
    "--sq-radius": typeof radius === "number" ? `${radius}px` : radius,
    "--sq-ms": `${transitionDuration}ms`,
    "--sq-fill": accent,
    "--sq-on-fill": accentForeground,
    "--sq-slats": slats,
    "--sq-slat-width": slat,
  };

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  }

  return (
    <div
      className={`squeeze-carousel ${className}`.trim()}
      style={carouselStyle}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHover(-1);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {controls && count > 1 && (
        <div className="sq-controls">
          <ArrowButton
            direction="previous"
            onClick={() => step(-1)}
          />
          <ArrowButton direction="next" onClick={() => step(1)} />
        </div>
      )}

      <div className="sq-viewport">
        <div
          className="sq-strip"
          role="tablist"
          aria-label={label}
          aria-orientation="horizontal"
          onKeyDown={handleKeyDown}
          style={{
            transform: move,
            transition: still
              ? "none"
              : "transform var(--sq-ms) cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {cards.map((card, place) => {
            const col = place + column;
            const slide = slides[card.slide];
            const front = col === 0;
            const width = widthOf(col);

            return (
              <button
                key={card.key}
                type="button"
                role="tab"
                id={`${ids}-tab-${card.key}`}
                aria-selected={front}
                aria-controls={`${ids}-panel`}
                aria-label={slide.title}
                tabIndex={front ? 0 : -1}
                className="sq-card"
                onMouseMove={() => hoverGrow && setHover(col)}
                onClick={() => col > 0 && step(col)}
                style={{
                  width,
                  marginLeft:
                    place === 0
                      ? 0
                      : col < 4
                        ? "var(--sq-gap)"
                        : "var(--sq-slat-gap)",
                  borderRadius: `min(var(--sq-radius), calc(${width} / 2))`,
                  transitionDuration: still ? "0s" : "var(--sq-ms)",
                }}
              >
                <Picture slide={slide} />
                {slide.overlay && (
                  <span
                    aria-hidden="true"
                    className={`sq-overlay${front ? " is-open" : ""}`}
                  >
                    {slide.overlay}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${ids}-panel`}
        role="tabpanel"
        aria-live="polite"
        className="sq-details"
      >
        {slides.map((slide, index) => {
          const shown = index === open;
          return (
            <div
              key={slide.id ?? index}
              aria-hidden={!shown}
              className={`sq-detail${shown ? " is-active" : ""}`}
              style={{
                opacity: shown ? 1 : 0,
                visibility: shown ? "visible" : "hidden",
                pointerEvents: shown ? "auto" : "none",
              }}
            >
              <p>
                <span>{slide.title}</span>
                {slide.description && <> {slide.description}</>}
              </p>
              {slide.action && <Action slide={slide} shown={shown} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Picture({ slide }) {
  if (slide.image) {
    return (
      <img
        className="sq-picture"
        src={slide.image}
        alt={slide.imageAlt ?? ""}
        draggable="false"
      />
    );
  }

  return (
    <span
      className="sq-picture sq-picture-background"
      aria-hidden="true"
      style={{ background: slide.background }}
    />
  );
}

function ArrowButton({ direction, onClick }) {
  const previous = direction === "previous";

  return (
    <button
      className="sq-arrow"
      type="button"
      aria-label={`${previous ? "Previous" : "Next"} project`}
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path
          d={
            previous
              ? "M9.6 2.6 5.1 7.1h9.1v1.8H5.1l4.5 4.5-1.2 1.2-6-6L1.8 8l.6-.6 6-6 1.2 1.2Z"
              : "M6.4 2.6l4.5 4.5H1.8v1.8h9.1l-4.5 4.5 1.2 1.2 6-6 .6-.6-.6-.6-6-6-1.2 1.2Z"
          }
        />
      </svg>
    </button>
  );
}

function Action({ slide, shown }) {
  const content = (
    <>
      {slide.action}
      <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
        <path
          d="M1.2 1 4.7 4.5 1.2 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  const className = "sq-action";
  if (slide.href) {
    return (
      <a
        className={className}
        href={slide.href}
        target={slide.target}
        rel={slide.target === "_blank" ? "noreferrer" : undefined}
        tabIndex={shown ? 0 : -1}
        onClick={slide.onAction}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={className}
      type="button"
      tabIndex={shown ? 0 : -1}
      onClick={slide.onAction}
    >
      {content}
    </button>
  );
}
