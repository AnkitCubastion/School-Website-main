import React from "react";
import Founder from "../Component/Founder";
import TripEventActivityPost from "./TripEventActivityPost";
import TripEventActivity from "../Component/TripEventActivity";
import Admission from "./Admission";

const Landing = () => {
  return (
    <>
      <Founder />
      <TripEventActivityPost />
      <TripEventActivity />
      <Admission />
    </>
  );
};

export default Landing;
