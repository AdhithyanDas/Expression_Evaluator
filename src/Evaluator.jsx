import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { evaluateExpression, reset } from "./redux/evaluateSlice"

function Evaluator() {
    const exp = useSelector((state) => state.expressionReducer.result)
    console.log(exp)

    const dispatch = useDispatch()
    const [expression, setExpression] = useState("")

    return (

        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className='shadow p-4 w-75'>
                    <h3 className='text-center text-info fw-bold'>Calculator</h3>
                    <div className='my-3 d-flex justify-content-around'>
                        <input type="text" className='form-control' placeholder='Enter an Expression' value={expression} onChange={(e) => setExpression(e.target.value)} />
                    </div>
                    <h3 className='text-center text-dark'></h3>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger me-3' onClick={() => dispatch(evaluateExpression(expression))}>Calculate</button>
                        <button className='btn btn-primary me-3' onClick={() => { dispatch(reset()); setExpression("") }}>Clear</button>
                    </div>
                    <h4 className="text-center mt-3 text-success fw-bold">Result = {exp}</h4>
                </div>
            </div>
        </>
    )
}

export default Evaluator