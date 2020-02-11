import { connect } from 'react-redux';
import VendorList from '../components/VendorList';
import { selectVendor } from '../actions';

const mapStateToProps = state => {
  return {
    vendors: state.vendors
  };
};

const actionCreators = {
  selectVendor
};

export default connect(mapStateToProps, actionCreators)(VendorList);
