import React from 'react';
import './profile.css';
import axios from "axios";
import { connect } from 'react-redux';
import { setEmail, setPassword } from './action';
import email from './login';

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './advisors.css';

const Profile = ({ email }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get(`http://localhost:8181/api/getvalues/${email}`, {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });
        setPosts(response.data);
        console.log("response.data", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  return (
    <>
     <div style={{  }} className="omnoin"></div>
     <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="profile-nav col-md-3">
        <div className="panel">
          <div className="user-heading round">
            <h1 style={{fontSize:"40px"}}>{posts.name}</h1>
          
          </div>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="/edit">
                {" "}
                <i style={{color: "black"}}className="fa fa-user" /> Edit Profile
              </a>
            </li>
           
          </ul>
        </div>
      </div>
      <div className="profile-info col-md-9">
        <div className="panel">
          
        </div>
        <div className="panel">
          <div className="bio-graph-heading">
           ADVISOR @AdvisorHUB
          </div>
          <div className="panel-body bio-graph-info">
            <h1 style={{color:"bla"}}>Profile</h1>
            <div className="row">
            <div className="bio-row">
                <p>
                  <span>Advisor Id </span>: A00245
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Expertise </span>: {posts.areaofinterest}
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Qualification</span>: {posts.eq}
                </p>
              </div>
              
              <div className="bio-row">
                <p>
                  <span>Country </span>: {posts.location}
                </p>
              </div>
             
              <div className="bio-row">
                <p>
                  <span>Years of Experience </span>: {posts.years}
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Email </span>: {email}
                </p>
              </div>
              
              <div className="bio-row">
                <p>
                  <span>Language </span>: {posts.language}
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Rating</span>:4.25/5
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
     
  
</>

  );
};
const mapStateToProps = (state) => ({
  email: state.email,

});


export default connect(mapStateToProps) (Profile);
