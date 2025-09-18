import { styled } from "@stitches/react";

const sharedStyles = {
  color: "#4c4f69",
  fontSize: "1.25rem",
  width: "clamp(40vw, 25vw, 60vw)",
  height: "2rem",
  backgroundColor: "#eff1f5",
  borderRadius: "8px",
  border: "2px solid #8c8fa1",
  padding: "0 0.5rem",
  lineHeight: "1.75rem",
  boxSizing: "border-box",
  "&:focus": {
    outline: "none",
    borderColor: "#dc8a78",
    boxShadow: "0 0 0 2px #dc8a78AA",
  },
};

export const Input = styled("input", sharedStyles);

export const Select = styled("select", sharedStyles);

export const Heading = styled("h2", {
  color: "#4c4f69",
  fontSize: "2rem",
});

const sharedTextStyles = {
  color: "#4c4f69",
  fontSize: "1.25rem",
  marginBottom: "8px",
};

export const Paragraph = styled("p", sharedTextStyles);

export const Label = styled("label", sharedTextStyles);

export const Span = styled("span", sharedTextStyles, {
  fontWeight: "bold",
  fontSize: "1.5rem",
});

export const ListItem = styled("li", sharedTextStyles, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  padding: "0.25rem 0",
  gap: "8rem",
  fontSize: "1.5rem",
});

export const Button = styled("button", {
  backgroundColor: "#dc8a78",
  height: "2rem",
  padding: "0 1rem",
  marginLeft: "0.5rem",
  color: "#eff1f5;",
  fontSize: "1.25rem",
  fontWeight: "bold",
  border: "2px solid #dc8a78",
  borderRadius: "8px",
  // width: "7rem",
  width: "auto",
  cursor: "pointer",
  transition: "transform 0.2s",
  boxShadow:
    "2.5px 2.5px 2.5px -2.5px rgba(0, 0, 0, 0.25), 5px 5px 5px -5px rgba(0, 0, 0, 0.15)",
  "&:hover": {
    transform: "scale(1.05)",
  },
});
