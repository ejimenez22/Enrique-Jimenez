import React from "react"
//import { FaWindowClose } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCode, faFile, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

function SideNav() {
    
    return (
        <div className="nav">
            <nav>
            <NavLink exact='true' to='/' className='navLink'>
                <FontAwesomeIcon icon={faHome} className='icon' />
            </NavLink>
            <NavLink exact='true' to='/about' className='navLink'>
                <FontAwesomeIcon icon={faUser} className='icon' />
            </NavLink>
            <NavLink exact='true' to='/portfolio' className='navLink'>
                <FontAwesomeIcon icon={faCode} className='icon'/>
            </NavLink>
            <NavLink exact='true' to='/Resume' className='navLink'>
                <FontAwesomeIcon icon={faFile} className='icon'/>
            </NavLink>
            <NavLink exact='true' to='/contact' className='navLink'>
                <FontAwesomeIcon icon={faPhone} className='icon'/>
            </NavLink>
            </nav>
        </div>
    )
}

export default SideNav