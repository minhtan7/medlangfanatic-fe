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

    const featureObj = {
        mavl: {
            subject: "/images/mavl-doi_tuong.png",
            format: "/images/mavl-hinh_thuc.png",
            time: "/images/mavl-thoi_gian.png",
            fiveStarts: "/images/mavl-nam_sao.png"
        },
        "medical-terminology": {
            subject: "/images/mt-doi_tuong.jpg",
            format: "/images/mt-hinh_thuc.jpg",
            time: "/images/mt-thoi_gian.jpg",
            fiveStarts: "/images/mt-nam_sao.jpg"
        },
        "clinical-case-presentation": {
            subject: "https://res.cloudinary.com/tanvo/image/upload/v1671899425/medlangfanatic/courses/presenting-clinical-case-from-scratch/DOI_TUONG_HOC_i0m6ng.jpg",
            format: "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/HINH_THUC_HOC_ioyenk.jpg",
            time: "https://res.cloudinary.com/tanvo/image/upload/v1671900610/medlangfanatic/courses/presenting-clinical-case-from-scratch/THOI_GIAN_HOC_pczhlm.jpg",
            fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/5_SAO_elyv9x.jpg"
        },
        "communication-with-patients-101": {
            subject: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-object_ylhcnh.jpg",
            format: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-hinh-thuc_fx9fbs.jpg",
            time: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-time_lybshz.jpg",
            fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-5__npp3pu.jpg"
        },

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
    const PCCSFeatureImage = (feature) => {
        let url
        switch (feature) {
            case "subject":
                url = "https://res.cloudinary.com/tanvo/image/upload/v1671899425/medlangfanatic/courses/presenting-clinical-case-from-scratch/DOI_TUONG_HOC_i0m6ng.jpg"
                break;
            case "format":
                url = "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/HINH_THUC_HOC_ioyenk.jpg"
                break;
            case "time":
                url = "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/THOI_GIAN_HOC_v5qrks.jpg"
                break;
            case "fiveStarts":
                url = "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/5_SAO_elyv9x.jpg"
                break;
            default:
                break;
        }
        return url
    }
    const featureTab = (tab) => {
        switch (tab) {
            case "subject":
                tab = "?????i t?????ng"
                break;
            case "format":
                tab = "H??nh th???c"
                break;
            case "time":
                tab = "Th???i gian"
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
                            {/* <Image src={slug.toLowerCase() === "mavl" ? MAVLFeatureImage(a) : MTFeatureImage(a)} width="100%" /> */}
                            <Image src={featureObj[slug.toLowerCase()][a]} width="100%" />
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