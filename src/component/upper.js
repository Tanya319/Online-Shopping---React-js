import React from 'react'
import {FaSearch} from 'react-icons/fa';

export default function Upper() {
    return (
        <div className="upper_nav">
         <a href="http://localhost:3000/home"><h1>FASHION DESTINATION</h1></a>

        <div className="upper">
        <form className="dropdown" action="">
        <div className="lower" style={{fontSize:20}}>
        <button className="dropbtn" ><FaSearch/></button>
        <input className="dropdown-content" type="text"></input>
        </div>
        </form>
        </div> 
        </div>
    )
}
