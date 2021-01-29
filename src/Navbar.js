import React from 'react'
import { Link } from 'react-router-dom'
import { BsExclamationTriangleFill } from 'react-icons/bs'
import { FaRadiationAlt } from 'react-icons/fa'
import { GiCube } from 'react-icons/gi'


const Navbar = () => {
    return (
        <div className="ui container" >
            <div className="ui segment" style={{ width: "50%", margin: "1rem auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button className="ui inverted green button">
                        <BsExclamationTriangleFill />
                        <Link to="/triangle"> Triangle </Link>
                    </button>
                    <button className="ui inverted blue button">
                        <FaRadiationAlt />
                        <Link to="/kvadrat"> Kvadrat </Link>
                    </button>
                    <button className="ui inverted orange button">
                        <GiCube />
                        <Link to="/radius"> Radius </Link>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Navbar
