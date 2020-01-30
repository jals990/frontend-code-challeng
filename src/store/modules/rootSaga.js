import { all } from 'redux-saga/effects';

import { detailJob } from './detail/sagas';
import { jobs } from './jobs/sagas';
import { schedule } from './schedule/sagas';

export default function* rootSaga() {
  return yield all([jobs, detailJob, schedule]);
}
