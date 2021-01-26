import React, {useState, useEffect} from 'react'

const FunctionEffect3 = () => {
    const [count, setCount] = useState(0)
useEffect(() => {
    const interval = setInterval(rise, 1000)
    return () => {
        clearInterval(interval)
    }
}, [count])
const rise = () => {
    setCount(count + 1)
}


    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default FunctionEffect3
