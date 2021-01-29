import React, { useReducer } from 'react'

const initialState = {
    firstName: 0,
    secondName: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Plus':
         return {...state, firstName: state.firstName + action.value}
         case 'Minus':
            return {...state, firstName: state.firstName - action.value}
            case 'Plus2':
                return {...state, secondName: state.secondName + action.value}
                case 'Minus2':
                    return {...state, secondName: state.secondName + action.value}
                    case 'Reset':
                     return initialState
                        default:
                        return state

    }
}

const FuncReduceObject = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1> {state.firstName} </h1>
            <button onClick={() => dispatch({type: "Plus", value: 1})}>+1</button>
            <button onClick={() => dispatch({type: "Minus", value: 1})}>-1</button>
            <button onClick={() => dispatch({type: "Reset", value: 0})}>0</button>
            <h1> {state.secondName} </h1>
            <button onClick={() => dispatch({type: "Plus2", value: 3})}>+1</button>
            <button onClick={() => dispatch({type: "Minus2", value: 5})}>-1</button>
            <button onClick={() => dispatch({type: "Reset", value: 0})}>0</button>
        </div>
    )
}

export default FuncReduceObject


// let person = {firstName: Alex, secondName: Ronaldo, age: 40, hobbi: bascetbool, live: server}