import React from "react";
import usePatientData from "./usePatientData";

//Patient table component
const PatientTable = (props) => {
  const { patients, calculateAge } = usePatientData();

  const filteredPatients = patients.filter((patient) => {
    const age = calculateAge(patient.birthDate);
    return age >= props.minAge && age <= props.maxAge;
  });

  return (
    <div>
      <h2>Patients List</h2>
      <table className="tableContainer">
        <thead className="tableHead">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>BirthDate</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {filteredPatients.map(
            (patient) =>
              // Check if patient data is complete
              patient.id &&
              patient.name &&
              patient.gender &&
              patient.birthDate &&
              patient.address &&
              patient.telecom && (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name[0]?.given[0]}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.birthDate}</td>
                  {/*Using optional chaining concept here**/}
                  <td>{`${patient.address[0]?.line.join(", ")}, ${
                    patient.address[0]?.city
                  }, ${patient.address[0]?.state}, ${
                    patient.address[0]?.postalCode
                  }, ${patient.address[0]?.country}`}</td>
                  <td>{patient.telecom[0]?.value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
