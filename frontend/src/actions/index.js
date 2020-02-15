import { FETCH_VENDOR_ITEMS, ADD_ITEM_TO_CART } from '../constants/ActionTypes';

export const fetchVendorItems = id =>({
  type: FETCH_VENDOR_ITEMS,
  id
})

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CART,
  id
})
