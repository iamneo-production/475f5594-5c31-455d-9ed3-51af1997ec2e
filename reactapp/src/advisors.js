
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './advisors.css';
function Advisor() {
 
const styles = {
  card: {
   
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    
  },
  content: {
    
    fontFamily: "Arial, sans-serif",
  },
  title: {
    
    fontSize: "18px",
    fontWeight: "bold",
  },
 
};

  const[posts,setPosts]=useState([]);
  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/api/geta', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setPosts(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  return (<>
      <h1>Our Top Advisors:</h1>
      <br></br>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="adcard">
      {posts.map((post, index) => (
        <div className="c1"key={index} style={styles.card}>
          <div style={styles.content}>
           <img className="template-image"style={{}} src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"></img>
            <h2 style={styles.title} className="adh2">{post.name}</h2>
            <br></br>
            {/* <pre>     Name:{post.name}</pre> */}
             
            {/* <p>Destination:{post.destination}</p> */}
            <pre>     Expert in {post.areaofinterest}</pre>
            {/* <pre>     Location:{post.location}</pre>
            <pre>     Language:{post.language}</pre>
            <pre>     Experience: {post.years}</pre>
          <pre>     Qualification: {post.eq}</pre> */}
            {/* <pre>     SeatAvailability: {post.seatAvail}</pre> */}
            <br></br>
            <Link to="/home"><button style={styles.button}>VIEW</button></Link>
            <br></br><br></br>
          </div>
        </div>
      ))}
    </div>
      </>
  );
}
export default Advisor;