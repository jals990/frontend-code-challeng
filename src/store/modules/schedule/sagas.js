import { takeLatest, all } from 'redux-saga/effects';

import history from '../../../services/history';

export function* schedule() {
  yield history.push('/schedule');
}

export default all([takeLatest('@schedule/SCHEDULE_REQUEST', schedule)]);
