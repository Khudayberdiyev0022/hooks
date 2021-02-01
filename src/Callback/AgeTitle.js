import React from 'react'

const AgeTitle = ({number}) => {
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}

export default React.memo (AgeTitle)
