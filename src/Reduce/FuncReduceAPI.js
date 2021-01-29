import React, { useEffect, useState } from 'react'
import axios from 'axios'


const FuncReduceAPI = () => {
    const [loading, setloading] = useState(true)
    const [error, setError] = useState("")
    const [posts, setPosts] = useState([])

    const URL = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        axios.get(URL)
            .then(response => {
                setloading(false)
                setError("")
                setPosts(response.data)
            })
            .catch(error => {
                setloading(false)
                setError("We hsve some Error")
                setPosts([])
                console.log(error)

            })
    }, [])
    return (
        <div>
            {
                loading
                    ? <h1>Loading...</h1>
                    : posts.map((post, index) => {
                        return (
                            <h1 key={index}> {post.title} </h1>
                        )
                    }
                    )}
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default FuncReduceAPI
