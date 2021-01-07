import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import classes from './Nav.module.css'

const Nav = () =>{
const [toggle, setToggle] = useState(false)

const toggler = () => {
    setToggle(!toggle)
}

    return(
<nav>
    <div className={classes.logo}>
        <h4>Masc students DB</h4>
    </div>
    <ul className={toggle ? classes.navLinks  : classes.navActive}>
        <li style={{color: "#3490de"}}>Add</li>
        <li style={{color: "#e23e57"}}>Logout</li>
    </ul>
    <button className={classes.Burger} onClick={toggler}>
{toggle ? <FaTimes size="20px" color="#393e46" /> : <FaBars size="20px" color="#393e46" />}
    </button>
</nav>
    )
}

export default Nav
