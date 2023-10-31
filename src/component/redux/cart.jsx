import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart:[],
    loading:false,
    totalAmount:0
    
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action) => {
            const {id,title,description,image,quantity,price} = action.payload;

           

            const findCart = state.cart.find((item) => item.id === id)

            if(findCart){
                findCart.quantity += quantity
            } else {
                const newCartItem = {
                    id,
                    title,
                    description,
                    image,
                    quantity,
                    price
                }
                state.cart.push(newCartItem)
               

            }
        },
        removeCart:(state,action) => {
            const {id} = action.payload
            state.cart = state.cart.filter((item) => item.id !== id)
        },
        updateQuantity:(state,action) => {
            const {id,quantity} = action.payload;

            const findItem = state.cart.find((item) => item.id === id)
            if(findItem){
                findItem.quantity = quantity
            }
        },
        totalAmountt:(state) => {
            state.totalAmount = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
        }
    }
})


export const { addCart,removeCart,updateQuantity,totalAmountt } = cartSlice.actions;

export default cartSlice.reducer;