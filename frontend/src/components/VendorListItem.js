import React from 'react';
import { Card, Button, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './VendorCard.css';

const VendorListItem = ({ vendor, selectVendor }) => {
  console.log('vendor', vendor);
  return (
    <ListGroupItem>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={vendor.image} />
        <Card.Body>
          <Card.Title>{vendor.name}</Card.Title>
          <Card.Text>{vendor.description}</Card.Text>
          <Link to={`/vendors/${vendor.id}`}>
            <Button variant="primary">{vendor.name}</Button>
          </Link>
        </Card.Body>
      </Card>
    </ListGroupItem>
  );
};

export default VendorListItem;
