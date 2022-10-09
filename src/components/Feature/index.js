import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import { handleChangeSlide } from '../../utils/changeSlide'

export const Features = ({ about, course }) => {
    const [slide, setSlide] = useState(0)

    const handleChangleSlideBar = (index) => {
        setSlide(index)
    }

    return course && <div id="about-bar" className="mb-5">

        <div className="px-3 px-md-5 position-relative " >
            <div className='about-bar row row-cols-2 row-cols-lg-4'>
                {about.map((a, index) => (
                    <span key={index} className={`col py-2 ${slide === index ? "active" : ""}`} onClick={() => handleChangleSlideBar(index)}>
                        {a.title}
                    </span>
                ))}
            </div>
            {about.map((a, index) => (
                <div className="slideshow-container " key={index}>
                    <div className={` mySlides faded ${slide === index ? "d-flex flex-column  flex-lg-row" : ""}`}>
                        <Col sm={12} lg={6} className="flex-shrink-0" >
                            <Image src={a.url} width="100%" />
                        </Col>
                        <Col sm={12} lg={6} className="flex-grow-1">
                            {a.content}
                        </Col>
                    </div>
                </div>
            ))
            }
            <div className='carousel-btn-wrapper'>
                <button className={`prev ${slide === 0 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(-1, slide, setSlide, about)}>
                    &#10094;
                </button>
                <button className={`next ${slide === about.length - 1 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(1, slide, setSlide, about)}>
                    &#10095;
                </button>
            </div>
        </div>

    </div>
}