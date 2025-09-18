import { styled } from "@stitches/react";

const sharedStyles = {
  color: "var(--text)",
  fontSize: "1.125rem",
  width: "clamp(260px, 40vw, 560px)",
  height: "2.5rem",
  backgroundColor: "var(--surface)",
  borderRadius: "10px",
  border: "1px solid var(--border)",
  padding: "0 0.75rem",
  lineHeight: "2.5rem",
  boxSizing: "border-box",
  transition: "box-shadow 0.2s, border-color 0.2s",
  "&:focus": {
    outline: "none",
    borderColor: "var(--brand)",
    boxShadow: "0 0 0 3px rgba(220, 138, 120, 0.25)",
  },
};

export const Input = styled("input", sharedStyles);

export const Select = styled("select", sharedStyles);

export const Heading = styled("h2", {
  color: "var(--text)",
  fontSize: "1.75rem",
  letterSpacing: "0.2px",
});

const sharedTextStyles = {
  color: "var(--text)",
  fontSize: "1.125rem",
  marginBottom: "8px",
};

export const Paragraph = styled("p", sharedTextStyles);

export const Label = styled("label", sharedTextStyles);

export const Span = styled("span", sharedTextStyles, {
  fontWeight: "600",
  fontSize: "1.25rem",
});

export const ListItem = styled("li", sharedTextStyles, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  padding: "0.75rem 1rem",
  gap: "1rem",
  fontSize: "1.125rem",
  backgroundColor: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "10px",
  boxShadow: "var(--shadow-sm)",
});

export const Button = styled("button", {
  backgroundColor: "var(--brand)",
  height: "2.5rem",
  padding: "0 1rem",
  marginLeft: "0.5rem",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  border: "1px solid var(--brand)",
  borderRadius: "10px",
  width: "auto",
  cursor: "pointer",
  transition: "transform 0.15s ease, background-color 0.2s ease",
  boxShadow: "var(--shadow-sm)",
  "&:hover": {
    transform: "translateY(-1px)",
    backgroundColor: "var(--brand-600)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});
