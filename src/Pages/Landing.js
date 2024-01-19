import React from "react";
import Founder from "../Component/Founder";
import { LandingCarousel } from "../Component/LandingCarousel";
import TripEventActivityPost from "./TripEventActivityPost";
import TripEventActivity from "../Component/TripEventActivity";
import Admission from "./Admission";

const Landing = () => {
  return (
    <>
      <LandingCarousel />
      <Founder />
      <TripEventActivityPost />
      <TripEventActivity />
      <Admission />
    </>
  );
};

export default Landing;
