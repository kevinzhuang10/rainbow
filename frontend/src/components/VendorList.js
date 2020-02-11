import React from 'react';
import VendorListItem from './VendorListItem';
import { ListGroup } from 'react-bootstrap';

const VendorList = ({ vendors }) => {
  return (
    <ListGroup>
      {vendors.map((vendor, index) => (
        <VendorListItem
          {...{
            key: index,
            vendor
          }}
        />
      ))}
    </ListGroup>
  );
};

export default VendorList;
