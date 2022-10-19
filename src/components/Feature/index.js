import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { handleChangeSlide } from '../../utils/changeSlide'

export const Features = ({ course }) => {
    const [slide, setSlide] = useState(0)
    const { feature } = course
    const handleChangleSlideBar = (index) => {
        setSlide(index)
    }
    const MAVLFeatureImage = (feature) => {
        let url
        switch (feature) {
            case "subject":
                url = "/images/mavl-doi_tuong.png"
                break;
            case "format":
                url = "/images/mavl-hinh_thuc.png"
                break;
            case "time":
                url = "/images/mavl-thoi_gian.png"
                break;
            case "fiveStarts":
                url = "/images/mavl-nam_sao.png"
                break;
            default:
                break;
        }
        return url
    }
    const MTFeatureImage = (feature) => {
        let url
        switch (feature) {
            case "subject":
                url = "/images/mt-doi_tuong.jpg"
                break;
            case "format":
                url = "/images/mt-hinh_thuc.jpg"
                break;
            case "time":
                url = "/images/mt-thoi_gian.jpg"
                break;
            case "fiveStarts":
                url = "/images/mt-nam_sao.jpg"
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

    const { slug } = useParams()

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
                            <Image src={slug.toLowerCase() === "mavl" ? MAVLFeatureImage(a) : MTFeatureImage(a)} width="100%" />
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