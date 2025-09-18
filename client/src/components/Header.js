import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <Text to="/">People & Companies</Text>
      <Nav>
        <StyledLink to="/people">People</StyledLink>
        <StyledLink to="/companies">Companies</StyledLink>
      </Nav>
    </SHeader>
  );
};

const SHeader = styled("header", {
  backgroundColor: "#dc8a78",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
});

const Text = styled(Link, {
  textTransform: "uppercase",
  color: "#4c4f69",
  textDecoration: "none",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: 0,
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Nav = styled("nav", {
  display: "flex",
  gap: "1rem",
});

const StyledLink = styled(Link, {
  textTransform: "uppercase",
  textDecoration: "none",
  fontSize: "1.25rem",
  color: "#4c4f69",
  fontWeight: "bold",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.15)",
  },
});
