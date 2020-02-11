import { combineReducers } from 'redux';
import vendors from './vendors';
import items from './items';
import cart from './cart';

export default combineReducers({
  vendors,
  items,
  cart
});
