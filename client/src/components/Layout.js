import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { styled } from "@stitches/react";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};

const Main = styled("main", {
  padding: "24px 20px",
});

const Container = styled("div", {
  margin: "0 auto",
  width: "100%",
  maxWidth: "1100px",
});
