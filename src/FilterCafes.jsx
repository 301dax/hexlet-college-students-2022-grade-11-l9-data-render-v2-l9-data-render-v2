import React from "react";

const subways = [
  {
    name: "Арбатская",
    code: "Arbat",
  },
  {
    name: "Александровский сад",
    code: "Alexanders Garden",
  },
  {
    name: "Московская",
    code: "Moscow",
  },
  {
    name: "Парк Культуры",
    code: "Culture",
  },
  {
    name: "Театральная",
    code: "Theater",
  },
];

const FilterCafes = ({ value, onChange }) => {
  return (
    <div className="controls">
      <select name="subway" id="subway" value={value} onChange={onChange}>
        <option value="All">Все</option>
        {subways.map((subway) => (
          <option key={subway.code} value={subway.code}>
            {subway.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;
