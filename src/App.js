import "./App.css";
import { useState } from "react";
import RangeBar from "./Components/RangeBar";
import PatientTable from "./Components/PatientTable";

function App() {
  //State variables for age
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  //Min age handler
  const handleMinAgeChange = (event) => {
    setMinAge(parseInt(event.target.value));
  };

  //Max age handler
  const handleMaxAgeChange = (event) => {
    setMaxAge(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <RangeBar
        minAge={minAge}
        maxAge={maxAge}
        onMinAgeChange={handleMinAgeChange}
        onMaxAgeChange={handleMaxAgeChange}
      />
      {/*Passing minAge and maxAge as a props to patient table to filter data*/}
      <PatientTable minAge={minAge} maxAge={maxAge} />
    </div>
  );
}

export default App;
