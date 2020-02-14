import { SELECT_VENDOR, FETCH_VENDOR_ITEMS } from '../constants/ActionTypes';

export const selectVendor = id => ({
  type: SELECT_VENDOR,
  id
});

export const fetchVendorItems = id =>({
  type: FETCH_VENDOR_ITEMS,
  id
})
