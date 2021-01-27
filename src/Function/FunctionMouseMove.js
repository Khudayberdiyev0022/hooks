import React, { useState, useEffect } from 'react'

const FunctionMouseMove = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [name, setName] = useState("")

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener("mousemove", logMousePosition)
    }, [])

    return (
        <div>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>X: {x}</h1>
            <h1>Y: {y}</h1>
        </div>
    )
}

export default FunctionMouseMove
