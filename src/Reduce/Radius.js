import React, { useReducer } from 'react'
import { distance } from './FuncSmDm'
import { sizer } from './Sizer'


const initialState = {
    radius: "",
    clicked: false
}


const reducer = (state, action) => {
    switch (action.type) {
        case "RADIUS":
            return { ...state, radius: Number(action.value) }
        case "submit":
            return { ...state, clicked: true }
        case "RESET":
            return initialState
        default:
            return state
    }

}


const Radius = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const circle = distance(state.radius)
    const size = sizer(state.radius)

    return (
        <div className="ui container">

            <form
                className="ui form"
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch({ type: "submit" })
                }}
            >
                <div className="ui yellow segment" style={{ width: "30%", margin: "auto" }}>
                    <label className="ui purple label center">Radius</label>
                    <input
                        className="ui input"
                        min="1"
                        max="100"
                        type="number"
                        value={state.radius}
                        onChange={(e) => !state.clicked && dispatch({ type: "RADIUS", value: e.target.value >= 100 ? 100 : e.target.value })}
                    />
                    <div class="ui two bottom  buttons" style={{ marginTop: "1rem" }}>
                        <button type="submit" className="ui button primary">Submit</button>
                        <button type="reset" className="ui inverted red button" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                    </div>
                </div>
            </form>
            {
                state.clicked
                && <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <h3>Radius: {state.radius} sm</h3>
                    <h3>CIrcle surface: {Math.floor(Math.PI * (Number(state.radius) * Number(state.radius)))} sm <sup>2</sup> </h3>
                    <h3>Circle primetr: {Math.floor(2 * Math.PI * Number(state.radius))} </h3>
                </div>
            }

            {
                state.clicked

                && <div style={{ display: "flex", justifyContent: "center" }}>

                    <div style={{ width: `${state.radius * circle.value}px`, height: `${state.radius * circle.value}px`, backgroundColor: "red", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", transition: "all 0.7s ease" }}>
                        <div style={{ width: "50%", height: "auto" }}>
                            <p style={{ borderBottom: "1px solid", textAlign: "center" }}>{size}{circle.name}</p>
                        </div>
                    </div>
                </div>

            }


        </div >
    )
}

export default Radius