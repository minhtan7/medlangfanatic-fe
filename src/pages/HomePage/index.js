import { faBriefcaseClock, faCertificate, faCheck, faCircleCheck, faClock, faClockFour, faClockRotateLeft, faFileCircleExclamation, faFileCircleQuestion, faNetworkWired, faPenRuler, faSchoolCircleCheck, faSchoolCircleXmark, faTimes, faWifi, faWifi3, faWifiStrong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { CourseThumbnailVertical } from '../../components/CourseThumbnail'
import { handleChangeSlide } from '../../utils/changeSlide'
import ReactCardCarousel from "react-card-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from '../../asset/quote.svg'

import "./style.css"
import BlogCard from '../../features/blog/BlogCard'
import { instructors } from '../../mockData'

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
const responsivePodcast = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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
    height: "100%",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
};

const cardStyle = {
    height: "fit-content",
    width: "600px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    background: "white",
    color: "var(--main)",
    fontFamily: "sans-serif",
    fontSize: "16px",
    borderRadius: "10px",
    boxSizing: "border-box",
};

const HomePage = () => {
    return (
        <>
            <CTA />
            <WhyMedLangWeb />
            <InstructorList instructors={instructors} />
            <CourseList />
            <FeedBackList />
            <BlogSession />
            <PodCastHP />
            <SubscriptionHP />
        </>
    )
}

const SubscriptionHP = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div id="subscription-session" className='mb-6 overflow-hidden'>
            <Container className='h-100'>

                <Row>
                    <Col>
                        <h2>Join now get class certificates</h2>
                    </Col>
                    <Col className='m-auto'>
                        <form onSubmit={handleSubmit} className="position-relative">
                            <div>
                                <input onChange={handleChange} name='email' type="email" placeholder="Email address" />
                                <Button className='subscription-span position-absolute' >Get started</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const PodCastHP = () => {
    return (
        <div id="podcast-session" className='mb-6'>
            <Container className='h-100'>
                <h1 className='text-main fw-bold mb-4'>Spotify List</h1>
                <Carousel responsive={responsivePodcast}>
                    {new Array(10).fill(null).map(p => (
                        <div style={{ width: "80%", margin: "auto" }}>
                            <img width="100%" src="./images/podcast.webp" alt="podcast img" />
                        </div>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}

const BlogSession = () => {
    return (
        <div id="blog-session" className='mb-5'>
            <Container className='h-100'>
                <h1 className='mb-4'>
                    <span className='text-main fw-bold'>Blogs </span>
                    that <br /> can help your more
                    <Link to="/blogs" className='visit-blog'>Visit our blogs</Link>
                </h1>
                <Carousel responsive={responsive}>
                    {blogContent.map(blog => (
                        // <div style={{ padding: "1rem 2rem" }}>
                        <div style={{ marginRight: "1rem" }}>
                            <BlogCard blog={blog} />
                        </div>
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
                                    <small style={{ fontSize: "15px", textTransform: "lowercase" }}>- {fb.title} -</small>
                                </Card.Title>
                                <Card.Text className='text-black position-relative'>

                                    {fb.content}
                                    <span className='slide-quote' style={{ zIndex: 1, top: "1rem", left: "1.5rem", opacity: "0.7" }}>
                                        {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                        <img src={quote} alt="quote sign" />
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ReactCardCarousel>
            </div>
        </>
    )
}
const LIST_FB_IMAGE = [
    "./images/student_icon.svg",
    "./images/student_icon.svg",
    "./images/student_icon.svg",
    "./images/student_icon.svg",
    "./images/student_icon.svg"
]
const FeedBackList = () => {
    const circleListFn = (arr, index) => {
        if (index === -1) {
            return (<li className='student-icon last'>
                <img src="./images/plus-icon.png" alt="student icon" width={40} />
            </li>)
        }
        return (<li className='student-icon'>
            <img src={arr[index]} alt="student icon" width={40} />
            {circleListFn(arr, index - 1)}
        </li>)
    }

    return (
        <div id="feedback-list" className='mt-5 mb-6 py-5'>
            <Container >
                <Row xs={1} md={12} className="g-4 m-5">
                    <Col md={4} className="text-40 ">
                        {/* <h1 className='fw-bold text-main ' > </h1> */}
                        <h1 className='mb-5'>
                            <span className='text-main fw-bold'>Feedback </span>
                            -<br />Học viên nói gì?
                        </h1>
                        <ul className='d-flex' >
                            {circleListFn(LIST_FB_IMAGE, LIST_FB_IMAGE.length - 1)}
                        </ul>

                    </Col>
                    <Col md={8}>
                        <FeedBackCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const COURSE_LIST_ICON = [
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Live classes"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Flexible - 2 to 6 months"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Online"
    }

]

const CourseList = () => {
    return (
        <div id="course-list-session" className='text-center mb-5'>
            <Container className='mt-5'>
                <h1 className='fw-bold text-main'>Build your dream career<br /> with our Medical English courses</h1>
                <p>Start a new career in weeks with our courses</p>

                <ul className='fa-ul text-12' >
                    {COURSE_LIST_ICON.map(icon => (
                        <li key={icon.content} className="d-inline-block me-5">
                            <span className="fa-li" >{icon.icon}</span>{icon.content}
                        </li>

                    ))}

                </ul>

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

const InstructorList = ({ instructors }) => {
    return (
        <div id="hp-instructor-card" className='mb-6 text-justify'>
            <Container>
                <Row>
                    {/* <Col md={1}></Col> */}
                    <Col>
                        <h1 className='fw-bold text-main'>Giảng viên</h1>
                    </Col>
                </Row>
                <Row >
                    {/* <Col md={1}></Col> */}
                    <Col md={12} >
                        <Row>
                            {instructors.map((instructor, index) =>
                            (<Col md={6}>
                                <InstructorCardLeft instructor={instructor} />
                            </Col>)
                            )}
                        </Row>
                    </Col>
                    {/* <Col md={1}></Col> */}

                </Row>
            </Container>

        </div>
    )
}

const InstructorCardLeft = ({ instructor }) => {
    return (
        <>
            <div className="new-speaker my-2">
                <div className="speaker-right">
                    <div>
                        <ul className="speaker-topic mb-0 fa-ul">
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="speaker-left">
                    <div style={{ height: "60%" }}>
                        <div className="team-image">
                            <img src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className="speaker-sub">{instructor.titleFull}</p>
                        <p className="speaker-name mb-0 fw-bold" >
                            {instructor.name.split("\n").map(b => (<>{b}<br /></>))}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const InstructorCardRight = ({ instructor }) => {
    return (
        <>
            <div className="new-speaker  my-2">
                <div className="speaker-left">
                    <div style={{ height: "60%" }}>
                        <div className="team-image">
                            <img src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className="speaker-sub">{instructor.titleFull}</p>
                        <p className="speaker-name mb-0 fw-bold" >
                            {instructor.name.split("\n").map(b => (<>{b}<br /></>))}
                        </p>
                    </div>
                </div>
                <div className="speaker-right">
                    <div>
                        <ul className="speaker-topic mb-0">
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CTA = () => {
    const navigate = useNavigate()
    return (
        <div id="cta" style={{ height: "514px" }} className="mb-7">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='text-center d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
                            <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
                            <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
                            <Button onClick={() => navigate("/register - form")} variant="primary" className='btn-sign-up py-2' ><span>Đăng ký ngay</span></Button>
                        </div >
                    </Col >
                    <Col className='d-none d-md-block'></Col>
                </Row >
            </Container >
        </div >
    )
}

const WHY_SESSION_ICON = [
    {
        icon: <FontAwesomeIcon icon={faSchoolCircleCheck} />,
        title: "Flexible time",
        content: "Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faCertificate} />,
        title: "Certificate",
        content: "Online education allows teachers and students to set their own pace of learning and there is added flexibility in setting a schedule that fits everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faPenRuler} />,
        title: "Class program options",
        content: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faWifiStrong} />,
        title: "Access anywhere",
        content: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone's"
    }
]

const WhyMedLangWeb = () => {
    return (
        <section id="why-medlang-session" className='mb-7'>
            <Container>
                <Row>
                    <Col md={6} className="py-5 px-5 m-auto">
                        <h1 className='fw-bold text-main mb-5'>Why online<br />learning method</h1>
                        <p className='text-16' style={{ paddingRight: "2rem" }}>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                        <Button variant='primary' className='btn-sign-up'>Tìm hiểu thêm</Button>
                    </Col>
                    <Col md={6} >
                        <Row>
                            {WHY_SESSION_ICON.map((icon, index) => (
                                <Col md={6} className="mb-4">
                                    <span className='why-icon'>
                                        {icon.icon}
                                    </span>
                                    <h4 className='fw-bold text-main'>{icon.title}</h4>
                                    <p style={{ paddingRight: "50px" }} className="text-12">{icon.content}</p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section >
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

