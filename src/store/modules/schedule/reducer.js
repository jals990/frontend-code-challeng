const INITIAL_STATE = [];

export default function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SCHEDULE':
      return [...state, action.job];
    default:
      return state;
  }
}
