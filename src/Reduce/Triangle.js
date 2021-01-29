import React, { useReducer } from 'react'
import { difference } from "./DifferentTriangle"
import '../Triangle.css'

const initialState = {
    a: "",
    b: "",
    c: "",
    angle: "",
    clicked: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "A":
            return {
                ...state,
                a: action.value
            }
        case "B":
            return {
                ...state,
                b: action.value
            }
        case "C":
            return {
                ...state,
                c: action.value
            }
        case "ANGLE":
            return {
                ...state,
                angle: action.value
            }
        case "SUBMIT":
            return {
                ...state,
                clicked: true
            }

        case "RESET":
            return initialState
        default:
            return state
    }
}

const Triangle = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const sizer = difference(state.a, state.b, state.c)
    console.log(sizer);
    const styles = {
        borderTop: `${sizer.d}px solid transparent`,
        borderRight: `${sizer.c}px solid transparent`,
        borderLeft: `${sizer.b}px solid transparent`,
        borderBottom: `${sizer.a}px solid red`,

    }
    return (
        <div className="ui container">
            {/* <h1>{JSON.stringify(state)}</h1> */}
            <form className="ui form" onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: "SUBMIT" })
            }}>"
                <div className="ui green segment" style={{ width: "30%", margin: "auto" }}>
                    <label className="ui purple label">Side A</label>
                    <input
                        required
                        min="1"
                        max="100"
                        className="ui input"
                        type="number"
                        value={state.a}
                        onChange={(e) => dispatch({ type: "A", value: e.target.value })}
                    />
                    <label className="ui purple label">Side B</label>
                    <input
                        required
                        min="1"
                        max="100"
                        className="ui input"
                        type="number"
                        value={state.b}
                        onChange={(e) => dispatch({ type: "B", value: e.target.value })}
                    />
                    <label className="ui purple label center">Side C</label>
                    <input
                        required
                        min="1"
                        max="100"
                        className="ui input"
                        type="number"
                        value={state.c}
                        onChange={(e) => dispatch({ type: "C", value: e.target.value })}
                    />
                    <label className="ui purple label center">Angle</label>
                    <input
                        required
                        min="1"
                        max="90"
                        className="ui input"
                        type="number"
                        value={state.angle}
                        onChange={(e) => dispatch({ type: "ANGLE", value: e.target.value })}
                    />

                    <div class="ui two bottom  buttons" style={{ marginTop: "1rem" }}>
                        <button type="submit" className="ui button teal">Submit</button>
                        <button type="reset" className="ui inverted red button" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                    </div>
                </div>
            </form>
            {
                state.clicked
                && <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <h3>Angle: {1 / 2 * Number(state.a * state.b) * Math.cos(state.angle * Math.PI)}sm<sup>2</sup> </h3>
                    <h3>Perimetr: {(Number(state.a) + Number(state.b)) + Number(state.c) * 2}sm</h3>
                </div>
            }
            <div className="triangle-shape" style={styles}></div>
        </div>
    )
}

export default Triangle
