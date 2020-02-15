import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import _ from 'lodash';

class CartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  findItemById(items, id) {
    return _.find(items, item => {
      console.log('ids', item.id, id);
      console.log('types', typeof item.id, typeof id);
      return item.id === Number(id);
    });
  }

  render() {
    const { cart, items } = this.props;
    return (
      <div>
        <ListGroup>
          {_.map(cart, (value, key) => {
            console.log('insdie cart view', value, key);
            let item = this.findItemById(items, key);
            return (
              <CartItem
                {...{
                  item,
                  count: value
                }}
              />
            );
          })}
        </ListGroup>
        <Button>Check Out</Button>
      </div>
    );
  }
}

export default CartView;
