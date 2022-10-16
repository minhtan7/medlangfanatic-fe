import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import { handleChangeSlide } from '../../utils/changeSlide'

export const Features = ({ course }) => {
    const [slide, setSlide] = useState(0)
    const { feature } = course
    const handleChangleSlideBar = (index) => {
        setSlide(index)
    }
    const featureImage = (feature) => {
        let url
        switch (feature) {
            case "subject":
                url = "/images/doi_tuong.png"
                break;
            case "format":
                url = "/images/hinh_thuc.png"
                break;
            case "time":
                url = "/images/thoi_gian.png"
                break;
            case "fiveStarts":
                url = "/images/nam_sao.png"
                break;
            default:
                break;
        }
        return url
    }
    const featureTab = (tab) => {
        switch (tab) {
            case "subject":
                tab = "Đối tượng"
                break;
            case "format":
                tab = "Hình thức"
                break;
            case "time":
                tab = "Thời gian"
                break;
            case "fiveStarts":
                tab = < >
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                </>
                break;
            default:
                break;
        }
        return tab
    }

    return course && <div id="about-bar" className="mb-5">

        <div className="px-3 px-md-5 position-relative " >
            <div className='about-bar row row-cols-2 row-cols-lg-4'>
                {Object.keys(feature).map((a, index) => (
                    <span key={index} className={`col py-2 ${slide === index ? "active" : ""}`} onClick={() => handleChangleSlideBar(index)}>
                        {featureTab(a)}
                    </span>
                ))}
            </div>
            {Object.keys(feature).map((a, index) => (
                <div className="slideshow-container " key={index}>
                    <div className={` mySlides faded ${slide === index ? "d-flex flex-column  flex-lg-row" : ""}`}>
                        <Col sm={12} lg={6} className="flex-shrink-0" >
                            <Image src={featureImage(a)} width="100%" />
                        </Col>
                        <Col sm={12} lg={6} className="flex-grow-1">
                            {a.content}
                            <ul className='fa-ul'>
                                {feature[a].map(c => (
                                    <li key={c}>
                                        <span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>{c}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </div>
                </div>
            ))
            }
            <div className='carousel-btn-wrapper'>
                <button className={`prev ${slide === 0 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(-1, slide, setSlide, Object.keys(feature))}>
                    &#10094;
                </button>
                <button className={`next ${slide === Object.keys(feature).length - 1 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(1, slide, setSlide, Object.keys(feature))}>
                    &#10095;
                </button>
            </div>
        </div>

    </div>
}