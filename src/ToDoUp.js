import React, { useReducer } from 'react'

const initialState = {
    todoList: [],
    eachList: "",
    id: 0,
    campleated: false

}

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            return {
                ...state,
                todoList: [...state.todoList, { value: state.eachList, id: state.id + 1, campleated: false }],
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
                toDoList: [...action.value]
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
        const index = state.todoList.findIndex(arr => arr.id === id)
        const newTaskElement = [...state.todoList]

        newTaskElement[index] = {
            ...newTaskElement[index],
            completed: true
        }
        dispatch({ type: "COMPLETE", value: newTaskElement })
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
                        <div key={index} className="ui segment ui grid" style={{ backgroundColor: `${toDo.campleated ? 'green' : 'black'}` }}>
                            <h3 style={{ padding: "1rem" }}>{toDo.value}</h3>
                            <div style={{ marginLeft: "auto", padding: "1rem" }}>
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


// import React, {useReducer} from 'react'
// import './style.css'
// const initialState ={
//     todoList: [],
//     eachList: '',
//     id: 0
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'CLICK':
//             return {
//                 ...state,
//                 todoList: [...state.todoList, {value: state.eachList, id: state.id + 1, compleated:false}],
//                 id: state.id + 1,
//                 eachList: ''
//             }
//         case 'CHANGE_INPUT':
//             return {
//                 ...state,
//                 eachList: action.value
//             }
//         case 'DELETE':
//             return{
//                 ...state,
//                 todoList: [...action.value]
//             }
//         case 'EDIT':
//             return{
//                 ...state,
//                 eachList: action.value[0].value,
//                 todoList: [...action.array],
//             }
//         case 'COMPLETED':
//             return{
//                 ...state, 
//                 todoList:[...action.value]
//             }
//         default:
//             return state;
//     }
// }

// function ToDoApp() {
//     const [state, dispatch] = useReducer(reducer, initialState)


//     const deleteButton = (id) => {
//         const newToDoList = state.todoList.filter((toDo) => toDo.id !== id)
//         dispatch({type: 'DELETE', value: newToDoList})
//     }
//     const editButton = (id) => {
//         const newToDoList = state.todoList.filter((toDo) => toDo.id !== id) 
//         const choosenToDo = state.todoList.filter((toDo) => toDo.id === id)
//         console.log(choosenToDo);
//         dispatch({type:'EDIT', value:choosenToDo, array:newToDoList })
//     }
//     const completeButton = (id) => {
//         const index = state.todoList.findIndex(arr => arr.id === id)

//         const newTaskElement = [...state.todoList]

//         newTaskElement[index] = {
//             ...newTaskElement[index],
//             compleated: true
//         }

//         dispatch({type:'COMPLETED' , value:newTaskElement })
//         console.log(newTaskElement);

//     }
//     return (
//         <div className='ui container'>
//             {/* <h1>{JSON.stringify(state.todoList)}</h1> */}
//             <form className='ui form' onSubmit={(e) => {
//                 e.preventDefault()
//                 state.eachList !== '' && dispatch({type:'CLICK'})
//             }}>
//                 <label className='ui label'>To do things</label>
//                 <input 
//                     type="text"
//                     value={state.eachList}
//                     onChange={(e) => dispatch({type: 'CHANGE_INPUT', value: e.target.value})}
//                 />
//                 <button className='ui button green container' type='submit'>ADD</button>
//             </form>
//             {
//                 state.todoList.map((toDo, index) => {
//                     console.log(toDo.compleated);
//                     return(
//                         <div className='ui segment ui grid'  key={index}>
//                             <h1
//                             className={toDo.compleated ? 'green' : 'red'}
//                                 style={{padding: '1rem'}}>{toDo.value}</h1>
//                             <div style={{marginLeft:'auto', padding: '1rem'}}>
//                                 <button 
//                                     className='ui button yellow '
//                                     onClick={() => editButton(toDo.id)} 
//                                 >EDIT</button>
//                                 <button 
//                                     type='button'
//                                     className='ui button red'
//                                     onClick={() => deleteButton(toDo.id)}
//                                 >DELETE</button>
//                                 <button
//                                     type='button'
//                                     className='ui button green'
//                                     onClick={() => completeButton(toDo.id)}
//                                 >
//                                     COMPLEATED
//                                 </button>
//                             </div>
//                         </div>

// )
//                 })
//             }

//         </div>
//     )
// }

// export default ToDoApp