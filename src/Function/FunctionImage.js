import React, { useState } from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'

const FunctionImage = () => {
    const [count, setCount] = useState(1)
    const listHandler = () => {
        if (count === 1) {
            return (
                <div style={{ width: '500px', height: '500px' }}> <img src={img1} alt='1' style={{ width: '80%' }} /> </div>
            )
        } else if (count === 2) {
            return (
                <div style={{ width: '500px', height: '500px' }}><img src={img2} alt='1' style={{ width: '80%' }} /></div>
            )
        } else {
            return (
                <div style={{ width: '500px', height: '500px' }}><img src={img3} alt='1' style={{ width: '80%' }} /></div>
            )
        }
    }
    return (
        <div>
            {
                listHandler()
            }
            <button onClick={() => setCount(1)}>1</button>
            <button onClick={() => setCount(2)}>2</button>
            <button onClick={() => setCount(3)}>3</button>
        </div>
    )
}

export default FunctionImage

