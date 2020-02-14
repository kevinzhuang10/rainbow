import React from 'react';
import { Jumbotron, ListGroup } from 'react-bootstrap';
import ItemListItem from './ItemListItem';

class VendorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // dispatch action here for FetchVendorItems
    this.props.fetchVendorItems(this.props.vendor.id);
  }

  render() {
    const { vendor, items } = this.props;
    return (
      <div>
        <Jumbotron>{vendor.name}</Jumbotron>
        {items.map(item => {
          return (
            <ItemListItem
              {...{
                item
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default VendorView;
