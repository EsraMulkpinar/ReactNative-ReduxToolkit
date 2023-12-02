import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';
<<<<<<< HEAD:src/store/store.jsx
import movieReducer from '../reducers/movieReducer';
=======
import authReducer from '../reducers/authReducer';
>>>>>>> a2ef67b7147b9748151449b836c2a746abb14716:src/store/store.js

export const store = configureStore({
    reducer: {
      counter: counterReducer,
<<<<<<< HEAD:src/store/store.jsx
      movies:movieReducer
=======
      users:authReducer
>>>>>>> a2ef67b7147b9748151449b836c2a746abb14716:src/store/store.js
    },
  })