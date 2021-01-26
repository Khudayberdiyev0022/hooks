import React, { useEffect, useState } from 'react'

const FunctionColors = () => {
    const colors = ["red", "orange", "blue"]
    const [color, setColor] = useState(colors[0])
    useEffect(() => {
        window.addEventListener('mousedown', Change)
    })
    const Change = () => {
        if (color === colors[0]) {
            setColor(colors[1])
        } else if (color === colors[1]) {
            setColor(colors[2])
        } else (setColor(colors[0]))
    }
    return (
        <div>
            <div style={{ backgroundColor: `${color}`, width: '100vw', height: '100vh' }}>
                {/* <button onClick={Change}>onClick</button> */}

            </div>
        </div>
    )
}

export default FunctionColors
