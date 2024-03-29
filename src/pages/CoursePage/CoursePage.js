import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./style.css"

import { Hero } from '../../components/Hero/Hero'
import { StudentFeedback } from '../../components/StudentFeedback'
import { CourseDetailContent } from '../../components/CourseDetailContent'
import { Instructors } from '../../components/Instructor'
import { Features } from '../../components/Feature'
import { FAQ } from '../../components/FAQ'

import { Button, Col, Container, Row } from 'react-bootstrap'
import { CourseCard, RecruitBtn } from '../../components/CourseCard/CourseCard'
import { Cover, CoverCWP, CoverMedicalTerminology, CoverPCCS } from '../../components/Cover/Cover'
import { ToTopArrow } from '../../components/ToTopArrow'
// import jsxToString from 'jsx-to-string';
import { useFilterCssRoot } from '../../hook/useFilterCssRoot'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCourse } from '../../features/course/courseSlice'
import MetaDecorator from '../../components/utils/MetaDecorator'
import { slugTranslate } from '../../utility/slugTranslate'
import { Helmet } from 'react-helmet'


const slugs = {
    "medical-terminology": 2026776,
    "mavl": 1751294,
    "clinical-case-presentation": 1522731,
    "communication-with-patients-101": 1522730
}
const defaultHeight = 72;

const filterCss = (slug) => {
    switch (slug.toLowerCase()) {
        case "mavl":
            return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1", contrastLight: "#05feb12e" }
        case "medical-terminology":
            return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400", contrastLight: "#fac5ff" }
        case "clinical-case-presentation":
            return { main: "#0C3B2E", mainDark: "#6d9773", contrast: "#ffba00", contrastLight: "#bb8a52" }
        case "communication-with-patients-101":
            return { main: "#5F021F", mainDark: "#440217", contrast: "#ff8906", contrastLight: "#ffc6c7" }
        default:
            break;
    }
}

const CoursePage = () => {
    const { slug } = useParams()
    const [meta, setMeta] = useState({
        description: "",
        title: "",
        imageUrl: "",
        imageAlt: ""
    })

    useFilterCssRoot({ slug, ...filterCss(slug) })
    const dispatch = useDispatch()
    const course = useSelector(state => state.course.currentCourse)
    useEffect(() => {
        dispatch(getSingleCourse({ courseId: slugs[slug.toLowerCase()] }))
        setMeta(slugTranslate({ target: "metaData", slug }))
    }, [slug])

    return Object.keys(course).length && (
        <>
            <Helmet>
                <meta name='description' content={slug} />
            </Helmet>
            <MetaDecorator {...meta} />
            <Hero course={course} />
            {filterCover(course.slug.toLowerCase())}
            <Container>
                <Row>
                    <Col xs={12} md={8} className="px-0 ">
                        <Features course={course} />
                        <CourseDetailContent chapters={course.chapters} slug={slug} />
                        <Instructors instructors={course.instructors} />
                        <StudentFeedback defaultHeight={defaultHeight} feedBack={course.review} />
                        {slug === "clinical-case-presentation" ? null : <FAQ faq={course.faq} />}
                    </Col>
                    <Col xs={0} sm={0} md={4} className="d-none d-sm-none d-md-block">
                        <CourseCard course={course} />
                    </Col>
                </Row>
            </Container>
            <CTA course={course} />
            <ToTopArrow course={course} />
        </>
    )
}

const filterCover = (slug) => {
    switch (slug) {
        case "mavl":
            return <Cover />
        case "medical-terminology":
            return <CoverMedicalTerminology />
        case "clinical-case-presentation":
            return <CoverPCCS />
        case "communication-with-patients-101":
            return <CoverCWP />
        default:
            break;
    }
}

export const CTA = ({ course }) => {
    const navigate = useNavigate()
    // const ex = (
    //     <div className=''>
    //         <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
    //         <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
    //         <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
    //         <Button onClick={() => navigate(`/register-form/${slug}`)} variant="primary" className='btn-sign-up py-2' ><span>Đăng ký ngay</span></Button>
    //     </div>
    // )
    // console.log(typeof jsxToString(ex))
    return (
        <div id="cta" style={{ height: "514px" }}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='text-center d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
                            <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
                            <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
                            {course.slug === "clinical-case-presentation" ?
                                (<Button
                                    variant="primary"
                                    className='btn-sign-up py-2 mb-3'
                                ><span>
                                        Đã đủ học viên
                                    </span>
                                </Button>)
                                :
                                (<Button
                                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}`)} variant="primary"
                                    className='btn-sign-up py-2 mb-3'
                                ><span>
                                        Đăng ký ngay
                                    </span>
                                </Button>)
                            }


                            {course.slug === "mavl" && <RecruitBtn cursor={true} course={course} />}
                            {course.slug === "medical-terminology" && <RecruitBtn cursor={true} course={course} />}
                            {course.slug === "communication-with-patients-101" && <RecruitBtn cursor={true} course={course} />}
                        </div>
                    </Col>
                    <Col className='d-none d-md-block'></Col>
                </Row>
            </Container>
        </div>
    )
}



export default CoursePage
