import React from 'react'

const Age = ({incrementNumber}) => {
    return (
        <div>
            <button onClick={incrementNumber}>Increment Age</button>
        </div>
    )
}

export default React.memo (Age)
