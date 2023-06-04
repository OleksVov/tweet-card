import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {Container, Header, Link} from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
      <Container>
   <Header>
   <nav>
      <Link to="/" >Home</Link>
      <Link to="/tweet">Tweet</Link>
    </nav>
   </Header>
   <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  </Container>
  );
};