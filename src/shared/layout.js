import React from 'react';
import Header from './_/header';
import Footer from './_/footer';
import './layout.css';

export default (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
}
