import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    posts: [],
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                posts: action.value,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                posts: [],
                error: 'You Made a Mistake'
            }

        default:
            return state

    }
}

const FunctionAxios = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        axios.get(URL)
            .then(response => {
                dispatch({ type: "SUCCESS", value: response.data })
            })
            .catch(error => {
                dispatch({ type: "ERROR" })
                console.log(error);
            })
    }, [])


    return (
        <div>
            {
                state.loading
                    ? <h1>Loading...</h1>
                    : state.posts.map((post, index) => {
                        return (
                            <h1 key={index}>{post.title}</h1>
                        )
                    })
            }
            {state.error && <h1>{state.error}</h1>}
        </div>
    )
}

export default FunctionAxios
