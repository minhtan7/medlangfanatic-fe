import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../apiService'
import "./style.css"

import { Hero } from '../../components/Hero/Hero'
import { StudentFeedback } from '../../components/StudentFeedback'
import { CourseDetailContent } from '../../components/CourseDetailContent'
import { Instructors } from '../../components/Instructor'
import { Features } from '../../components/Feature'
import { FAQ } from '../../components/FAQ'

import { about, faq, feedBack, instructors } from '../../mockData'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Cover } from '../../components/Cover/Cover'
import { ToTopArrow } from '../../components/ToTopArrow'


const slugs = {
    "oral-presentation": 1529640,
    "MAVL": 1751294
}
const defaultHeight = 72;


const CoursePage = () => {
    const { slug } = useParams()
    const [course, setCourse] = useState(null)
    const [chapters, setChapters] = useState(null)

    useEffect(() => {
        const getCourse = async () => {
            const res = await api.get(`courses/${slugs[slug]}`)
            setCourse(res.data.data)
            setChapters(res.data.data.chapters)
        }
        getCourse()
    }, [slug])

    return (
        <>
            <Hero course={course} />
            <Cover />
            <Container>
                <Row>
                    <Col xs={12} md={8} className="px-0 ">
                        <Features about={about} course={course} />
                        <CourseDetailContent chapters={chapters} />
                        <Instructors instructors={instructors} />
                        <StudentFeedback defaultHeight={defaultHeight} feedBack={feedBack} />
                        <FAQ faq={faq} />
                    </Col>
                    <Col xs={0} sm={0} md={4} className="d-none d-sm-none d-md-block">
                        <CourseCard course={course} />
                    </Col>
                </Row>
            </Container>
            <CTA />
            <ToTopArrow course={course} />
        </>
    )
}

export const CTA = () => {
    const navigate = useNavigate()

    return (
        <div id="cta" style={{ height: "514px" }}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='text-center d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
                            <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
                            <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
                            <Button onClick={() => navigate("/register-form")} variant="primary" className='btn-sign-up py-2' ><span>Đăng ký ngay</span></Button>
                        </div>
                    </Col>
                    <Col className='d-none d-md-block'></Col>
                </Row>
            </Container>
        </div>
    )
}


export default CoursePage
