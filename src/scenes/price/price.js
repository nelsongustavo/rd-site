import React, { Component } from 'react';
import Layout from '../../shared';
import { Grid, Row, Col } from 'react-bootstrap';

class Price extends Component {
  render() {
    return (
      <div className="price">
        <Layout>
          <Grid>
            <h1>Pricing</h1>
            <Row>
               <Col md={4}>
                 <h2>Heading</h2>
                 <p>
                   Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                   tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                   mollis euismod. Donec sed odio dui.
                 </p>
               </Col>
               <Col md={4}>
                 <h2>Heading</h2>
                 <p>
                   Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                   tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                   mollis euismod. Donec sed odio dui.
                 </p>
               </Col>
               <Col md={4}>
                 <h2>Heading</h2>
                 <p>
                   Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                   condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
                   Donec sed odio dui.
                 </p>
               </Col>
            </Row>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default Price;
