import React, { useState } from "react";
import axios from "axios";

const TrainSearch = () => {
  const [trainNo, setTrainNo] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchTrainSchedule = async () => {
    setError("");
    setData(null);

    if (!trainNo) {
      setError("Please enter a train number.");
      return;
    }

    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/getTrainScheduleV2",
      params: { trainNo },
      headers: {
        "x-rapidapi-key": "b8d8191696mshd134af2e2717662p13412cjsn7a69f0f493e0",
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Debugging: Log API response
      setData(response.data);
    } catch (error) {
      setError("Failed to fetch train schedule. Check your API key.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Train Schedule Finder</h2>
      <input
        type="text"
        value={trainNo}
        onChange={(e) => setTrainNo(e.target.value)}
        placeholder="Enter Train Number"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={fetchTrainSchedule} style={{ padding: "8px" }}>
        Submit
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h3>Train Details</h3>
          <p>
            <b>Name:</b> {data.trainName}
          </p>
          <p>
            <b>Number:</b> {data.trainNo}
          </p>
          <h4>Route Details:</h4>
          {data.route && data.route.length > 0 ? (
            <ul>
              {data.route.map((station, index) => (
                <li key={index}>
                  {station.stationName} ({station.stationCode}) - Arrival:{" "}
                  {station.arrivalTime} | Departure: {station.departureTime}
                </li>
              ))}
            </ul>
          ) : (
            <p>No route details available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TrainSearch;
