import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class VendorView extends React.Component {
  render() {
    const { vendor } = this.props;
    return <Jumbotron>{vendor.name}</Jumbotron>;
  }
}

export default VendorView;
