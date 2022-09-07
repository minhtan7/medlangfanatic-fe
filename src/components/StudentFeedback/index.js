import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ShowMore } from '../../utility/ShowMore'
import quote from '../../asset/quote.svg'


export const StudentFeedback = ({ defaultHeight, feedBack }) => {
    const [slide, setSlide] = useState(0)

    const handleChangeSlide = (n) => {
        if ((slide === 0 && n === 1)
            || (slide === feedBack.length - 1 && n === -1)
            || (slide > 0 && slide < feedBack.length - 1)) {
            setSlide(slide + n)
        }
    }
    return (
        <div className="mb-5" id="student-feedback">
            <div className="px-5 position-relative bg-lighter py-3" >
                <h2 className='mb-4 text-main-title'>Nhận xét của học viên</h2>
                {feedBack.map((f, index) => (
                    <div className="slideshow-container">
                        <div className={`mySlides faded ${slide === index ? "slide-active" : ""}`}  >
                            <ShowMore defaultHeight={defaultHeight} text={f.content} index={index} />
                            <span className='slide-quote'>
                                {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                <img src={quote} alt="quote sign" />
                            </span>
                        </div>
                        <div className={`mySlides faded  pt-2 ${slide === index ? "d-flex" : ""}`}>
                            <div className="flex-shrink-0" >
                                {/* <FontAwesomeIcon icon={faUserDoctor} size="2x" className='doctor-icon' /> */}
                                <img src="/images/student_icon.svg" width={60} className='doctor-icon' alt="student icon" />
                            </div>
                            <div className="flex-grow-1 ms-3 m-auto">
                                <p className='m-0'><strong>{f.name}</strong></p>
                                <p className='m-0'>{f.title}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className='carousel-btn-wrapper'>
                    <button className={`prev ${slide === 0 ? "stop-slide" : ""}`} onClick={() => handleChangeSlide(-1)}>&#10094;</button>
                    <button className={`next ${slide === feedBack.length - 1 ? "stop-slide" : ""}`} onClick={() => handleChangeSlide(1)}>&#10095;</button>
                </div>
            </div>
        </div>
    )
}
