import React from "react";

//Range bar component
const RangeBar = ({ minAge, maxAge, onMinAgeChange, onMaxAgeChange }) => {
  return (
    <div>
      <h2>Select Age Range</h2>
      <input
        type="range"
        min={0}
        max={100}
        value={minAge}
        onChange={onMinAgeChange}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={maxAge}
        onChange={onMaxAgeChange}
      />
      <div>
        <span>Min Age: {minAge}</span>
        <span> Max Age: {maxAge}</span>
      </div>
    </div>
  );
};

export default RangeBar;
