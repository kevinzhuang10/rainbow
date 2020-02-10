import React from 'react';
import './VendorCard.css';

class VendorCard extends React.Component {
  render() {
    // const { vendor } = this.props;
    return (
      <div>
        {/* <Card className="vendor-card">
          <CardImg top width="100%" src={vendor.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{vendor.name}</CardTitle>
            <CardText>{vendor.description}</CardText>
            <Button>Order</Button>
            <CardLink className="card-link" href={vendor.link}>
              {vendor.link}
            </CardLink>
          </CardBody>
        </Card> */}
      </div>
    );
  }
}

export default VendorCard;
