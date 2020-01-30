import produce from 'immer';

export default function detail(state = [], action) {
  switch (action.type) {
    case 'JOB_SCHEDULE': {
      return produce(state, draft => {
        draft.detail = action.payload;
      });
    }
    default:
      return state;
  }
}
