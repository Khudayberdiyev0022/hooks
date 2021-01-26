import React, { useEffect, useState } from 'react'

const FunctionMouseXY = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect (() => {
        window.addEventListener("mousemove", move)
    })
    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
        return (
        <div>
            <h1>{x}</h1>
            <h1>{y}</h1>
        </div>
    )
}

export default FunctionMouseXY
