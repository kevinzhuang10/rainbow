import React from 'react';

class VendorCard extends React.Component {
    render() {
        const {vendor} = this.props;
        return (
            <div>
                <img {...{
                    src: vendor.image,
                    alt: vendor.name
                }}/>
                <div>{vendor.name}</div>
                <div>{vendor.description}</div>
            </div>
        )
    }
}

export default VendorCard;