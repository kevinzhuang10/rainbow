import { SELECT_VENDOR } from '../constants/ActionTypes';

export const selectVendor = id => ({
  type: SELECT_VENDOR,
  id
});
