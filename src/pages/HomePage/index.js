import { faCircleCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CourseThumbnailVertical } from '../../components/CourseThumbnail'
import { handleChangeSlide } from '../../utils/changeSlide'
import ReactCardCarousel from "react-card-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from '../../asset/quote.svg'

import "./style.css"
import BlogCard from '../../features/blog/BlogCard'

const today = (new Date()).toString()
const blogContent = [
    {
        _id: 1,
        title: "McKinsey experts bring sustainability and inclusion to the skies",
        content: "At the world’s largest air show, our colleagues explored sustainable aviation, building inclusive talent pipelines, and improving business performance against once-in-career disruptions.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    },
    {
        _id: 2,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    },
    {
        _id: 3,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    },
    {
        _id: 4,
        title: "McKinsey experts bring sustainability and inclusion to the skies",
        content: "At the world’s largest air show, our colleagues explored sustainable aviation, building inclusive talent pipelines, and improving business performance against once-in-career disruptions.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    },
    {
        _id: 5,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    },
    {
        _id: 6,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: [{ name: "sustainability" }, { name: "inclusive growth" }],
        createAt: today,
        image: "./images/blog-page.jpeg"
    }
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const containerStyle = {
    position: "relative",
    height: "25rem",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
};

const cardStyle = {
    height: "220px",
    width: "450px",
    paddingTop: "30px",
    textAlign: "center",
    background: "#fcf5e8",
    color: "var(--main)",
    fontFamily: "sans-serif",
    fontSize: "12px",
    borderRadius: "10px",
    boxSizing: "border-box",
};

const HomePage = () => {
    return (
        <>
            <CTA />
            <WhyMedLangWeb />
            <InstructorList />
            <CourseList />
            <FeedBackList />
            <BlogSession />
        </>
    )
}

const BlogSession = () => {
    return (
        <div id="blog-session" >
            <Container className='h-100'>
                <h1><span>Blog</span> that <br /> can help your more</h1>
                <Carousel responsive={responsive}>
                    {blogContent.map(blog => (
                        <BlogCard blog={blog} />
                    ))}
                </Carousel>


            </Container>
        </div>
    )
}

const FeedBackCard = () => {
    const fbs = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            name: "minh tân",
            title: "Bác sĩ"
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            name: "thanh ngân",
            title: "Bác sĩ"
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            name: "jasmin ha",
            title: "Bác sĩ"
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            name: "matthew duffin",
            title: "Bác sĩ"
        }
    ]
    return (
        <>

            <div style={containerStyle}>
                <ReactCardCarousel autoplay={true} autoplay_speed={50000}>
                    {fbs.map(fb => (
                        <Card style={cardStyle}>
                            {/* <Card.Img variant="top" src="/images/student_icon.svg"
                                style={{ width: "90px", margin: "auto" }} className='doctor-icon' /> */}

                            <Card.Body>
                                <Card.Title style={{ textTransform: "uppercase" }}>
                                    {fb.name} <br />
                                    <small style={{ fontSize: "10px", textTransform: "lowercase" }}>- {fb.title} -</small>
                                </Card.Title>
                                <Card.Text>
                                    {fb.content}

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ReactCardCarousel>
            </div>
        </>
    )
}
const FeedBackList = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row xs={1} md={12} className="g-4 m-5">
                    <Col md={4}>
                        <h3>Review</h3>
                        <h1>What are the learners saying about us</h1>
                    </Col>
                    <Col md={8}>
                        <FeedBackCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const CourseList = () => {
    return (
        <div>
            <Container className='my-5'>
                <h1>Build your dream career with our Medical English courses</h1>
                <p>Start a new career in weeks with our courses</p>
                <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Live classes
                </span>
                <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Flexible - 2 to 6 months
                </span>
                <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    Online
                </span>

                <Row xs={1} md={12} className="g-4 m-5">
                    <Col md={2}></Col>
                    <Col md={4}>
                        <CourseThumbnailVertical />
                    </Col>
                    <Col md={4}>
                        <CourseThumbnailVertical />
                    </Col>

                    <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

const InstructorList = () => {
    return (
        <div id="hp-instructor-card">
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Row>

                            {[0, 0, 0, 0, 0, 0].map(ins => (
                                <Col md={4} >
                                    <InstructorCard />
                                </Col>
                            )
                            )}
                        </Row>
                    </Col>
                    <Col md={1}></Col>

                </Row>
            </Container>

        </div>
    )
}

const InstructorCard = () => {
    return (
        <Card >
            <div className='wrapperImg'>
                < Card.Img variant="top" src="/images/dr.tram.webp" />
            </div>

            < Card.Body className="pb-0">
                <Card.Title style={{ textAlign: "center", fontSize: "1.1rem" }}>
                    Nguyễn Ngọc Quỳnh Trâm
                </Card.Title>


            </Card.Body >

            <Card.Body style={{ paddingTop: "0" }}>
                Bác sĩ
            </Card.Body>
        </Card >)
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

const WhyMedLangWeb = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Why online<br />learning method</h1>
                        <p>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                        <Button>Get Started</Button>
                    </Col>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <h4>Flexible time</h4>
                                <p>Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda</p>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <h4>Flexible time</h4>
                                <p>Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda</p>
                            </Col><Col md={6}>
                                <div>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <h4>Flexible time</h4>
                                <p>Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda</p>
                            </Col><Col md={6}>
                                <div>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <h4>Flexible time</h4>
                                <p>Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
const WhyMedLangMobile = () => {
    return (
        <section>
            this is why
        </section>
    )
}

export default HomePage

