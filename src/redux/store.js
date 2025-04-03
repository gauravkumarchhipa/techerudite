
import { configureStore } from '@reduxjs/toolkit';
import footerReducer from './slices/footerSlice';
import blogReducer from './slices/blogSlice';
export const store = configureStore({
  reducer: {
    footer: footerReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
