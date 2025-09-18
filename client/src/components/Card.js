import { styled } from "@stitches/react";

export const Card = styled("div", {
  backgroundColor: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "16px 18px",
  boxShadow: "var(--shadow-sm)",
});

export const CardHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CardTitle = styled("h3", {
  margin: 0,
  fontSize: "1.125rem",
  color: "var(--text)",
});

export const CardContent = styled("div", {
  fontSize: "1rem",
});
