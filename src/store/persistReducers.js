import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'levee',
      storage,
      whitelist: ['jobs', 'detail', 'schedule'],
    },
    reducers
  );

  return persistedReducer;
};
