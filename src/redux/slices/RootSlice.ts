import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        litres: "Litres",
        country: "Country",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseLitres: (state, action) => { state.litres = action.payload},
        chooseCountry: (state, action) => { state.country = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseLitres, chooseCountry} = rootSlice.actions