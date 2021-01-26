import React, { useState } from 'react'

const FunctionInput = () => {
    const[name, setName] = useState({firstName: "",  secondName: ""})
    return (
        <div>
            <h1>{name.firstName}</h1>
            <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})}/>
            <h1>{name.secondName}</h1>
            <input type="text" value={name.secondName} onChange={(e) => setName({...name, secondName: e.target.value})}/>
        </div>
    )
}

export default FunctionInput
