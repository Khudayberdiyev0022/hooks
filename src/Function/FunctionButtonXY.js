import React, { useEffect, useState } from 'react'

const FunctionButtonXY = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [click, setClick] = useState(false)
    const clicked = () => {
        setClick(!click)
    }
    useEffect(() => {
        window.addEventListener("mousemove", move)
    })

    const move = (e) => {

        setX(e.clientX)
        setY(e.clientY)

    }

    return (
        <div>
            {
                !click && <div>
                    <h1>{x}</h1> <h1>{y}</h1>
                </div>
            }
            <button onClick={clicked}>clickME</button>
        </div>
    )
}

export default FunctionButtonXY
