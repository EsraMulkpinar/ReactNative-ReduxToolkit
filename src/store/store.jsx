import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';
import movieReducer from '../reducers/movieReducer';

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      movies:movieReducer
    },
  })