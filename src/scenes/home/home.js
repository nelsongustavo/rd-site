import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Home</h2>
        <ul>
          <li><Link to="/price">Price</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
