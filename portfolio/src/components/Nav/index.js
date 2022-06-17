import React from "react"

function SideNav(props) {
    return (
        <div style={{ width: props.width}} className="sidenav">
            <button onClick={props.closeNav}>X</button>
            <a href="#About">About</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Contact</a>
            <a href="#Resume">Resume</a>
        </div>
    )
}

export default SideNav