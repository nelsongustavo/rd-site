import React, { Component } from 'react';
import Form from './_/form';
import Layout from '../../shared';
import { Grid } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Layout>
          <Grid>
            <h1>Contact</h1>
            <Form />
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default Contact;
