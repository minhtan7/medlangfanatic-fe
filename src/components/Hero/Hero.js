import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Placeholder, Row } from 'react-bootstrap'
import { slugTranslate } from '../../utility/slugTranslate'
import "./style.css"
import { RecruitBtn } from '../CourseCard/CourseCard'

export const Hero = ({ course }) => {
    console.log(course)
    return <div id="hero" className='mb-5 bg-main position-relative overflow-hidden' style={{ color: "white", padding: "3rem 0 29px" }}>
        {course ? (<Container className='position-relative' style={{ zIndex: 1 }}>
            <Row >
                <Col xs={12} md={6} className="px-2 px-md-3 m-auto overflow-hidden" style={{ paddingTop: "4rem" }}>
                    {heroCourseName(course.slug)}
                    <ul className='fa-ul sub-title'>
                        {course.heroDescription.map(h => (
                            <li key={h}>
                                <span className="fa-li" >
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                {h}
                            </li>
                        ))}
                    </ul>
                    {course.slug === "mavl" && <RecruitBtn cursor={true} course={course} />}
                    {course.slug === "medical-terminology" && <RecruitBtn cursor={true} course={course} />}
                    {course.slug === "communication-with-patients-101" && <RecruitBtn cursor={true} course={course} />}


                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className='hero-image-wrapper'>
                        <div className='hero-image'>
                            <img width="100%" src={slugTranslate({ slug: course.slug, target: "hero" })} alt="hidden logo" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>) : (<Container >
            <Row >
                <Col xs={12} md={6} className="px-5"  >
                    <Placeholder size="sm" as={"h1"} animation="glow">
                        <Placeholder xs={8} /><br />
                        <Placeholder xs={4} />
                    </Placeholder>

                    <ul className='fa-ul'>
                        <li> <span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Cấu trúc của một ca lâm sàng được trình miệng bằng tiếng Anh</li>
                        <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Đi sâu vào phân tích cách trình bày hiệu quả cho từng phần riêng biệt. </li>
                        <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Công thức và từ vựng khác nhau</li>
                        <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Cấu trúc dễ học dễ áp dụng.</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <div className='hero-image'>
                        <img width="100%" src="/images/hero-image.webp" alt="hidden logo" />
                    </div>
                </Col>

            </Row>
        </Container>)}
        <div className='hidden-logo'>
            <img width="100%" src="/images/logo_transparent.webp" alt="hidden logo" />
        </div>

    </div>
}

const heroCourseName = (slug) => {

    switch (slug.toLowerCase()) {
        case "mavl":
            return <>
                <h1 className='title-animation anim-typewriter-first mb-3 text-contrast fw-bold ' >Medical Academic</h1>
                <h1 className='title-animation anim-typewriter-second mb-3 text-contrast fw-bold '> Vocabulary List</h1>
            </>
        case "medical-terminology":
            return <>
                <h1 className='title-animation anim-typewriter-first mb-3 text-contrast fw-bold ' >Medical Terminology</h1>
                {/* <h1 className='title-animation anim-typewriter-second mb-3 text-contrast fw-bold '> Vocabulary List</h1> */}
            </>
        case "clinical-case-presentation":
            return <>
                <h1 className='title-animation anim-typewriter-first mb-3 text-contrast fw-bold' style={{ fontSize: "2.5rem" }} >PRESENTING CLINICAL CASES</h1>
                <h1 className='title-animation anim-typewriter-second mb-3 text-contrast fw-bold' style={{ fontSize: "2.5rem" }}> FROM SCRATCH</h1>
            </>
        case "communication-with-patients-101":
            return <>
                <h1 className='title-animation anim-typewriter-first mb-3 text-contrast fw-bold' style={{ fontSize: "3.3rem" }} >COMMUNICATION </h1>
                <h1 className='title-animation anim-typewriter-second mb-3 text-contrast fw-bold' style={{ fontSize: "3.3rem" }}> WITH PATIENTS 101</h1>
            </>
        default:
            break;
    }
}
