import React from "react";

const card: React.CSSProperties = {
  padding: "24px",
  borderRadius: "16px",
  background: "#ffffff",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  display: "grid",
  gap: "8px",
  textAlign: "center",
};

export default function Welcome() {
  return (
    <section style={card}>
      <div style={{ fontSize: 40, lineHeight: 1 }}>💪</div>
      <h1 style={{ margin: 0, fontSize: 28 }}>TrackFit Mini</h1>
      <p style={{ margin: 0, fontSize: 16, opacity: 0.85 }}>
       Vamos treinar.
      </p>
    </section>
  );
}
