export function storeJobs(job) {
  return {
    type: '@jobs/JOBS_REQUEST',
    job,
  };
}
