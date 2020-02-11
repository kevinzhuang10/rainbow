import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class VendorView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        // dispatch action here for FetchVendorItems
    }

  render() {
    const { vendor } = this.props;
    return <Jumbotron>{vendor.name}</Jumbotron>;
  }
}

export default VendorView;
