import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
// import Fade from  'react-reveal/Fade'

const ButtonClickUp = () => {
    const [value, setValue] = useState(0)


    const clickMeUp = () => {
        setValue(value + 1)
    }

    const clickMeDown = () => {
        value && setValue(value - 1)
    }

    const clickMeUp5 = () => {
        for (let i = 0; i < 5; i++) {
            setValue(prevvalue => prevvalue + 1)
        }
    }

    const restart = () => {
        setValue(0)
    }
    return (
        <div >
            <Zoom right>
                <h1 style={{ textAlign: 'center' }}>This number: {value} !!!</h1>
            </Zoom>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" onClick={clickMeUp}>clickMeUp</button>
                <button type="button" onClick={clickMeDown}>clickMeDown</button>
                <button type="button" onClick={clickMeUp5}>clickMeUp5</button>
                <button type="button" onClick={restart}>restart</button>
            </div>
        </div>
    )
}

export default ButtonClickUp
