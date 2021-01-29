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
        default:
            return state
    }

}


const Radius = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const circle = distance(state.radius)
    const size = sizer(state.radius)

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="ui segment">
                <form
                    className="ui form"
                    onSubmit={(e) => {
                        e.preventDefault()
                        dispatch({ type: "submit" })
                    }}
                >
                    <input
                        className="ui input"
                        min="1"
                        max="100"
                        type="number"
                        value={state.radius}
                        onChange={(e) => !state.clicked && dispatch({ type: "RADIUS", value: e.target.value >= 100 ? 100 : e.target.value })}
                    />
                    <button type="submit" className="ui button primary">Submit</button>
                </form>
            </div>
            {/* <div className="radius" style={{width: "100px", height: "100px", backgroundColor: "green"}}></div> */}
            {
                state.clicked

                    ? <div>
                        <div style={{ width: `${state.radius * circle.value}px`, height: `${state.radius * circle.value}px`, backgroundColor: "red", borderRadius: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left" }}>
                            <div style={{ width: "50%", height: "auto" }}>
                                <p style={{ borderBottom: "1px solid", textAlign: "center" }}>{size}{circle.name}</p>
                            </div>
                        </div>
                    </div>
                    : <h1>Please enter</h1>
            }
            {
                state.clicked
                && <div>
                    <h1>Radius: {state.radius} sm</h1>
                    <h1>CIrcle surface: {Math.floor(Math.PI * (Number(state.radius) * Number(state.radius)))} sm <sup>2</sup> </h1>
                    <h1>Circle primetr: {Math.floor(2 * Math.PI * Number(state.radius))} </h1>
                </div>
            }

        </div >
    )
}

export default Radius