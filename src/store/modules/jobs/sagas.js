import { takeLatest, all, put } from 'redux-saga/effects';

import { storeJobs } from './actions';

export function* jobs(job) {
  yield put(storeJobs(job));
}

export default all([takeLatest('@jobs/JOBS_REQUEST', jobs)]);
