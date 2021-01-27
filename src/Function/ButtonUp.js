import React, { useState } from 'react'

const ButtonUp = () => {
    const [value, setValue] = useState(0)
    const Up = () => {
        setValue(value + 1)
    }
    const Down = () => {
        value && setValue(value - 1)
    }
    const UpFive = () => {
        for (let i = 0; i < 5; i++) {
            setValue(prevValue => prevValue + 1)
        }
    }
    return (
        <div>
            <h1>{value}</h1>
            <button type="button" onClick={Up}>+</button>
            <button type="button" onClick={Down}>-</button>
            <button type="button" onClick={UpFive}>+5</button>
        </div>
    )
}

export default ButtonUp
