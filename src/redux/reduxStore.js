import { configureStore } from "@reduxjs/toolkit"
import evaluateSlice from "./evaluateSlice"

const store = configureStore({
    reducer: {
        expressionReducer: evaluateSlice
    }
})

export default store