"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { HeroCta, HeroSlide } from "@/data/homepage";
import styles from "./Hero.module.css";

const FALLBACK_OVERLAY_COLOR = "rgba(42, 42, 42, 0.82)";
const OVERLAY_ALPHA = 0.82;
const DARKEN_MULTIPLIER = 0.58;
const SAMPLE_SIZE = 48;

type RgbColor = {
  red: number;
  green: number;
  blue: number;
};

function clampColorChannel(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function darkenColor({ red, green, blue }: RgbColor) {
  return {
    red: clampColorChannel(red * DARKEN_MULTIPLIER),
    green: clampColorChannel(green * DARKEN_MULTIPLIER),
    blue: clampColorChannel(blue * DARKEN_MULTIPLIER),
  };
}

function toOverlayColor({ red, green, blue }: RgbColor) {
  return `rgba(${red}, ${green}, ${blue}, ${OVERLAY_ALPHA})`;
}

function extractOverlayColor(image: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context || image.naturalWidth === 0 || image.naturalHeight === 0) {
    return FALLBACK_OVERLAY_COLOR;
  }

  const cropStartY = Math.floor(image.naturalHeight * (2 / 3));
  const cropHeight = Math.max(1, image.naturalHeight - cropStartY);

  canvas.width = SAMPLE_SIZE;
  canvas.height = SAMPLE_SIZE;

  context.drawImage(
    image,
    0,
    cropStartY,
    image.naturalWidth,
    cropHeight,
    0,
    0,
    SAMPLE_SIZE,
    SAMPLE_SIZE,
  );

  const { data } = context.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
  let redTotal = 0;
  let greenTotal = 0;
  let blueTotal = 0;
  let visiblePixels = 0;

  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3];

    if (alpha < 64) {
      continue;
    }

    redTotal += data[index];
    greenTotal += data[index + 1];
    blueTotal += data[index + 2];
    visiblePixels += 1;
  }

  if (visiblePixels === 0) {
    return FALLBACK_OVERLAY_COLOR;
  }

  return toOverlayColor(
    darkenColor({
      red: redTotal / visiblePixels,
      green: greenTotal / visiblePixels,
      blue: blueTotal / visiblePixels,
    }),
  );
}

function loadOverlayColor(source: string) {
  return new Promise<string>((resolve) => {
    const image = new window.Image();

    image.crossOrigin = "anonymous";
    image.decoding = "async";

    const handleLoad = () => {
      try {
        resolve(extractOverlayColor(image));
      } catch {
        resolve(FALLBACK_OVERLAY_COLOR);
      }
    };

    image.onerror = () => resolve(FALLBACK_OVERLAY_COLOR);
    image.onload = handleLoad;
    image.src = source;

    if (image.complete && image.naturalWidth > 0) {
      handleLoad();
    }
  });
}

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctas: HeroCta[];
  slides: HeroSlide[];
};

export function Hero({ eyebrow, title, description, ctas, slides }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [useMobileSlides, setUseMobileSlides] = useState(false);
  const [overlayColors, setOverlayColors] = useState<string[]>(() =>
    slides.map(() => FALLBACK_OVERLAY_COLOR),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateSlideMode = () => setUseMobileSlides(mediaQuery.matches);

    updateSlideMode();
    mediaQuery.addEventListener("change", updateSlideMode);

    return () => mediaQuery.removeEventListener("change", updateSlideMode);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  useEffect(() => {
    let isCancelled = false;

    setOverlayColors(slides.map(() => FALLBACK_OVERLAY_COLOR));

    slides.forEach((slide, index) => {
      void loadOverlayColor(slide.image).then((overlayColor) => {
        if (isCancelled) {
          return;
        }

        setOverlayColors((currentColors) => {
          if (currentColors[index] === overlayColor) {
            return currentColors;
          }

          const nextColors = [...currentColors];
          nextColors[index] = overlayColor;
          return nextColors;
        });
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [slides]);

  const currentSlide = slides[activeSlide];
  const currentImage =
    (useMobileSlides ? currentSlide?.mobileImage : currentSlide?.image) ??
    currentSlide?.image ??
    "";
  const hasCopy = Boolean(eyebrow || title || description);
  const heroStyle = {
    ["--hero-cta-image" as string]: `url("${currentImage}")`,
  } as CSSProperties;

  return (
    <section className={styles.hero} style={heroStyle}>
      <div className={styles.media}>
        {slides.map((slide, index) => (
          <picture
            aria-hidden={index !== activeSlide}
            className={`${styles.slide} ${index === activeSlide ? styles.slideActive : ""}`}
            key={slide.image}
          >
            {slide.mobileImage ? (
              <source media="(max-width: 640px)" srcSet={slide.mobileImage} />
            ) : null}
            <img
              alt={index === activeSlide ? slide.alt : ""}
              className={styles.slideImage}
              src={slide.image}
            />
          </picture>
        ))}
      </div>
      <div aria-hidden="true" className={styles.overlay}>
        <div className={styles.overlayBase} />
        {slides.map((slide, index) => (
          <div
            className={`${styles.overlaySlide} ${
              index === activeSlide ? styles.overlaySlideActive : ""
            }`}
            key={`${slide.image}-overlay`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 48%, ${
                overlayColors[index] ?? FALLBACK_OVERLAY_COLOR
              } 100%)`,
            }}
          />
        ))}
      </div>
      <div className={`container ${styles.content}`}>
        {hasCopy ? (
          <>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </>
        ) : null}
        <div className={styles.actions}>
          {ctas.map((cta, index) => (
            <Link
              className={`button ${styles.heroButton} ${
                index === 1 ? styles.secondaryButton : ""
              }`}
              href={cta.href}
              key={`${cta.label}-${index}`}
            >
              <span className={styles.heroButtonText}>{cta.label}</span>
            </Link>
          ))}
        </div>
        {slides.length > 1 ? (
          <div
            aria-label="Homepage hero slideshow controls"
            className={styles.controls}
            role="tablist"
          >
            {slides.map((slide, index) => (
              <button
                aria-label={`Show hero slide ${index + 1}`}
                aria-selected={index === activeSlide}
                className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ""}`}
                key={slide.image}
                onClick={() => setActiveSlide(index)}
                role="tab"
                type="button"
              >
                <span className="visuallyHidden">{`Hero slide ${index + 1}`}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
