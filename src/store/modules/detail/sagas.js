import { takeLatest, all, put } from 'redux-saga/effects';
import history from '../../../services/history';
import { detail } from './actions';

export function* detailJob(job) {
  yield put(detail(job));
  history.push('/detail');
}

export default all([takeLatest('@job/JOB_SCHEDULE', detailJob)]);
