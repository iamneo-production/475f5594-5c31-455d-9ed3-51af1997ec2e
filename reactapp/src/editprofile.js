import React, { useState } from 'react';
// Uncomment the import statements if required.
// import './styles/TeacherRegister.css';
// import { useDispatch } from 'react-redux';
// import { login } from '../user';
// import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mailid, setMailid] = useState('');
  const [eq, setEq] = useState('');
  const [language, setLanguage] = useState('');
  const [location, setLocation] = useState('');
  const [years, setYears] = useState('');
  const [areaofinterest, setAreaOfInterest] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token=localStorage.getItem('token');
    console.log(token);
    try {
      const response = await axios.post('http://localhost:8181/api/postvalue', {
        name,
        mailid,
        eq,
        language,
        location,
        years,
        areaofinterest
      },
      {
        headers:{
          "cache-control":'no-cache',
          "Authorization":`Bearer ${token}`,
        }
      }
      );

      if (response.status === 200) {
        navigate('/home/profile');
        // Clear the input fields after successful submission.
        setMailid('');
        setName('');
        setEq('');
        setLanguage('');
        setLocation('');
        setYears('');
        setAreaOfInterest('');
      }
    } catch (error) {
      console.error("Error: ", error);
      // Handle any errors that occur during the HTTP request here.
      // For example, you could set an error state and display an error message to the user.
      setShowAlert(true);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Advisor profile</h2>
        <form>
          <h3>Edit Profile</h3>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={mailid}
            onChange={(e) => setMailid(e.target.value)}
            required
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="eq">Educational Qualification</label>
          <input
            type="text"
            placeholder="Educational Qualification"
            id="eq"
            name="eq"
            value={eq}
            onChange={(e) => setEq(e.target.value)}
            required
          />
          <label htmlFor="language">Language</label>
          <input
            type="text"
            placeholder="Language"
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="Location"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <label htmlFor="years">Years of Experience</label>
          <input
            type="number"
            placeholder="Years of Experience"
            id="years"
            name="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
          />
          <label htmlFor="areaofinterest">Area of Interest</label>
          <input
            type="text"
            placeholder="Area of Interest"
            id="areaofinterest"
            name="areaofinterest"
            value={areaofinterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary1" role="button" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
