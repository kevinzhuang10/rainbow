import { connect } from 'react-redux';
import VendorList from '../components/VendorList';

const mapStateToProps = state => {
  return {
    vendors: state.vendors
  };
};

export default connect(mapStateToProps)(VendorList);
