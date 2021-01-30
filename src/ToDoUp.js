import React, { useReducer } from 'react'

const initialState = {
    todoList: [],
    eachList: "",
    id: 0,
    green: "",
    completeButton: false

}

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            return {
                ...state,
                todoList: [...state.todoList, { value: state.eachList, id: state.id + 1 }],
                id: state.id + 1,
                eachList: ""
            }
        case "CHANGE_INPUT":
            return {
                ...state,
                eachList: action.value
            }
        case "DELETE":
            return {
                ...state,
                todoList: [...action.value]
            }
        case "EDIT":
            return {
                ...state,
                eachList: action.value[0].value,
                todoList: [...action.array]
            }
            case "COMPLETE":
            return {
                ...state,
                green: action.value
            }
        default:
            return state
    }
}



const ToDoUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const deleteButton = (id) => {
        const newToDoList = state.todoList.filter((toDo => toDo.id !== id))
        dispatch({ type: "DELETE", value: newToDoList })

    }
    const editButton = (id) => {
        const choosenToDo = state.todoList.filter((toDo => toDo.id === id))
        const newToDoList = state.todoList.filter((toDo => toDo.id !== id))
        dispatch({ type: "EDIT", value: choosenToDo, array: newToDoList })

    }

    const completeButton = (id) => {
        dispatch({type: "COMPLETE", value: "green"})
    }
    console.log(state);
    return (
        <div className="ui container">
            <h1> {JSON.stringify(state.todoList)} </h1> 
            <form className="ui form" onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: "CLICK" })
            }}>
                <div className="ui segment">
                    <label className="ui purple label">To Do this Things</label>
                    <input
                        required
                        type="text"
                        value={state.eachList}
                        onChange={(e) => dispatch({ type: "CHANGE_INPUT", value: e.target.value })}

                    />
                    <button type="submit" className="fluid ui green button">Submit</button>
                </div>
            </form>
            {
                state.todoList.map((toDo, index) => {
                    return (
                        <div key={index} className="ui segment ui grid" style= {{color: `${state.green}`}}>
                            <h3 style={{ padding: "1rem"}}>{toDo.value}</h3>
                            <div style={{ marginLeft: "auto", padding: "1rem"}}>
                                <button
                                    className="ui pink inverted button"
                                    onClick={() => editButton(toDo.id)}>EDIT</button>
                                <button
                                    className="ui red button"
                                    onClick={() => deleteButton(toDo.id)} >DELETE</button>
                                <button className="ui blue button"
                                    onClick={() => completeButton(toDo.id)}>COMPLETE</button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ToDoUp
//? color : red : $cxc  