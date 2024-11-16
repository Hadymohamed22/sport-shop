import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { itemsNum: 0, items: [] },
    reducers: {
        addInCart: (state, action) => {
            state.items.push(action.payload)
            state.itemsNum = state.items.length
        },
        incrementInCart: (state) => {
            state.itemsNum += 1
        },
        decrementInCart: (state) => {
            state.itemsNum -= 1
        },
        removeFromCart: (state, action) => {
            let index = state.items.findIndex(item => item.name === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1)
                state.itemsNum = state.items.length
            }
        }
    }
})

export const { decrementInCart, incrementInCart, addInCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer