import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchFrontendDetails = createAsyncThunk(
  'frontend/fetchDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/settings/fetch-frontend-details');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFrontendDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFrontendDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFrontendDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default footerSlice.reducer;
