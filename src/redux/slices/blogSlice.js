import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchBlogDetails = createAsyncThunk(
  'blog/fetchDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/blog');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
