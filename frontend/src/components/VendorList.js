import React from 'react';
import VendorListItem from './VendorListItem';
import { ListGroup } from 'react-bootstrap';

const VendorList = ({ vendors, selectVendor }) => {
  return (
    <ListGroup>
      {vendors.map((vendor, index) => (
        <VendorListItem
          {...{
            key: index,
            vendor,
            selectVendor
          }}
        />
      ))}
    </ListGroup>
  );
};

export default VendorList;
