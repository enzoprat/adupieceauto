import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${site.name} — Pièces auto, consommables & outillage`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0D",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              background: "#E10600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div
            style={{
              color: "#9CA3AF",
              fontSize: "26px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Pros & particuliers · 82
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fff",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Pièces auto & consommables
          </div>
          <div
            style={{
              color: "#E10600",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
livraison express 2×/jour
          </div>
          <div style={{ color: "#9CA3AF", fontSize: "30px", marginTop: "24px" }}>
            {`${site.name} — Labastide-Saint-Pierre (82370)`}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Prix attractifs", "Service de proximité", `Depuis ${site.founded}`].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid #2a2d34",
                  borderRadius: "999px",
                  padding: "10px 22px",
                  color: "#fff",
                  fontSize: "24px",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  );
}
