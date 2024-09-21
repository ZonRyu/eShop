import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const itemIndex = state.products.find((item) => item.id === newItem.id)
            if(itemIndex) {
                state.quantity += 1
                state.totalPrice += newItem.price
            } else {
                state.products.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity += 1
        },
        removeFromCart(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if (findItem){
                state.totalPrice -= findItem.price
                state.totalQuantity -= 1
                state.products = state.products.filter(item => item.id !== id)
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if (findItem) {
                findItem.quantity += 1
                findItem.totalPrice += findItem.price
                state.totalQuantity += 1
                state.totalPrice += findItem.price
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if (findItem.quantity > 1) {
                if (findItem) {
                    findItem.quantity -= 1
                    findItem.totalPrice -= findItem.price
                    state.totalQuantity -= 1
                    state.totalPrice -= findItem.price
                }
            } else {
                alert("Quantity cannot be less than 1")
            }
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer