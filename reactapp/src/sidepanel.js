import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './sidepanel.css';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <button className='b'><span onClick={openNav}>Open</span></button>

      <div id="main">...</div>
    </>
  );
};

export default SidePanel;