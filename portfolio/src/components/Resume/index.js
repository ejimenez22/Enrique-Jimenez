import React, { useState } from "react";
import { Document, Page } from 'react-pdf'

function Resume() {

    const [ numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoad({numPages}) {
        setNumPages(numPages)
    }
    return (
        <section>
            <h1>My Resume</h1>
            <Document file='Enrique Jimenez Developer Resume.pdf' onLoadSuccess={onDocumentLoad}>
                <Page pageNumber={setPageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div>
                <h1> My Skills </h1>
                <ul>
                    <li>
                        <img alt="js" src="../../src/assets/images/js.png" />
                    </li>
                    <li>
                        <img alt="html" src="../../src/assets/images/HTML.png" />
                    </li>
                    <li>
                        <img alt="css" src="../../src/assets/images/CSS.png" />
                    </li>
                    <li>
                        <img alt="Bootstrap" src="../../src/assets/images/Bootstrap.png" />
                    </li>
                    <li>
                        <img alt="Bulma" src="../../src/assets/images/Bulma.png" />
                    </li>
                    <li>
                        <img alt="Git" src="../../src/assets/images/Git.png" />
                    </li>
                    <li>
                        <img alt="jQuery" src="../../src/assets/images/Jquery.png" />
                    </li>
                    <li>
                        <img alt="mongodb" src="../../src/assets/images/mongodb.png" />
                    </li>
                    <li>
                        <img alt="MySQL" src="../../src/assets/images/MySQL.png" />
                    </li>
                    <li>
                        <img alt="Node" src="../../src/assets/images/Node.png" />
                    </li>
                    <li>
                        <img alt="React" src="../../src/assets/images/React.png" />
                    </li>
                    <li>
                        <img alt="Rest" src="../../src/assets/images/REST.png" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Resume