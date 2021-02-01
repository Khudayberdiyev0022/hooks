import React, { useMemo, useState } from 'react'

const UseRef = () => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const increaseCount = () =>{
        setCount(count + 1)
    }

    const isEven = useMemo (() => {
        let i = 0;
        while(i < 2000000000) i++
        return number%2 === 0
    }, [number])
    return (
        <div>
            <button onClick={increaseNumber}>Number + {number}</button>
            <button onClick={increaseCount}>Count + {count}</button>
            {isEven ? "Even" : "Odd"}
        </div>
    )
}

export default UseRef
