import React from "react";
import SideNav from "../Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faNode, faHtml5, faCss3, faReact, faJsSquare, faGithub} from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <>
        <SideNav></SideNav>
        <div className="homePage">
            <h1>Enrique Jimenez</h1>
            <h2>Software Engineer</h2>
        </div>
        <div className='cubeContainer'>
            <div className="cube" id="boxspin">
                <div className="face1">
                    <FontAwesomeIcon icon={faNode} color='#006400' />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home