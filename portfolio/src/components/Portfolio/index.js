import React from 'react'

function Portfolio() {
    return (
        <div className='flex-row'>
        <section>
            <h1>Portfolio</h1>
           <ul>
            <li>
            <a href="https://archiedonaho.github.io/Search-Watch-Chill/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/Search-watch-chill.png")} alt="Search,Watch,Chill" />
                </a>
            </li>
            <li>
            <a href="https://desolate-basin-81470.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/sikester.png")} alt="Sikester" />
                </a>
            </li>
            <li>
            <a href="https://hidden-mountain-21494.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/Note-taker.png")} alt="Note-Taker" />
                </a>
            </li>
            <li>
            <a href="https://drive.google.com/file/d/1_5ulD2eN590TCQ-2q8JlSlbG4UYVHXO0/view" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/OOP.gif")} alt="Object-Oriented-Programming" />
                </a>
            </li>
            <li>
            <a href="https://drive.google.com/file/d/1vdFHGQEeuaIdn1KwNCV9kMM25pohneES/view" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/ORM.gif")} alt="Object-relational-mapping" />
                </a>
            </li>
            <li>
            <a href="https://murmuring-chamber-00410.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/projects/PWA.png")} alt="Progessive-Web-Application" />
                </a>
            </li>
            </ul>
        </section>
        </div>
    )
}

export default Portfolio