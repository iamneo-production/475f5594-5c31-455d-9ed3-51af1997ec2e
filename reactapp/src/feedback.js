import React, { useState } from 'react';


function Feedback(){



  return (
    <div className="bg">
      <div className="background">
        <div className="a" />
      </div>
      <form >
        <h3>Feedback form</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
       
          required
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="name"
          id="name"

          required
        />
        <label htmlFor="feedback">Feedback</label>
        <input
          type="text"
          placeholder="feedback"
          id="feedback"
          required
        />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
        
        
      </form>
    </div>
  );
}



export default Feedback;