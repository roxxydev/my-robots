import {configureStore} from '@reduxjs/toolkit';
import robotsReducer from './slice/robotSlice';
import modalReducer from './slice/modalSlice';

const store = configureStore({
  reducer: {
    robot: robotsReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
