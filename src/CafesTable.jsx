import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes";

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState("All");

  useEffect(() => {
    axios
      .get("/cafes")
      .then((response) => {
        setCafes(response.data.cafes);
      })
      .catch((error) => {
        console.error("Error fetching cafes:", error);
      });
  }, []);

  const filteredCafes =
    selectedSubway === "All" ? cafes : cafes.filter((cafe) => cafe.subwayCode === selectedSubway);

  const handleSubwayChange = (e) => {
    setSelectedSubway(e.target.value);
  };

  return (
    <div className="cafesTable">
      <FilterCafes value={selectedSubway} onChange={handleSubwayChange} />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img src={cafe.img || "https://placehold.co/150"} alt="cafe-image" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;
