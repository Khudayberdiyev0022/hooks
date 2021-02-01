import React from 'react'

const SalaryTitle = ({salary}) => {
    return (
        <div>
            <h1>{salary}</h1>
        </div>
    )
}

export default React.memo (SalaryTitle)
