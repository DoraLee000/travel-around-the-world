/* global fetch */
import { all, call, put, select, take, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { actionTypes, loadDataSuccess } from './actions';
// import { count } from './reducer';

// 測試呼叫外部API開始
const settings = {
  headers: {
    Accept: 'application/json',
  },
};

function* loadDataSaga() {
  let pageNum = yield select(state => state.count);
  const res = yield fetch(
    `https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${pageNum}`,
    settings
  );
  const data = yield res.json();
  yield put(loadDataSuccess(data));
}

// 測試呼叫外部API結束

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
