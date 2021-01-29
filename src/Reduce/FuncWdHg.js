import React, { useReducer } from 'react'
import '../Main.css'
import { distance } from './FuncSmDm'
import { sizer } from './Sizer'

const initialState = {
    x: "",
    y: "",
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "WIDTH":
            console.log("WIDHT");
            return {
                ...state, x: action.value
            }
        case "HEIGHT":
            console.log("HEIGHT");
            return {
                ...state, y: action.value
            }
        case "SUBMIT":
            console.log("SUBMIT");
            return {
                ...state, clicked: true
            }
        case "RESET":
            console.log("RESET");
            return initialState
        default:
            return state
    }
}

const FuncWdHg = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const detailX = distance(state.x)
    const detailY = distance(state.y)

    const SizeX = sizer(state.x)
    const SizeY = sizer(state.y)
    console.log(SizeX, SizeY);
    return (
        <div className="ui segment">
            <form 
            className="ui form"
            onSubmit={
                e => {
                    e.preventDefault()
                    dispatch({ type: "SUBMIT" })
                }
            }>
                <input 
                className="ui input"
                type="number"
                    placeholder="Width"
                    value={state.x}
                    onChange={(e) => !state.clicked && dispatch({ type: "WIDTH", value: e.target.value })}
                />
                <input 
                className="ui input"
                type="number"
                    placeholder="Hight"
                    value={state.y}
                    onChange={(e) => !state.clicked && dispatch({ type: "HEIGHT", value: e.target.value })}
                />
                <button 
                className="ui button"
                type="submit">Submit</button>
            </form>
            <button 
                className="ui button"
            type="reset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            {
                state.clicked
                    ? <div>
                        <h1>{state.x}sm</h1>
                        <h1>{state.y}sm</h1>
                    </div>
                    : <h1>Please enter width and height</h1>
            }
            <div className='square' style={{ width: `${state.x * detailX.value + 1}px`, height: `${state.y * detailY.value + 1}px` }}>
                <h5>{SizeX}{detailX.name}</h5>
                <div>
                    <h5>{SizeX}{detailX.name} </h5>
                    <h5>{SizeY}{detailY.name} </h5>
                </div>
                <h5>{SizeY}{detailY.name}</h5>
            </div>
            {
                state.clicked
                && <div>
                    <h1>Yuza(Surface): {state.x * state.y}sm<sup>2</sup> </h1>
                    <h1>Cheti(Perimetr): {(Number(state.x) + Number(state.y)) * 2}sm</h1>
                </div>
            }
        </div>
    )
}

export default FuncWdHg

//Surface yuza a*b

//Perimetr cheti (a+b)*2

// Yuza dumaloq s = pr2 

// uzunligi 2pr