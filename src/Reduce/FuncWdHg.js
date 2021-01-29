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
        <div className="ui container">
            <form
                className="ui form"
                onSubmit={
                    e => {
                        e.preventDefault()
                        dispatch({ type: "SUBMIT" })
                    }
                }>
                <div className="ui blue segment" style={{ width: "30%", margin: "auto" }}>
                    <label className="ui purple label">Width</label>
                    <input
                        className="ui input"
                        type="number"
                        value={state.x}
                        onChange={(e) => !state.clicked && dispatch({ type: "WIDTH", value: e.target.value })}
                    />
                    <label className="ui purple label">Height</label>
                    <input
                        className="ui input"
                        type="number"
                        value={state.y}
                        onChange={(e) => !state.clicked && dispatch({ type: "HEIGHT", value: e.target.value })}
                    />
                    <div class="ui two bottom attached buttons">
                        <button
                            className="ui button teal"
                            type="submit">Submit</button>
                        <button
                            className="ui inverted red button"
                            type="reset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                    </div>
                </div>
            </form>

            {/* {
                state.clicked
                    && <div>
                        <h1>{state.x}sm</h1>
                        <h1>{state.y}sm</h1>
                    </div>
                    
            } */}
            {
                state.clicked
                && <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <h3>Yuza(Surface): {state.x * state.y}sm<sup>2</sup> </h3>
                    <h3>Cheti(Perimetr): {(Number(state.x) + Number(state.y)) * 2}sm</h3>
                </div>
            }
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='square' style={{ width: `${state.x * detailX.value + 1}px`, height: `${state.y * detailY.value + 1}px` }}>
                    {/* <h5>{SizeX}{detailX.name}</h5>
                    <div>
                        <h5>{SizeX}{detailX.name} </h5>
                        <h5>{SizeY}{detailY.name} </h5>
                    </div>
                    <h5>{SizeY}{detailY.name}</h5> */}
                </div>
            </div>
        </div>
    )
}

export default FuncWdHg

//Surface yuza a*b

//Perimetr cheti (a+b)*2

// Yuza dumaloq s = pr2 

// uzunligi 2pr