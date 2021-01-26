import React, {useState} from 'react'

const FunctionState2 = () => {
    const [items, setItems] = useState([])
    const listRender = () => {
        setItems([...items, {
            value: Math.floor(Math.random() * 10)
        }
    ])
    }
    return (
        <div>
           <button onClick={listRender}>
               List render
               </button> 
               <ul>
                   {
                       items.map((item, index) => {
                           return(
                               <li key={index}>{item.value}</li>
                           )
                       })
                   }
               </ul>
        </div>
    )
}

export default FunctionState2
