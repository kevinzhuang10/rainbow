import { ADD_ITEM_TO_CART } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const itemId = action.id;
      return {
        ...state,
        [itemId]: _.get(state, itemId, 0) + 1
      };
    default:
      return state;
  }
};

export default cart;
