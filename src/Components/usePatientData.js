import { useState, useEffect } from "react";

//This is a custom hook to fetch the data and calculate the age
const usePatientData = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Fetch patient data from the API endpoint
        // Just to bring that in your notice that we have duplicate set of patient data in given API where we have complete set of information like Name, Gender, BirthDate, Address and Phone.
        const response = await fetch(
          "https://hapi.fhir.org/baseR4/Patient?_pretty=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }
        const data = await response.json();
        setPatients(data.entry.map((entry) => entry.resource));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatients();
  }, []);

  //Logic to calculate age of a patient as per his birth date
  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return { patients, calculateAge };
};

export default usePatientData;
