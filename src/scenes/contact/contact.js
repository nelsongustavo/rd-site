import React, { Component } from 'react';
import Form from './_/form';
import Layout from '../../shared';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Layout>
          <h2>Welcome to Contact</h2>
        </Layout>
        <Form />
      </div>
    );
  }
}

export default Contact;
