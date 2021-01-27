import React, { useEffect, useState } from 'react'

const FunctionInterval = () => {
    const [number, setNumber] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(number + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }

    )
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}

export default FunctionInterval

