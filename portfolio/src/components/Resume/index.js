import React, { useState } from "react";
import { Document, Page } from 'react-pdf'
import { ImageData } from "./images";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function Resume(slides) {

    const [ numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const [currentImage, setCurrentImage] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length -1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }



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
                <div>
                    <div className="slider">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                    {ImageData.map((slide, index) =>{
                        <img src={slide.image} alt='skills' className="image"/>
                    })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume