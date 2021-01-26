import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FunctionAxios = () => {
    const [value, setValue] = useState([])
    const [post, setPost] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)
   
    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
       .then(response => setPost(response.data))
       .catch(error => console.log(error))
    }, [buttonClick])
    const takePost = () => {
        setButtonClick(value)
    }
     
    return (
        <div>
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button
            onClick={takePost}
            >
                onClick
            </button>
            <p>{post.id} - {post.title}</p>
        </div>
    )
}

export default FunctionAxios
