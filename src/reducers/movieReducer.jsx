import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {instance} from "./../constants/axios"
export const fetchMovies = createAsyncThunk(
  'getPopulerMovies',
  async () => {
    const response = await instance.get('/movie/populer');
    return response.data;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessage = '';
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default movieSlice.reducer;
