import {configureStore} from '@reduxjs/toolkit';
import robotsReducer from './slice/robots';

const store = configureStore({
  reducer: {
    robot: robotsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
