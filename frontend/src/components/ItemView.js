import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { item, addItemToCart } = this.props;
    return (
      <div>
        <Jumbotron>{item.name}</Jumbotron>
        <Link to={`/vendors/${item.vendor_id}`}>
          <Button
            {...{
              variant: 'primary',
              onClick: () => addItemToCart(item.id)
            }}
          >
            Add To Cart
          </Button>
        </Link>
      </div>
    );
  }
}

export default ItemView;
