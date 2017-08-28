import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default () => {
  return (
    <Navbar inverse className="header">
      <div className="container">
        <ul className="nav navbar-nav">
          <li id="home" className="nav-item"><Link to="/">Home</Link></li>
          <li id="price" className="nav-item"><Link to="/price">Price</Link></li>
          <li id="contact" className="nav-item"><Link to="/contact">Contact</Link></li>
          <li id="about" className="nav-item"><Link to="/about">About</Link></li>
        </ul>
      </div>
   </Navbar>
  );
}
