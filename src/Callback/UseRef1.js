import React, { useEffect, useRef, useState,  } from 'react'

const UseRef1 = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        ref.current = setInterval (() => {
            setCount(count + 1)
        }, 1000)
       
        return () => {
            clearInterval(ref.current)
        }
    }, [count])

   

    return(
        <div>
            <button onClick={() => clearInterval(ref.current)}>Play && Pauze</button>
            {count}
        </div>
    )
}

export default UseRef1
