import React, { useEffect, useState } from 'react'

const FunctionEffect10 = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(increase, 1000)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div>
            <h1> Count: {count} </h1>
        </div>
    )
}

export default FunctionEffect10
