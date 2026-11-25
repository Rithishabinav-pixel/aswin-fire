import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1C2430",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(215,38,30,0.45), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#D7261E",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800, color: "#fff" }}>
            {company.shortName}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 800, color: "#fff", maxWidth: 980, lineHeight: 1.15 }}>
          End-to-end fire protection engineering for hospitals, industry &amp; critical infrastructure
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#c7ccd4", marginTop: 28 }}>
          Design · Installation · Commissioning · AMC — across South India
        </div>
      </div>
    ),
    { ...size }
  );
}
