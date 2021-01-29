import React, { useReducer } from 'react'

const initialState = (0)
const reducer = (state, action) => {
    switch (action) {
        case "Plus":
         return state + 1
         case "Minus":
                return state - 1
                case "Reset":
                    return initialState
                default:
                    return state
    }
}

const FuncReduce = () => {
const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick ={() => dispatch("Plus")}>+</button>
            <button onClick ={() => state && dispatch("Minus")}>-</button>
            <button onClick ={() =>dispatch("Reset")}>0</button>
        </div>
    )
}

export default FuncReduce
