import React, {useState} from 'react'

const FunctionState = () => {
    const [name, setName] = useState  ({firstName: '' , heroName: ''})
    return (
        <div>
            <h1>Name: {name.firstName}</h1>
            <input
            type='text'
            value={name.firstName}
            onChange={(e)=> setName({...name, firstName: e.target.value})} />
             <h1>Name: {name.heroName}</h1>
            <input
            type='text'
            value={name.heroName}
            onChange={(e)=> setName({...name, heroName: e.target.value})} />



        </div>
    )
}

export default FunctionState
