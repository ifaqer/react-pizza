import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        categoryId: 0,
        sort: {
            sortName: "популярности",
            sortProperty: "rating"
        },
    },
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        }
    }    
})

export default filterSlice.reducer
export const { setCategoryId, setSort } = filterSlice.actions