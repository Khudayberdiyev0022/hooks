import React, { useState } from 'react'

const Test1 = () => {
    const [value, setValue] = useState(0)

    const clickFunction = () => {
        setValue(value + 1)
    }
    const clickFunction2 = () => {
        value && setValue(value - 1)
    }
    const clickFunction3 = () => {
        for (let i = 0; i < 5; i++) {
            setValue(prevValue => prevValue + 1)
        }
    }
    const clickFunction4 = () => {
        for (let i = 0; i < 5; i++) {
            value && setValue(prevValue => prevValue - 1)
        }
    }
    const clickFunction5 = () => {
        setValue(0)
    }
    return (
        <div>
            <h1>{value}</h1>
            <button type="button" onClick={clickFunction}>clickMe+</button>
            <button type="button" onClick={clickFunction2}>clickMe-</button>
            <button type="button" onClick={clickFunction3}>clickMe5</button>
            <button type="button" onClick={clickFunction4}>clickMe5minus</button>
            <button type="button" onClick={clickFunction5}>clickMeReset</button>
        </div>
    )
}

export default Test1