import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEmail, setPassword } from './action';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login=({ email, password, setEmail, setPassword, })=> {
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [showAlert,setShowAlert]=useState(false);
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Create a formData object with the email and password
    e.preventDefault();
      const data = {
        email: email,
       password: password
      };
      try{
        const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate',data)
     
      .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token);
        console.log(localStorage.getItem('token'));
      })      
      setShowAlert(true);
      }
      catch(error){
        alert("Invalid Password");
      }
      
  };

  return (
    <div className="bg">
      <div className="background">
        <div className="a" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
        {showAlert && (alert("Login Successful."+email))}
            {showAlert && ( navigate("/home"))}
        <button>
          <Link to="/newuser">New User?</Link>
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = {
  setEmail,
  setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);