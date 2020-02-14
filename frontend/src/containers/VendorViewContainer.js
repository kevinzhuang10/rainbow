import { connect } from 'react-redux';
import VendorView from '../components/VendorView';
import { fetchVendorItems } from '../actions';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const vendorId = parseInt(ownProps.match.params.id, 10);
  const vendor = _.find(state.vendors, vendor => vendor.id === vendorId);
  const items = state.items;
  return {
    vendor,
    items
  };
};

const actionCreators = {
  fetchVendorItems
};

export default connect(mapStateToProps, actionCreators)(VendorView);
