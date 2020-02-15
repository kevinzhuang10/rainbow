import { connect } from 'react-redux';
import CartView from '../components/CartView';
import _ from 'lodash';

const mapStateToProps = (state) => {
  const cart = state.cart;
  const items = state.items;
  return {
    cart,
    items
  };
};

export default connect(mapStateToProps)(CartView);
