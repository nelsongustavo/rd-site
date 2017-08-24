import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default () => {
  return (
    <Navbar inverse className="header">
      <div className="container">
        <ul className="nav navbar-nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/price">Price</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
   </Navbar>
  );
}
