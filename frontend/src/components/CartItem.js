import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const CartItem = ({ count, item }) => {
  const totalPrice = count * parseFloat(item.price);
  return (
    <ListGroupItem>
      <span>{count}</span>
      <span>{item.name}</span>
      <span>{totalPrice}</span>
    </ListGroupItem>
  );
};

export default CartItem;
