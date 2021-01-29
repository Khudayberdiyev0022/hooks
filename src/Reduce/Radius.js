import React, { useReducer } from 'react'

const initialState = {
    radius: 1,
    clicked: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "RADIUS":
            return { ...state, radius: Number(action.value) }
            case "submit":
                return {...state, clicked: true}
        default:
            return state
    }

}

const Radius = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="ui container">
            <form 
            className="ui form" 
            onSubmit={(e)=>{
                e.preventDefault()
                dispatch({type: "submit"})
            }}
             >
                <input
                    type="number"
                    value={state.radius}
                    onChange={(e) => dispatch({ type: "RADIUS", value: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
            {/* <div className="radius" style={{width: "100px", height: "100px", backgroundColor: "green"}}></div> */}
            {
                state.clicked

                ?<div> <h1>{state.radius}sm</h1>
                <div style={{width: `${state.radius}px`, height: `${state.radius}px`, backgroundColor: "red", borderRadius: "50%", position: "relative"}}><span className="span" style={{position: "absolute", backgroundColor: "yellow", width: "20px", height: "20px"}}></span></div>
                
                
                </div>
                : <h1>Please enter</h1>
            }
            
        </div>
    )
}

export default Radius