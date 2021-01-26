import React, { useContext } from 'react'
import { nameContext, nickContext } from '../App'

const ProviderConsummer = () => {
    const name = useContext(nameContext)
    const nick = useContext(nickContext)

    return (
        <div>
            <h1>Hello my name is {name} my age {nick} </h1>      
        </div>
    )
}

export default ProviderConsummer
