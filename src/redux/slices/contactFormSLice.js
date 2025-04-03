// src/redux/slices/contactFormSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

const initialState: any = {
  data: null,
  loading: false,
  error: null,
};

export const fetchContactForm = createAsyncThunk(
  'contactForm/fetchDetails',
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/contact/send', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactFormSlice.reducer;
