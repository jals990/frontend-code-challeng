export function detail(job) {
  return {
    type: '@job/JOB_SCHEDULE',
    detail: job,
  };
}
