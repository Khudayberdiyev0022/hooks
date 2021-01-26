import React, {useState, useEffect} from 'react'

const FunctionEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    return (
        <div>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Click {count}
                </button>
            </div>
        </div>
    )
}

export default FunctionEffect
