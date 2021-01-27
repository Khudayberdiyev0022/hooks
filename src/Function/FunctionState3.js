import React, { useState } from 'react'

const FunctionState3 = () => {
    const [count, setCount] = useState(0)
    const incrementFIve = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <h3>{count}</h3>
            <button
                onClick={() => setCount(prevCount => prevCount + 1)}
            > + </button>
            <button
                onClick={() => setCount(prevCount => prevCount - 1)}
            > - </button>
            <button
                onClick={incrementFIve}
            > +5 </button>
        </div>
    )
}

export default FunctionState3
