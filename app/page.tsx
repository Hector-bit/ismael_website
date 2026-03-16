"use client";

import { useState } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface PricingTier {
  name: string;
  price: string;
  tag: string;
  features: string[];
  highlight?: boolean;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const exteriorTiers: PricingTier[] = [
  {
    name: "Basic Wash",
    price: "$49",
    tag: "EXTERIOR",
    features: [
      "Hand wash & rinse",
      "Wheel & tire clean",
      "Window exterior clean",
      "Door jamb wipe-down",
      "Air dry & hand towel finish",
    ],
  },
  {
    name: "Full Detail",
    price: "$129",
    tag: "EXTERIOR",
    highlight: true,
    features: [
      "Everything in Basic Wash",
      "Clay bar decontamination",
      "Single-stage paint polish",
      "Carnauba wax application",
      "Tire dressing & trim restore",
      "Chrome & glass polish",
    ],
  },
  {
    name: "Show Shine",
    price: "$249",
    tag: "EXTERIOR",
    features: [
      "Everything in Full Detail",
      "Two-stage paint correction",
      "Ceramic sealant coating",
      "Headlight restoration",
      "Engine bay clean",
      "Iron & tar decontamination",
    ],
  },
];

const interiorTiers: PricingTier[] = [
  {
    name: "Fresh Interior",
    price: "$79",
    tag: "INTERIOR",
    features: [
      "Full vacuum (seats, floor, trunk)",
      "Dashboard & console wipe-down",
      "Door panel clean",
      "Window interior clean",
      "Odor neutralizer spray",
    ],
  },
  {
    name: "Deep Clean",
    price: "$159",
    tag: "INTERIOR",
    highlight: true,
    features: [
      "Everything in Fresh Interior",
      "Shampoo carpets & floor mats",
      "Fabric seat shampoo",
      "Leather conditioning",
      "Air vent detail brush clean",
      "UV protectant on all plastics",
    ],
  },
  {
    name: "Showroom Ready",
    price: "$299",
    tag: "INTERIOR",
    features: [
      "Everything in Deep Clean",
      "Steam sanitize entire cabin",
      "Stain extraction treatment",
      "Headliner spot clean",
      "Ozone odor elimination",
      "Final inspection & photo",
    ],
  },
];

const galleryPlaceholders = [
  { label: "2022 Chevy Tahoe", before: false },
  { label: "2019 BMW M3", before: false },
  { label: "2021 Ford F-150", before: false },
  { label: "2020 Dodge Challenger", before: false },
  { label: "2023 Tesla Model S", before: false },
  { label: "2018 Jeep Wrangler", before: false },
];

// ─── CHECKER STRIP ─────────────────────────────────────────────────────────
function CheckerStrip() {
  return (
    <div
      style={{
        height: 24,
        backgroundImage:
          "repeating-conic-gradient(#1a1a1a 0% 25%, #F5F0E8 0% 50%)",
        backgroundSize: "20px 20px",
        borderTop: "3px solid #1a1a1a",
        borderBottom: "3px solid #1a1a1a",
      }}
    />
  );
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <p
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#CC2200",
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#1A1A1A",
          textShadow: "3px 3px 0 #E8DFC8",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 60,
          height: 5,
          background: "#F5C518",
          border: "1.5px solid #1a1a1a",
        }}
      />
    </div>
  );
}

// ─── PRICING CARD ─────────────────────────────────────────────────────────────
function PricingCard({ tier }: { tier: PricingTier }) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || tier.highlight;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? "#1A1A1A" : "#F5F0E8",
        border: `3px solid ${active ? "#F5C518" : "#1A1A1A"}`,
        outline: active ? "3px solid #CC2200" : "none",
        outlineOffset: active ? "4px" : "0",
        padding: "2rem 1.75rem",
        position: "relative",
        transition: "all 0.25s ease",
        cursor: "default",
        flex: "1 1 0",
        minWidth: 220,
      }}
    >
      {tier.highlight && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#CC2200",
            color: "#F5C518",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "0.95rem",
            letterSpacing: "3px",
            padding: "0.2rem 1rem",
            whiteSpace: "nowrap",
            border: "2px solid #1a1a1a",
          }}
        >
          ★ MOST POPULAR
        </div>
      )}

      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "3px",
          color: active ? "#F5C518" : "#CC2200",
          marginBottom: "0.4rem",
        }}
      >
        {tier.tag}
      </div>

      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.8rem",
          color: active ? "#F5F0E8" : "#1A1A1A",
          letterSpacing: "2px",
          lineHeight: 1,
        }}
      >
        {tier.name}
      </h3>

      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "3.5rem",
          color: active ? "#F5C518" : "#CC2200",
          lineHeight: 1,
          margin: "0.75rem 0",
        }}
      >
        {tier.price}
      </div>

      <div
        style={{
          width: "100%",
          height: 2,
          background: active ? "#F5C518" : "#1A1A1A",
          marginBottom: "1.2rem",
          opacity: 0.3,
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tier.features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              color: active ? "#E8DFC8" : "#3A3A3A",
              padding: "0.35rem 0",
              borderBottom: `1px solid ${active ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ color: "#F5C518", fontSize: "0.7rem" }}>◆</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        style={{
          marginTop: "1.5rem",
          width: "100%",
          padding: "0.75rem",
          background: active ? "#CC2200" : "#1A1A1A",
          color: "#F5F0E8",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.2rem",
          letterSpacing: "3px",
          border: "none",
          cursor: "pointer",
          clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
          transition: "background 0.2s",
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function SMAutoDetailingPage() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior" | "both">(
    "exterior"
  );

  const shownTiers =
    activeTab === "exterior"
      ? exteriorTiers
      : activeTab === "interior"
      ? interiorTiers
      : [...exteriorTiers, ...interiorTiers];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #F5F0E8; }

        @keyframes slowspin {
          to { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover {
          transform: translateY(-6px) !important;
          border-color: #F5C518 !important;
        }
      `}</style>

      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          background: "#F5F0E8",
          color: "#1A1A1A",
          overflowX: "hidden",
        }}
      >
        {/* ══ HEADER / NAV ══ */}
        <header
          style={{
            background: "#1A1A1A",
            borderBottom: "4px solid #F5C518",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <nav
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2rem",
              height: 64,
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.9rem",
                color: "#F5F0E8",
                textDecoration: "none",
                letterSpacing: "2px",
                lineHeight: 1,
              }}
            >
              S<span style={{ color: "#CC2200" }}>&amp;</span>M{" "}
              <span style={{ color: "#F5C518" }}>AUTO</span>
            </a>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "1.75rem",
                alignItems: "center",
              }}
            >
              {["About", "Gallery", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#E8DFC8",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  style={{
                    background: "#CC2200",
                    color: "#F5F0E8",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "2px",
                    padding: "0.4rem 1.2rem",
                    textDecoration: "none",
                    border: "2px solid #CC2200",
                    clipPath:
                      "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  BOOK NOW
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* ══ HERO ══ */}
        <section
          style={{
            background: "#1A1A1A",
            position: "relative",
            overflow: "hidden",
            padding: "5rem 2rem 4rem",
            textAlign: "center",
          }}
        >
          {/* Sunburst */}
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 900,
              height: 900,
              background:
                "conic-gradient(from -90deg, #F5C518 0deg 10deg, transparent 10deg 24deg, #F5C518 24deg 34deg, transparent 34deg 48deg, #F5C518 48deg 58deg, transparent 58deg 72deg, #F5C518 72deg 82deg, transparent 82deg 96deg, #F5C518 96deg 106deg, transparent 106deg 120deg, #F5C518 120deg 130deg, transparent 130deg 144deg, #F5C518 144deg 154deg, transparent 154deg 168deg, #F5C518 168deg 178deg, transparent 178deg 192deg, #F5C518 192deg 202deg, transparent 202deg 360deg)",
              opacity: 0.1,
              borderRadius: "50%",
              animation: "slowspin 60s linear infinite",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "#E8DFC8",
              letterSpacing: "4px",
              marginBottom: "0.5rem",
              position: "relative",
              animation: "fadeUp 0.7s ease both",
            }}
          >
            World Class Detailing
          </p>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(5rem, 14vw, 9rem)",
              lineHeight: 0.9,
              color: "#CC2200",
              WebkitTextStroke: "2px #F5C518",
              textShadow: "6px 6px 0 #8B0000, 10px 10px 0 #000",
              position: "relative",
              animation: "fadeUp 0.7s 0.15s ease both",
              animationFillMode: "both",
            }}
          >
            S&amp;M
          </h1>

          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              color: "#F5F0E8",
              letterSpacing: "8px",
              marginTop: "0.25rem",
              position: "relative",
              animation: "fadeUp 0.7s 0.3s ease both",
              animationFillMode: "both",
            }}
          >
            AUTO DETAILING
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap",
              position: "relative",
              animation: "fadeUp 0.7s 0.45s ease both",
              animationFillMode: "both",
            }}
          >
            {["Est. 1995", "Lafayette, LA", "Premium Quality"].map((b) => (
              <span
                key={b}
                style={{
                  background: "#CC2200",
                  color: "#F5F0E8",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "0.35rem 1.1rem",
                  border: "2px solid #F5C518",
                  clipPath:
                    "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        <CheckerStrip />

        {/* ══ ABOUT ══ */}
        <section
          id="about"
          style={{ padding: "5rem 2rem", background: "#F5F0E8" }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <SectionHeading label="Our Story" title="About Us" />
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#3A3A3A",
                  marginBottom: "1rem",
                }}
              >
                S&amp;M Auto Detailing has been the go-to choice for car
                enthusiasts and everyday drivers across Lafayette since 1995.
                Founded on a simple belief — that every vehicle deserves
                showroom-quality care — we&apos;ve spent nearly three decades
                perfecting our craft.
              </p>
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "#3A3A3A",
                  marginBottom: "1.5rem",
                }}
              >
                From daily drivers to weekend classics, we treat every car like
                it&apos;s our own. Our team uses only professional-grade
                products and proven techniques to deliver results that speak for
                themselves.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  marginTop: "2rem",
                }}
              >
                {[
                  { num: "30+", label: "Years in Business" },
                  { num: "5K+", label: "Cars Detailed" },
                  { num: "100%", label: "Satisfaction Rate" },
                  { num: "#1", label: "In Lafayette, LA" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "#1A1A1A",
                      padding: "1.25rem 1.5rem",
                      borderLeft: "5px solid #CC2200",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "0 0 18px 18px",
                        borderColor:
                          "transparent transparent #F5C518 transparent",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "2.6rem",
                        color: "#F5C518",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#E8DFC8",
                        marginTop: "0.2rem",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual plate */}
            <div
              style={{
                background: "#1A1A1A",
                border: "4px solid #1A1A1A",
                outline: "3px solid #F5C518",
                outlineOffset: 6,
                padding: "3rem 2rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "conic-gradient(from 180deg at 50% 120%, #F5C518 0deg 8deg, transparent 8deg 20deg, #F5C518 20deg 28deg, transparent 28deg 40deg, #F5C518 40deg 48deg, transparent 48deg 60deg, #F5C518 60deg 68deg, transparent 68deg 180deg)",
                  opacity: 0.06,
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "4px",
                  color: "#F5C518",
                  marginBottom: "0.5rem",
                  position: "relative",
                }}
              >
                WORLD CLASS SERVICE
              </p>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "5.5rem",
                  color: "#CC2200",
                  WebkitTextStroke: "1px #F5C518",
                  textShadow: "4px 4px 0 #000",
                  lineHeight: 1,
                  position: "relative",
                }}
              >
                S&amp;M
              </div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "5px",
                  color: "#F5F0E8",
                  marginTop: "0.5rem",
                  position: "relative",
                }}
              >
                AUTO DETAILING
              </p>
              <div
                style={{
                  margin: "1.5rem auto 0",
                  width: "80%",
                  height: 2,
                  background: "#F5C518",
                  opacity: 0.3,
                }}
              />
              <p
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "#E8DFC8",
                  marginTop: "1.25rem",
                  lineHeight: 1.7,
                  position: "relative",
                }}
              >
                &ldquo;We don&apos;t just clean cars —<br />
                we restore pride.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <CheckerStrip />

        {/* ══ GALLERY ══ */}
        <section
          id="gallery"
          style={{ padding: "5rem 2rem", background: "#E8DFC8" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Our Work" title="Customer Cars" />

            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "1rem",
                color: "#3A3A3A",
                marginBottom: "2.5rem",
                maxWidth: 520,
                lineHeight: 1.75,
              }}
            >
              Every car that leaves our shop is a testament to our standards.
              Browse some of our recent work below — swap in your own images to
              show off your results.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {galleryPlaceholders.map((car, i) => (
                <div
                  key={i}
                  className="gallery-card"
                  style={{
                    position: "relative",
                    border: "3px solid #1A1A1A",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s, border-color 0.2s",
                    aspectRatio: "4/3",
                    background: "#1A1A1A",
                  }}
                >
                  {/* Placeholder shimmer */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(110deg, #2a2a2a 30%, #3a3a3a 50%, #2a2a2a 70%)",
                      backgroundSize: "800px 100%",
                      animation: "shimmer 2s infinite linear",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {/* Car icon */}
                    <svg
                      width="64"
                      height="32"
                      viewBox="0 0 64 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="14"
                        width="56"
                        height="12"
                        rx="3"
                        fill="#CC2200"
                        opacity="0.5"
                      />
                      <path
                        d="M14 14 Q18 6 24 5 L40 5 Q46 6 50 14"
                        stroke="#CC2200"
                        strokeWidth="2"
                        fill="#CC2200"
                        opacity="0.5"
                      />
                      <circle cx="18" cy="27" r="5" fill="#F5C518" opacity="0.5" />
                      <circle cx="46" cy="27" r="5" fill="#F5C518" opacity="0.5" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "2px",
                        color: "#555",
                        textTransform: "uppercase",
                      }}
                    >
                      Add Photo
                    </span>
                  </div>

                  {/* Overlay */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 60%)",
                      opacity: 0,
                      transition: "opacity 0.2s",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "1rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "1.2rem",
                          color: "#F5F0E8",
                          letterSpacing: "2px",
                        }}
                      >
                        {car.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "2px",
                          color: "#F5C518",
                          textTransform: "uppercase",
                        }}
                      >
                        ◆ After Detail
                      </div>
                    </div>
                  </div>

                  {/* Corner tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      background: "#CC2200",
                      color: "#F5F0E8",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "0.8rem",
                      letterSpacing: "2px",
                      padding: "0.2rem 0.7rem",
                      border: "1.5px solid #F5C518",
                    }}
                  >
                    #{i + 1}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "1px",
                color: "#888",
                textAlign: "center",
              }}
            >
              Replace placeholder cards with{" "}
              <code
                style={{
                  background: "#1a1a1a",
                  color: "#F5C518",
                  padding: "0.1rem 0.4rem",
                  fontSize: "0.8rem",
                }}
              >
                &lt;Image&gt;
              </code>{" "}
              components from{" "}
              <code
                style={{
                  background: "#1a1a1a",
                  color: "#F5C518",
                  padding: "0.1rem 0.4rem",
                  fontSize: "0.8rem",
                }}
              >
                next/image
              </code>
            </p>
          </div>
        </section>

        <CheckerStrip />

        {/* ══ PRICING ══ */}
        <section
          id="pricing"
          style={{ padding: "5rem 2rem", background: "#F5F0E8" }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Investment" title="Pricing & Packages" />

            {/* Tab switcher */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              {(
                [
                  ["exterior", "Exterior"],
                  ["interior", "Interior"],
                  ["both", "Both"],
                ] as const
              ).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setActiveTab(val)}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    letterSpacing: "3px",
                    padding: "0.5rem 1.5rem",
                    border: "3px solid #1A1A1A",
                    cursor: "pointer",
                    background:
                      activeTab === val ? "#CC2200" : "transparent",
                    color:
                      activeTab === val ? "#F5F0E8" : "#1A1A1A",
                    transition: "background 0.2s, color 0.2s",
                    clipPath:
                      "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              {shownTiers.map((tier) => (
                <PricingCard key={`${tier.tag}-${tier.name}`} tier={tier} />
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                background: "#1A1A1A",
                borderLeft: "5px solid #F5C518",
                padding: "1rem 1.5rem",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1rem",
                color: "#E8DFC8",
                letterSpacing: "1px",
              }}
            >
              ◆ All prices are starting rates and may vary by vehicle size,
              condition, and add-ons. Contact us for a custom quote.
            </div>
          </div>
        </section>

        <CheckerStrip />

        {/* ══ CONTACT ══ */}
        <section
          id="contact"
          style={{ padding: "5rem 2rem", background: "#1A1A1A" }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#F5C518",
                  marginBottom: "0.4rem",
                }}
              >
                Get In Touch
              </p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  lineHeight: 1,
                  color: "#F5F0E8",
                  marginBottom: "1rem",
                }}
              >
                Book Your Detail
              </h2>
              <div
                style={{
                  width: 60,
                  height: 5,
                  background: "#CC2200",
                  border: "1.5px solid #F5C518",
                  marginBottom: "2rem",
                }}
              />

              {[
                { icon: "📍", label: "Location", value: "Lafayette, Louisiana" },
                { icon: "📞", label: "Phone", value: "(337) 555-0199" },
                { icon: "✉️", label: "Email", value: "info@smautodtl.com" },
                { icon: "🕐", label: "Hours", value: "Mon–Sat: 8am – 6pm" },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ fontSize: "1.2rem", marginTop: 2 }}>
                    {c.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "2px",
                        color: "#F5C518",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Libre Baskerville', serif",
                        fontSize: "1rem",
                        color: "#E8DFC8",
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form
              name="contact form"
              data-netlify="true"
              style={{
                background: "#F5F0E8",
                border: "3px solid #F5C518",
                padding: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  letterSpacing: "3px",
                  color: "#1A1A1A",
                  marginBottom: "1.5rem",
                }}
              >
                Request a Booking
              </h3>

              {[
                { id: "name", label: "Full Name", type: "text" },
                { id: "phone", label: "Phone Number", type: "tel" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "vehicle", label: "Vehicle (Year, Make, Model)", type: "text" },
              ].map((f) => (
                <div key={f.id} style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor={f.id}
                    style={{
                      display: "block",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#3A3A3A",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      border: "2px solid #1A1A1A",
                      background: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1rem",
                      color: "#1A1A1A",
                      outline: "none",
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#3A3A3A",
                    marginBottom: "0.35rem",
                  }}
                >
                  Service Requested / Notes
                </label>
                <textarea
                  id="message"
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.9rem",
                    border: "2px solid #1A1A1A",
                    background: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1rem",
                    color: "#1A1A1A",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  background: "#CC2200",
                  color: "#F5F0E8",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem",
                  letterSpacing: "4px",
                  border: "none",
                  cursor: "pointer",
                  clipPath:
                    "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                }}
              >
                SEND REQUEST
              </button>
            </form>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer
          style={{
            background: "#0f0f0f",
            borderTop: "4px solid #CC2200",
          }}
        >
          <CheckerStrip />
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "2.5rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
                color: "#F5F0E8",
                letterSpacing: "2px",
              }}
            >
              S<span style={{ color: "#CC2200" }}>&amp;</span>M{" "}
              <span style={{ color: "#F5C518" }}>AUTO DETAILING</span>
            </div>

            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.85rem",
                color: "#666",
                letterSpacing: "1px",
              }}
            >
              © {new Date().getFullYear()} S&amp;M Auto Detailing · Lafayette, LA ·
              All Rights Reserved
            </p>

            <div
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              {["Facebook", "Instagram", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#F5C518",
                    textDecoration: "none",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
