import React, { useEffect, useState } from 'react'

const FunctionTitle = () => {
    const [value, setValue] = useState(0)

    const clicked = () => {
        setValue(value + 5)
    }

    useEffect(() => {
        document.title = `You clicked ${value} times`
    })
    return (
        <div>
            <button type="button" onClick={clicked}>clickedME</button>
        </div>
    )
}

export default FunctionTitle
