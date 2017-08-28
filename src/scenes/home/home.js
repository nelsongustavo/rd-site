import React, { Component } from 'react';
import Layout from '../../shared';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Layout>
          <Jumbotron>
            <Grid>
              <h1>Welcome to Home!</h1>
              <p>
                This is a template for a simple marketing or informational website. It includes a large callout
                called a jumbotron and three supporting pieces of content. Use it as a starting point to create
                something more unique.
              </p>
              <p>
                <Link className="btn btn-primary btn-lg" to="/contact">Subscribe</Link>
              </p>
            </Grid>
          </Jumbotron>
          <Grid>
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

export default Home;
