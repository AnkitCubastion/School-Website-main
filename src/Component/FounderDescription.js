import React, { useEffect, useState } from "react";
import { customFetch } from "../Utils";
import { useLocation } from "react-router-dom";
import "./FounderDescription.css";

const FounderDescription = ({ params }) => {
  const location = useLocation();
  const [founder, setFounder] = useState(null);
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchFounderDetails = async () => {
      try {
        const resp = await customFetch.get(`/founders/${path}`);
        const data = resp.data;
        setFounder(data);
      } catch (error) {
        console.log("Error fetching founder details", error);
      }
    };
    fetchFounderDetails();
  }, [path]);

  if (!founder) {
    return <p>Loading...</p>;
  }

  return (
    <div className="FD-main-con">
      <img src={founder.image} alt={founder.name} />
      <h2>{founder.name}</h2>
      <p>Email: {founder.email}</p>
      <p>Mobile: {founder.mobile}</p>
      <p>About: {founder.about}</p>
      <p>Achievements: {founder.achievements}</p>
      <p>Philosophy: {founder.philosophy}</p>
    </div>
  );
};

export default FounderDescription;
