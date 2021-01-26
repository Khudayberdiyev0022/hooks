import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FunctionPhotos = () => {
    const [value, setValue] = useState([])
    const [photos, setPhotos] = useState([])
    const [buttonClick, setButtonClick] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${buttonClick}`)
            .then(responese => setPhotos(responese.data))
            .catch(error => console.log(error))
    }, [buttonClick])
    console.log(photos);
    const takePhotos = () => {
        setButtonClick(value)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'flex-center' }}>
            <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={takePhotos}>
                onClick
            </button>

            {/* <h2>{photos.albumId}</h2> */}

            <h3 style={{ display: "flex", justifyContent: 'center', margin: 'auto' }}> ID: {photos.id} - {photos.title} </h3>



            <div style={{ width: '200px', boxSizing: 'border-box' }}>
                <img src={photos.url} alt="" style={{ width: '100%' }} />
            </div>

        </div>
    )
}

export default FunctionPhotos
