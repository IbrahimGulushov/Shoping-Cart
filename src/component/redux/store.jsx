import { configureStore } from '@reduxjs/toolkit'
import Category from '../redux/categorySlice'
import Cart from '../redux/cart'

const store = configureStore({
    reducer:{
        Category,
        Cart  
    },
    
})

export default store