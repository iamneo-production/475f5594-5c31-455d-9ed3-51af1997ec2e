import React, { useState } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import SidePanel from './sidepanel';
import './sidepanel.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  
    const handleChange = (event) => {
      handleSearch(event.target.value);
    };
  

  return (
    <>
      <div id="menu" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <ul>
          <li>
            <a className='dd' href="/home/about">About</a>
          </li>
         
          <li>
            <a className='dd' href="/home/advisors">Advisors</a>
          </li>
          <li>
            <a className='dd'href="/home/feedback">Feedback</a>
          </li>
        </ul>
      </div>

      <div id="main">...</div>

      <div className="topnav">

        <ul>
       
        <li className='menu'>
          {/* <span onClick={openNav}>&#9776</span> */}
          <button className="openbtn" onClick={openNav}>☰</button>
        </li>
        
          <li>
          <Link to="./profile"><a>Profile</a></Link>
          </li>
          {/* <li>
            <Link to="./request"><a>Request</a></Link>
          </li> */}
          <li>
          <Link to="./"><a>Home</a></Link>
          </li>
        <div className="search">
        {/* <input href='/search' type="search" placeholder="Search.."  onChange={handleChange}/>
        <button className='sea'></button>
        <div class="search"> */}
                     
            <form className= "sear" action="/home/search">
                <input type="text"
                    placeholder="Search"
                    name="search"
                   
                    />
              
            </form>
        {/* </div> */}
        
        </div>
        </ul>
      </div>
    
    </>
  );
};

export default Navbar;

