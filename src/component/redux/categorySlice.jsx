import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    category:[],
    product:[],
    details:[],
    loading:false
}

export const getCategory = createAsyncThunk('categoryler', async() => {
    try {
         const respose = await axios('https://fakestoreapi.com/products/categories');
         const wait =  await respose.data
         return wait   
    } catch (error) {
     
        throw error
    }
})

export const getProduct = createAsyncThunk('productlar', async() => {
    try {
         const respose = await axios('https://fakestoreapi.com/products');
         const wait = await respose.data
         return wait   
    } catch (error) {
     
        throw error
    }
})

export const getAllCategory = createAsyncThunk('productlarAl', async(category) => {
    try {
         const respose = await axios(`https://fakestoreapi.com/products/category/${category}`);
         const wait = await respose.data
         return wait   
    } catch (error) {
     
        throw error
    }
})

export const getAllProducts = createAsyncThunk('getallProducts', async(id) => {
    try {
         const respose = await axios(`https://fakestoreapi.com/products/${id}`);
         const wait = await respose.data
         return wait   
    } catch (error) {
     
        throw error
    }
})

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(getCategory.pending,(state) => {
            state.loading = true
        })
        .addCase(getCategory.fulfilled,(state,action) => {
            state.loading = false
            state.category = action.payload
        })
        .addCase(getProduct.pending,(state) => {
            state.loading = true
        })

        .addCase(getAllCategory.fulfilled,(state,action) => {
            state.loading = false
            state.product = action.payload
        })

        .addCase(getAllCategory.pending,(state) => {
            state.loading = true
        })

        .addCase(getProduct.fulfilled,(state,action) => {
            state.loading = false
            state.product = action.payload
        })
        .addCase(getAllProducts.pending,(state) => {
            state.loading = true
        })

        .addCase(getAllProducts.fulfilled,(state,action) => {
            state.loading = false
            state.details = action.payload
        })
    }
})


export default categorySlice.reducer;