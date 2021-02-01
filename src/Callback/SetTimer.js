import React, { useEffect, useState } from 'react'

const SetTimer = () => {
    const [color, setColor] = useState("red")
    useEffect(() => {
        const timeout = setTimeout(() => {
            setColor('blue')
        }, 5000)
        return () => {
            clearTimeout(timeout)
        }
    }, [color])

    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: `${color}` }}>

        </div>
    )

}

export default SetTimer
