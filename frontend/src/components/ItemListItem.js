import React from 'react';
import { ListGroupItem, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemListItem = ({ item }) => {
  return (
    <ListGroupItem>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Link to={`/items/${item.id}`}>
          <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
};

export default ItemListItem;
