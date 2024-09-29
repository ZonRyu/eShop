import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Checkout from "../pages/Checkout";

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
                itemIndex.quantity += newItem.quantity
            } else {
                state.products.push({
                    ...newItem,
                })
            }
            state.totalPrice += newItem.price * newItem.quantity
            state.totalQuantity += newItem.quantity
            toast.success(`${ newItem.quantity > 1 ? `Products` : `Product`} added to cart!`)
        },
        removeFromCart(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if (findItem){
                state.totalPrice -= findItem.price
                state.totalQuantity -= 1
                state.products = state.products.filter(item => item.id !== id)
                toast.success('Product removed from cart!')
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
                toast.error('Quantity cannot be less than 1!')
            }
        },
        checkout(state) {
            state.products = []
            state.totalQuantity = 0
            state.totalPrice = 0
            toast.success('Order placed successfully!')
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout} = cartSlice.actions

export default cartSlice.reducer