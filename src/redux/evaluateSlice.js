import { createSlice } from "@reduxjs/toolkit"

const expressionSlice = createSlice({
    name: "expression",
    initialState: {
        result: 0,
    },
    reducers: {
        evaluateExpression(state, action) {
            state.result = eval(action.payload)
        },
        reset(state) {
            state.result = 0
        },
    }

})

export default expressionSlice.reducer
export const { evaluateExpression, reset } = expressionSlice.actions