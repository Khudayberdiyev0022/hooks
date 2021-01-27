import React, { useState } from 'react'

const Test2 = () => {
    const [value, setValue] = useState({ firstName: " ", secondName: " " })

    return (
        <div>
            <h1>{value.firstName}</h1>
            <input
                type="text"
                value={value.firstName}
                onChange={(e) => setValue({ ...value, firstName: e.target.value })}
            />
            <h1>{value.secondName}</h1>
            <input
                type="text"
                value={value.secondName}
                onChange={(e) => setValue({ ...value, secondName: e.target.value })}
            />
        </div>
    )
}

export default Test2