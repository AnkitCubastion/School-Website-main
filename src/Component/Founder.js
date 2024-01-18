import "./Founder.css";
import React, { useEffect, useState } from "react";
import { customFetch } from "../Utils";

const Founder = () => {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    const fetchFounder = async () => {
      try {
        const resp = await customFetch.get("/founders");
        const data = resp.data;
        setFounders(resp.data);
        // console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchFounder();
  }, []);

  return (
    <>
      <div className="founder-container">
        <h1>Our Founders</h1>
        <div className="founder-card-continer">
          {founders.map((founder) => (
            <div className="founder-card" key={founder.id}>
              <img src={founder.image} alt={founder.name} />
              <p>Name: {founder.name}</p>
              <p>Email: {founder.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Founder;
