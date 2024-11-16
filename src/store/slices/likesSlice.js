import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
    name: "likesSlice",
    initialState: { itemsNum: 0, items: [] },
    reducers: {
        addLike: (state, action) => {
            state.items.push(action.payload)
            state.itemsNum = state.items.length
        },
        incrementLike: (state) => {
            state.itemsNum += 1
        },
        decrementLike: (state) => {
            state.itemsNum -= 1
        },
        removeLike: (state, action) => {
            let index = state.items.findIndex(item => item.name === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1)
                state.itemsNum = state.items.length
            }
        }
    }
})

export const { incrementLike, decrementLike, addLike, removeLike } = likesSlice.actions

export default likesSlice.reducer