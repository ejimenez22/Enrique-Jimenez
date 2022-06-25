import React from "react";
import SideNav from "../Nav";
//import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <SideNav></SideNav>
        <div className="homePage">
            <h1>Enrique Jimenez</h1>
            <h2>Software Engineer</h2>
        </div>
        </>
    )
}

export default Home