import React, { useState, useEffect } from "react";
import { customFetch } from "../Utils";
import "./TripEventActivity.css";

const TripEventActivity = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await customFetch.get("/tripEventActivityPost");
        const data = response.data;
        setTrips(data);
      } catch (error) {
        console.error("Error fetching data from the database:", error.message);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="trip-event-activity-main-container">
      <div>
        <h1>Trips, Event, Activity List</h1>
        <ul className="t-e-a-sub-container">
          {trips.map((trip) => (
            <div className="t-e-a-card" key={trip.id}>
              <img src={trip.image} alt={trip.name} />
              Title: {trip.title} <br />
              Date: {trip.date} <br />
              Location: {trip.location} <br />
              Type: {trip.type} <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripEventActivity;
