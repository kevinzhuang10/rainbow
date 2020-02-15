import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VendorListContainer from './containers/VendorListContainer';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import VendorViewContainer from './containers/VendorViewContainer';
import ItemViewContainer from './containers/ItemViewContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Rainbow</h1>
            <Navigation />
            <Route exact path="/" component={VendorListContainer} />
            <Route path="/vendors/:id" component={VendorViewContainer} />
            <Route path="/items/:id" component={ItemViewContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
