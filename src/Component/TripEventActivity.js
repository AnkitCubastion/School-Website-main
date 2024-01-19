import React, { useState, useEffect } from "react";
import { customFetch } from "../Utils";
import "./TripEventActivity.css";

const TripEventActivity = () => {
  const [trips, setTrips] = useState([]);
  const [filter, setFilter] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await customFetch.get("/tripEventActivityPost");
        const data = response.data;

        // Define properties you want to search in
        const searchableProperties = ["title", "location", "type"];

        // Filter the trips based on the search query
        const filteredTrips = data.filter((trip) =>
          searchableProperties.some((property) =>
            trip[property].toLowerCase().includes(searchQuery.toLowerCase())
          )
        );

        // Sort the filtered trips based on the 'date' property
        const sortedTrips = filteredTrips.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          if (filter === "latest") {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });

        setTrips(sortedTrips);
      } catch (error) {
        console.error("Error fetching data from the database:", error.message);
      }
    };

    fetchTrips();
  }, [filter, searchQuery]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="trip-event-activity-main-container">
      <div>
        <h1>Trips, Event, Activity List</h1>

        <label>Filter by:</label>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="latest">Latest Upcomming</option>
          <option value="oldest">Oldest Upcomming</option>
        </select>

        <label>Search:</label>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
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
