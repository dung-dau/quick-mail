import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';
import starredReducer from '../features/starredSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    starred: starredReducer,
  },
});
