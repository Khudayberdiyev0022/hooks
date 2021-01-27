import React, { useState } from 'react'

const Function = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Incrise
            </button>
            <button onClick={() => count && setCount(count - 1)}>
                Decrise
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}

export default Function
