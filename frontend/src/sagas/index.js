import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_VENDOR_ITEMS,
  ITEMS_RECEIVED,
  ITEMS_FETCH_FAILED
} from '../constants/ActionTypes';
import axios from 'axios';

export function* fetchVendorItems(action) {
  const vendorId = action.id;
  try {
    const items = yield call(axios.get, `/api/items?vendorId=${vendorId}`);
    yield put({ type: ITEMS_RECEIVED, items: items.data });
  } catch (error) {
    yield put({ type: ITEMS_FETCH_FAILED, error });
  }
}

export function* watchFetchVendorItems() {
  yield takeEvery(FETCH_VENDOR_ITEMS, fetchVendorItems);
}

export default function* rootSaga() {
  yield all([watchFetchVendorItems()]);
}
