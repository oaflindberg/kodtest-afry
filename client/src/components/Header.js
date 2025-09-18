import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <Container>
        <Text to="/">People & Companies</Text>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/people">People</StyledLink>
          <StyledLink to="/companies">Companies</StyledLink>
        </Nav>
      </Container>
    </SHeader>
  );
};

const SHeader = styled("header", {
  backgroundColor: "var(--surface)",
  position: "sticky",
  top: 0,
  zIndex: 10,
  borderBottom: "1px solid var(--border)",
  boxShadow: "var(--shadow-sm)",
});

const Container = styled("div", {
  height: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  margin: "0 auto",
  maxWidth: "1100px",
  width: "100%",
  boxSizing: "border-box",
});

const Text = styled(Link, {
  textTransform: "uppercase",
  color: "var(--text)",
  textDecoration: "none",
  fontSize: "1.25rem",
  fontWeight: 700,
  letterSpacing: "0.4px",
});

const Nav = styled("nav", {
  display: "flex",
  gap: "0.75rem",
});

const StyledLink = styled(Link, {
  textTransform: "uppercase",
  textDecoration: "none",
  fontSize: "0.95rem",
  color: "var(--text)",
  fontWeight: 600,
  padding: "0.5rem 0.75rem",
  borderRadius: "8px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "var(--surface-muted)",
  },
});
