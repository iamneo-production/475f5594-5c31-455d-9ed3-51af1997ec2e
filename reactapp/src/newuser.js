import React, { useState } from "react";
import { Link } from "react-router-dom";
import './new.css';
import axios from "axios";

function New() {
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [educationalQualification, setEducationalQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      areaOfInterest,
      educationalQualification,
      experience,
      language,
      location,
    };

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint where you want to send the form data.
      const response = await axios.post('http://127.0.0.1:8080/posta', formData);
      console.log("Form data submitted successfully:", response.data);
      // Optionally, you can redirect the user to another page after successful form submission.
      // window.location.href = "/success";
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <div className="background">
        <div className="a" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Advisor Account Creation</h3>
        <label htmlFor="area">Area of Interest</label>
        <input
          type="text"
          placeholder="Enter your area of interest"
          id="area"
          required
          value={areaOfInterest}
          onChange={(e) => setAreaOfInterest(e.target.value)}
        />
        <br />

        <label htmlFor="eq">Educational Qualification</label>
          <input type="text" placeholder="Enter your educational qualification" id="eq" required
           value={educationalQualification}
           onChange={(e) => setEducationalQualification(e.target.value)} />
          <br></br>

          <label htmlFor="es">Experience</label>
          <input type="text" placeholder="Enter your Experience" id="es" required 
          />
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          <br></br>
          <label htmlFor="l">Language</label>
          <input type="text" placeholder="Enter your preferred Language" id="l" required 
             value={language}
             onChange={(e) => setLanguage(e.target.value)}/>
          <br></br>
          <label htmlFor="lo">Location</label>
          <input type="text" placeholder="Enter your location" id="lo" required 
             value={location}
             onChange={(e) => setLocation(e.target.value)}/>
          <br></br>


        <input type="submit" value="Submit" />
        <Link to="/">Create Your Account</Link>
      </form>
    </div>
  );
}

export default New;