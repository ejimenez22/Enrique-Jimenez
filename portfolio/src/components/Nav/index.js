import React from "react"
import { FaWindowClose } from 'react-icons/fa'

function SideNav(props) {
    
    return (
        <div style={{ width: props.width}} className="sidenav">
            <button className="close-btn" onClick={props.closeNav}><FaWindowClose /></button>
            <a className='navLink' href="#About">About</a>
            <a className='navLink' href="#Portfolio">Portfolio</a>
            <a className='navLink' href="#Contact">Contact</a>
            <a className='navLink' href="#Resume">Resume</a>
        </div>
    )
}

export default SideNav