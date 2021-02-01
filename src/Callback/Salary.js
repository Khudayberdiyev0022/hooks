import React from 'react'

const Salary = ({incrementSalary}) => {
    return (
        <div>
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    )
}

export default React.memo (Salary)
