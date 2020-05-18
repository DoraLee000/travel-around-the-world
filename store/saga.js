/* global fetch */

import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";

import { actionTypes, failure, loadDataSuccess, tickClock } from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* loadDataSaga() {
  const data = { test: true };
  yield put(loadDataSuccess(data));
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ]);
}

export default rootSaga;
