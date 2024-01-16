import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading } from "../Component";
import { NavBar } from "../Component";

const HomeLayout = () => {
  const navigation = useNavigation();

  let isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <NavBar />
      {isLoading ? <Loading /> : <Outlet />}
    </>
  );
};

export default HomeLayout;
