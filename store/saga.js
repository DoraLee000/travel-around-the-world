/* global fetch */
import { all, call, put, take, takeLatest } from 'redux-saga/effects';

import { actionTypes, loadDataSuccess } from './actions';

function* loadDataSaga() {
  const data = { test: true };
  yield put(loadDataSuccess(data));
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
