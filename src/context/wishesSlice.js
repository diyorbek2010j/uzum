import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
    name: "wishes",
    initialState: {
        value: []
    },
    reducers: {
        addToWishes(state, action){
            state.value = [...state.value, action.payload]
        }
    }  
})

export const {addToWishes} = wishesSlice.actions
export default wishesSlice.reducer