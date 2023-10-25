// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  fetchStatus: 'idle',
  fetchError: null,
  addProductStatus: 'idle',
  addProductError: null,
  deleteProductStatus: 'idle',
  deleteProductError: null,
  sitesStatus: 'idle',
  sitesStatusError: null
};


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:8000/api/products');
  return response.data;
});

export const addProduct = createAsyncThunk('data/addProduct', async (newData) => {
  const response = await axios.post(`http://localhost:8000/api/products`, newData);
  return response.data;
});

export const deleteProduct = createAsyncThunk('data/deleteProduct', async (id) => {
  const response = await axios.delete(`http://localhost:8000/api/products/${id}`);
  return response.data;
});
export const getSites = createAsyncThunk('data/sites', async () => {
  const response = await axios.get(`http://localhost:8000/api/sites/site-1/configuration`);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, (state) => {
      state.fetchStatus = 'loading';
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.fetchStatus = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.fetchStatus = 'failed';
      state.fetchError = action.error.message;
    })

    .addCase(addProduct.pending, (state) => {
      state.addProductStatus = 'loading';
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.addProductStatus = 'succeeded';
      state.items.push(action.payload);
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.addProductStatus = 'failed';
      state.addProductError = action.error.message;
    })

    .addCase(deleteProduct.pending, (state) => {
      state.deleteProductStatus = 'loading';
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.deleteProductStatus = 'succeeded';
      // NOTE: The following line might be wrong as we're adding a payload after deleting.
      // You probably want to remove an item from `state.items` here instead.
      state.items.push(action.payload); 
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.deleteProductStatus = 'failed';
      state.deleteProductError = action.error.message;
    })
    .addCase(getSites.fulfilled, (state, action) => {
      state.sitesStatus = 'succeeded';
      state.sitesStatus = action.payload;
    });
  },
});

export default dataSlice.reducer;
