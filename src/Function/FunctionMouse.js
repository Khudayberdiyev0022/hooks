import React, { useState, useEffect } from 'react'

const FunctionMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener("mousemove", logMousePosition)
    })

    return (
        <div>
            <h1>X : {x}</h1>
            <h1>Y : {y}</h1>
        </div>
    )
}

export default FunctionMouse
