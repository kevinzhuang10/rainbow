import React from 'react';
import { ListGroupItem, Card, Button } from 'react-bootstrap';

const ItemListItem = ({ item }) => {
  return (
    <ListGroupItem>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
};

export default ItemListItem;
