import React, { useEffect, useRef, useState } from "react";
import ArrowIcon from "../components/ArrowIcon.jsx";
import SiteHeader from "../components/SiteHeader.jsx";

const firstSequenceLength = 300;
const secondSequenceLength = 207;
const totalFrameCount = firstSequenceLength + secondSequenceLength;
const frameSequenceEnd = 0.66;

function getFrameSource(index) {
  const frameNumber = index + 1;
  const folder =
    frameNumber <= firstSequenceLength ? "first_frames" : "second_frames";
  const folderFrameNumber =
    frameNumber <= firstSequenceLength
      ? frameNumber
      : frameNumber - firstSequenceLength;
  const frameName = String(folderFrameNumber).padStart(3, "0");

  return `/video_image_frames/${folder}/ezgif-frame-${frameName}.jpg`;
}

function getClosestLoadedFrame(loadedFrames, requestedIndex) {
  if (loadedFrames.has(requestedIndex)) return requestedIndex;

  for (let distance = 1; distance < totalFrameCount; distance += 1) {
    const previousFrame = requestedIndex - distance;
    const nextFrame = requestedIndex + distance;

    if (previousFrame >= 0 && loadedFrames.has(previousFrame)) {
      return previousFrame;
    }
    if (nextFrame < totalFrameCount && loadedFrames.has(nextFrame)) {
      return nextFrame;
    }
  }

  return null;
}

export default function HeroSection() {
  const trackRef = useRef(null);
  const requestedFrameIndexRef = useRef(0);
  const loadedFramesRef = useRef(new Set());
  const [displayedFrameIndex, setDisplayedFrameIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const workerCount = 6;

    async function preloadFrames(workerIndex) {
      for (
        let index = workerIndex;
        index < totalFrameCount && isMounted;
        index += workerCount
      ) {
        const image = new Image();
        image.decoding = "async";
        const loaded = await new Promise((resolve) => {
          image.onload = () => resolve(true);
          image.onerror = () => resolve(false);
          image.src = getFrameSource(index);
        });

        if (!isMounted) return;
        if (!loaded) {
          console.error(`Failed to load hero frame: ${getFrameSource(index)}`);
          continue;
        }

        loadedFramesRef.current.add(index);
        const closestFrame = getClosestLoadedFrame(
          loadedFramesRef.current,
          requestedFrameIndexRef.current,
        );
        if (closestFrame !== null) setDisplayedFrameIndex(closestFrame);
      }
    }

    for (let workerIndex = 0; workerIndex < workerCount; workerIndex += 1) {
      preloadFrames(workerIndex);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let animationFrameId = 0;

    function updateFrame() {
      animationFrameId = 0;
      if (!trackRef.current) return;

      const track = trackRef.current;
      const scrollDistance = track.offsetHeight - window.innerHeight;
      const trackTop = window.scrollY + track.getBoundingClientRect().top;
      const progress =
        scrollDistance > 0
          ? Math.max(0, Math.min(1, (window.scrollY - trackTop) / scrollDistance))
          : 0;
      const frameProgress = Math.min(progress / frameSequenceEnd, 1);
      const nextFrameIndex = Math.round(frameProgress * (totalFrameCount - 1));

      requestedFrameIndexRef.current = nextFrameIndex;
      const closestFrame = getClosestLoadedFrame(
        loadedFramesRef.current,
        nextFrameIndex,
      );
      if (closestFrame !== null) setDisplayedFrameIndex(closestFrame);

      setScrollProgress((currentProgress) =>
        currentProgress === progress ? currentProgress : progress,
      );
    }

    function scheduleFrameUpdate() {
      if (!animationFrameId) {
        animationFrameId = window.requestAnimationFrame(updateFrame);
      }
    }

    scheduleFrameUpdate();
    window.addEventListener("scroll", scheduleFrameUpdate, { passive: true });
    window.addEventListener("resize", scheduleFrameUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", scheduleFrameUpdate);
      window.removeEventListener("resize", scheduleFrameUpdate);
    };
  }, []);

  const copyRevealProgress = Math.min(scrollProgress / 0.22, 1);
  const copyExitProgress = Math.min(
    Math.max((scrollProgress - 0.42) / 0.2, 0),
    1,
  );
  const copyLiftProgress = Math.min(
    Math.max((scrollProgress - 0.42) / 0.2, 0),
    1,
  );
  const cardProgress = Math.min(
    Math.max((scrollProgress - frameSequenceEnd) / (1 - frameSequenceEnd), 0),
    1,
  );
  const featureCards = [
    {
      title: "Location, chosen with care.",
      description:
        "A focus on established and sought-after neighbourhoods.",
    },
    {
      title: "Quality, built into every decision.",
      description: "Attention to planning, materials and execution.",
    },
    {
      title: "Commitment, beyond the promise.",
      description:
        "A personal, responsible approach to every development.",
    },
  ];

  return (
    <section className="hero-frame-track" ref={trackRef}>
      <div
        className="hero"
        id="home"
        style={{
          "--hero-copy-exit": copyExitProgress,
          "--hero-copy-translate-y": `${copyLiftProgress * -500}px`,
          "--hero-description-opacity":
            copyRevealProgress * (1 - copyExitProgress),
          "--hero-description-translate-y": `${(1 - copyRevealProgress) * 42}px`,
        }}
      >
        <img
          className="hero-frame-image"
          src={getFrameSource(displayedFrameIndex)}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <SiteHeader />
        <div className="hero-scroll-copy" aria-live="off">
          <h2 className="hero-scroll-title">Pune, at its most distinguished.</h2>
          <p className="hero-scroll-description">
            Exceptional residences in the city's most sought-after neighbourhoods.
          </p>
        </div>
        <div className="hero-feature-cards" aria-label="Our commitments">
          {featureCards.map((card, index) => {
            const reveal = Math.min(
              Math.max((cardProgress - index * 0.2) / 0.2, 0),
              1,
            );

            return (
              <article
                className="hero-feature-card"
                key={card.title}
                aria-hidden={reveal === 0}
                style={{ "--card-reveal": reveal }}
              >
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            );
          })}
          <a
            className="hero-feature-card hero-feature-card-link"
            href="#developments"
            aria-hidden={cardProgress < 0.8}
            tabIndex={cardProgress >= 0.8 ? 0 : -1}
            style={{
              pointerEvents: cardProgress >= 0.8 ? "auto" : "none",
              "--card-reveal": Math.min(
                Math.max((cardProgress - 0.6) / 0.2, 0),
                1,
              ),
            }}
          >
            <h2>Explore Our Residences</h2>
            <span className="hero-feature-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
        {/* <div className="hero-footer">
          <span>Independent thinking. Lasting places.</span>
          <a href="#about">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
