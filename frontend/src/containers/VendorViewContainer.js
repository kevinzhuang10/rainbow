import { connect } from 'react-redux';
import VendorView from '../components/VendorView';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  console.log('ownprops', ownProps);
  console.log('vendors', state);
  const vendorId = parseInt(ownProps.match.params.id, 10);
  const vendor = _.find(state.vendors, vendor => vendor.id === vendorId);
  return {
    vendor
  };
};

export default connect(mapStateToProps)(VendorView);
