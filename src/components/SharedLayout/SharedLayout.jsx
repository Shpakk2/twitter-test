import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
