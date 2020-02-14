import { ITEMS_RECEIVED } from '../constants/ActionTypes';

const initialState = [];

const items = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_RECEIVED:
      return action.items;
    default:
      return state;
  }
};

export default items;
