export default function job(state = [], action) {
  switch (action.type) {
    case '@jobs/JOBS_REQUEST': {
      return action.job;
    }
    default:
      return state;
  }
}
