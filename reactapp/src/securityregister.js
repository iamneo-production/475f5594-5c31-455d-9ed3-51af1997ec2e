import React, { useState } from 'react';
// import './styles/TeacherRegister.css';
// import { useDispatch } from 'react-redux';
// import { login } from '../user';
// import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AdvisorRegister() {
  // const [pname, setPname] = useState('');
  // const dispatch = useDispatch();


  // const handleChange = (e) => {
  //   setPname(e.target.value);
  // } 
  const navigate = useNavigate();
  const [name,setName]=useState('');
 
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState('');
  
  const [password,setPassword]=useState('');
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const responce=await axios.post('http://localhost:8181/api/v1/auth/register',{name,email,contact,password});
      if(responce.status==200){
        navigate('/');
        setName('');
        
        setContact('');
        
        setPassword('');
        setEmail('');
      }
    }
    catch(error){
      console.error("Error: " ,error);
    }
  }
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Student Registration</h2>
        <form className='form__body'>
          <div className="group">
            <label htmlFor="firstName">Name</label>
            <input className="form__control" type="text" value={name}  onChange={(e) => setName(e.target.value)} id="firstName" placeholder=""/>
          </div>
          
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password" >Contact</label>
              <input type="text" id="exp" className="form-control" placeholder="Enter your password"value={contact}  onChange={(e) => setContact(e.target.value)}/>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="text" id="exp" className="form-control"  placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>


          <button href="/"type="submit" className="btn-primary1" onClick={handleSubmit}>
            Register
          </button>
   
        </form>
      </div>
    </div>
  );
}

export default AdvisorRegister;