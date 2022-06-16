import React from "react";

function SideNav(props) {
    return (
        <div style={{ width: props.width}} className="sidenav">
            <button onClick={props.closeNav}>X</button>
            <a href="#section">About</a>
            <a href="#section">Portfolio</a>
            <a href="#section">Contact</a>
            <a href="#section">Resume</a>
        </div>
    )
}

export default SideNav