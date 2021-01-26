import React, { useState } from 'react'

const FUnctionRandom = () => {
    const [values, setValues] = useState([])
    const random = Math.floor(Math.random() * 10) + 1
    const click = () => {
        setValues([...values, { value: random }])
    }
    return (
        <div>
            {values.map((a, index) => {
                return (
                    <h1 key={index}>{a.value}</h1>
                )
            })}

            <button type="button" onClick={click}>onClick</button>
        </div>

    )
}


export default FUnctionRandom
