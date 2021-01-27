import React, { useState } from 'react'

const ButtonClick = () => {
    const [value, setValue] = useState('')
    const event = (e) => {
        e.preventDefault()
        console.log(value);
    }
    return (
        <div>
            <form onSubmit={event}>
                <input type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}

                />
                <button type='submit'>onClick</button>
            </form>
        </div>
    )
}

export default ButtonClick
