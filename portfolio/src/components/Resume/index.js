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
           <ul>
            <li>JavaScript</li>
            <li>React</li>
           </ul>
        </section>
    )
}

export default Resume