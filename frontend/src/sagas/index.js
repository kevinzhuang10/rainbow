import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_VENDOR_ITEMS,
  ITEMS_RECEIVED,
  ITEMS_FETCH_FAILED
} from '../constants/ActionTypes';
import axios from 'axios';

// export function* fetchToDoList() {
//   const endpoint =
//     'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
//   const response = yield call(fetch, endpoint);
//   const data = yield response.json();
//   yield put({ type: RENDER_TODO_LIST, toDoList: data });
// }

// export function* loadToDoList() {
//   yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
// }

export function* fetchVendorItems(action) {
  const vendorId = action.id;
  // TODO fetch all items for a given vendor id
  try {
    const items = yield call(axios.get, `/api/items`);
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
