import { combineReducers } from 'redux';

import jobs from './jobs/reducer';
import detail from './detail/reducer';
import schedule from './schedule/reducer';

export default combineReducers({
  jobs,
  detail,
  schedule,
});
