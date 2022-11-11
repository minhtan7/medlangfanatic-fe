import { faCertificate, faCheck, faCircleCheck, faPenRuler, faSchoolCircleCheck, faWifiStrong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { CourseThumbnailVertical, CourseThumbnailVerticalMT } from '../../components/CourseThumbnail'
import ReactCardCarousel from "react-card-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from '../../asset/quote.svg'

import { isMobile } from 'react-device-detect';

import "./style.css"
import BlogCard from '../../features/blog/BlogCard'
import { blogContent, instructors } from '../../mockData'
import ToastMsg from '../../components/ToastMsg.js'
import { ToTopArrowNormalUse } from '../../components/ToTopArrow'


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
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};



const HomePage = () => {
    return (
        <>
            <CTA />
            {isMobile ? <WhyMedLangMobile /> : <WhyMedLangWeb />}

            <InstructorList instructors={instructors} />
            <CourseList />
            <FeedBackList />
            <BlogSession />
            <VideoSession />
            <PodCastHP />
            <SubscriptionHP />
            <ToTopArrowNormalUse />
        </>
    )
}

const VideoSession = () => {
    return (
        <div id="video-session" className='mb-4 mb-md-5 mx-md-7'>
            <Container className='h-100'>
                <h1 className='mb-4'>
                    <span className='text-main fw-bold'>Tài liệu</span>
                    <br />
                    <span className='text-30'>Y khoa chọn lọc</span>
                </h1>
                <Row>
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <div className="video-thumbnail left px-3 pb-1 pt-3">
                            <div>
                                <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">
                                    <img width="100%" src="./images/document_xray.jpeg" alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">

                                <p className='text-16 pt-3'>Bộ từ vựng X-quang lồng ngực (Fleishner 2008)</p>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        {isMobile ? <VideoSessionRightMobile /> : <VideoSessionRightWeb />}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const DOCUMENT_FREE = [
    {
        image: "./images/document_ban-ron-lam-sao-hoc-tieng-anh.jpeg",
        title: "Bận rộn làm sao học tiếng Anh",
        link: "https://drive.google.com/file/d/1bomzB9sYaQQ6tGMVRBaqNig3D6f4WUCD/view?usp=sharing"
    },
    {
        image: "./images/document_MAVL.jpeg",
        title: "Medical Academic\nVocabulary List",
        link: "https://drive.google.com/file/d/14gR4lureVsFvVQfzNkVea_y0rhfbQ2-3/view?usp=sharing"
    },
    {
        image: "./images/document_prefix-suffix.jpeg",
        title: "A comprehensive list of prefixes, suffixes, and combining forms",
        link: "https://drive.google.com/file/d/1zHqOXs5SYbghJ5zVsHUDBOa-YR0XJ8W3/view?usp=sharing"
    },
    {
        image: "./images/document_cach-hoi-benh-su-bang-tieng-anh.jpeg",
        title: "Học cách hỏi bệnh sử bằng tiếng Anh như thế nào?",
        link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing"
    }
]
const VideoSessionRightWeb = () => {
    return (
        <Row style={{ height: "100%" }}>
            {
                DOCUMENT_FREE.map((d, index) => (
                    <Col md={6} className="h-50 " style={index < 2 ? { paddingBottom: "0.2rem" } : { paddingTop: "0.2rem" }}>
                        <div className='video-thumbnail px-3 pt-3'>
                            <div  >
                                <a target="_blank" href={d.link} rel="noreferrer">
                                    <img width="100%" src={d.image} alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href={d.link} rel="noreferrer">
                                <p className="mb-0 pt-2 text-14" >{d.title}</p>
                            </a>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}

const VideoSessionRightMobile = () => {
    return (
        <>
            {DOCUMENT_FREE.map((d, index) => (
                <div key={index} className='d-flex mb-2 video-thumbnail-mobile'>
                    <div className='box-shadow-card' style={{ borderRadius: "10px" }}>
                        <a target="_blank" href={d.link} rel="noreferrer">
                            <img width="100%" src={d.image} alt="video" />
                        </a>
                    </div>
                    <a target="_blank" href={d.link} rel="noreferrer">
                        <p className=" ps-4 fw-bold" >{d.title}</p>
                    </a>
                </div>
            ))}
        </>
    )
}


const SUBSRIBE_MESSAGE_SUCCESS = "Cám ơn bạn đã đăng ký!! Bạn kiểm tra mail hàng tuần nhé"
const SUBSRIBE_MESSAGE_FAIL = "Có trục trặc xảy ra. Bạn vui lòng tải lại trang và thử lần nữa nhé. Cám ơn bạn!"

const SubscriptionHP = () => {
    const [data, setData] = useState({
        email: "",
        name: "bạn"
    })
    const [show, setShow] = useState(false)
    const [mess, setMess] = useState("")
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://medlangfanatic.pipedrive.com/v1/persons?api_token=${process.env.REACT_APP_PIPEDRIVE_API}`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, marketing_status: "subscribed" })
        });
        const d = await res.json()
        setMess(d.success ? SUBSRIBE_MESSAGE_SUCCESS : SUBSRIBE_MESSAGE_FAIL)
        setShow(true)
    }
    return (
        <div id="subscription-session" className='mb-md-5 overflow-hidden mx-md-7'>
            <Container className='h-100'>
                <Row className='flex-column flex-md-row'>
                    <Col className='d-flex mb-2 mb-md-0'>
                        <h2 className='my-auto mb-2 mb-md-0 '>Đăng ký nhận Tài liệu<br /> miễn phí hàng tuần!</h2>
                    </Col>
                    <Col className='m-auto'>
                        <form onSubmit={handleSubmit} className="position-relative">
                            <div>
                                <input onChange={handleChange} name='email' type="email" placeholder="Email..." />
                                <Button className='subscription-span position-md-absolute' >Đăng ký</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <ToastMsg show={show} setShow={setShow} message={mess} />
        </div>
    )
}

const PODCASTS = [
    {
        title: "34",
        image: "./images/podcast-34.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7MwAofZ0kbpgWaiJjeILyK",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "33",
        image: "./images/podcast-33.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/69FYPawJOY5qaTqd0yzJcl",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "32",
        image: "./images/podcast-32.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/0GfJKHZYhPpj1oK6Hi9Ci5",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "31",
        image: "./images/podcast-31.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5b0nCW1uuqsDcthYJPFQW7",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "30",
        image: "./images/podcast-30.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5z7bYLe8k5PpSYoQqashCJ",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "29",
        image: "./images/podcast-29.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5Fa8PbZc6NUtfxlU8rHh56",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "28",
        image: "./images/podcast-28.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/1kvme0BvAHKuRA3HiWbzuS",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "27",
        image: "./images/podcast-27.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2Q3mN6o51vjM1Mf3MSwZ1m",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "26",
        image: "./images/podcast-26.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2h3j6mJYueKfrn3i14KnOy",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "25",
        image: "./images/podcast-25.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7w0i2lDQVwCbIWk9fP7LTx",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "24",
        image: "./images/podcast-24.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/24dsJ7tTNZCQxlN6whtFAm",
                siteName: "spotify"
            }
        ]
    }

]

const PodCastHP = () => {
    const navigate = useNavigate()
    return (
        <div id="podcast-session" className='mb-6 mx-md-7 mt-md-5 pt-md-5'>
            <Container className='h-100 '>
                <h1 className='text-main fw-bold mb-4'>Podcast</h1>
                <Carousel responsive={responsivePodcast}>
                    {PODCASTS.map((p, index) => (
                        <div key={index} style={{ width: "80%", margin: "auto", }}>
                            <a href={p.siteLink[0].link} rel="noreferrer" target="_blank">
                                <img width="100%" src={p.image} alt={p.title} />
                            </a>
                        </div>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}

const BlogSession = () => {
    const navigate = useNavigate()
    return (
        <div id="blog-session" className='mb-4 mb-md-5'>
            <div className='mx-md-7'>
                <Container className='h-100'>
                    <h1 className='mb-4'>
                        <span className='text-main fw-bold' onClick={() => navigate("/blogs")}>Blogs </span>
                        <br />
                        <span className='text-30'>
                            chia sẻ kinh nghiệm
                        </span>
                        <Link to="/blogs" className='visit-blog d-none d-md-block'><i>Xem thêm blogs</i></Link>
                    </h1>
                    <Carousel responsive={responsive}>
                        {blogContent.map(blog => (
                            // <div style={{ padding: "1rem 2rem" }}>
                            <div key={blog._id} style={{ marginRight: "3rem", paddingBottom: "1rem" }}>
                                <BlogCard blog={blog} length="100" />
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </div>
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

            <div className="container-style">
                <ReactCardCarousel autoplay={true} autoplay_speed={50000}>
                    {fbs.map(fb => (
                        <Card className="card-style" key={fb.name}>
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
    "./images/student_fb_1.jpg",
    "./images/student_fb_2.jpg",
    "./images/student_fb_3.jpg",
    "./images/student_fb_4.jpg",
    "./images/student_fb_5.jpg"
]
const FeedBackList = () => {
    const circleListFn = (arr, index) => {
        if (index === -1) {
            return (<ul><li className='student-icon last '>
                <img src="./images/plus-icon.png" alt="student icon" width={40} />
            </li></ul>)
        }
        return (<ul><li className='student-icon '>
            <img src={arr[index]} alt="student icon" />
            {circleListFn(arr, index - 1)}
        </li></ul>)
    }

    return (
        <div id="feedback-list" className='mb-4 my-md-5 py-md-5 mx-md-7'>
            <Container >
                <Row xs={1} md={12} className="g-4 my-md-5">
                    <Col xs={12} md={5} className="text-40 ">
                        {/* <h1 className='fw-bold text-main ' > </h1> */}
                        <h1 className='mb-2 mb-md-5'>
                            <span className='text-main fw-bold'>Feedback </span>
                            -<br />Học viên nói gì?
                        </h1>
                        <ul className='d-flex' >
                            {circleListFn(LIST_FB_IMAGE, LIST_FB_IMAGE.length - 1)}
                        </ul>

                    </Col>
                    <Col xs={12} md={6} >
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
        content: "Học trực tuyến"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Từ 3 - 6 tháng"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Tương tác Online"
    }

]

const CourseList = () => {
    return (
        <div id="course-list-session" className='text-center mb-4 mb-md-5 '>
            <Container className='mt-5 mx-md-7'>
                {
                    !isMobile ?
                        (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện khả năng ngoại ngữ<br /> và nâng cao kỹ năng giao tiếp
                            </h1>
                        )
                        : (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện ngoại ngữ<br /> và nâng cao<br /> kỹ năng giao tiếp
                            </h1>
                        )
                }
                <small ><i>Những sản phẩm chất lượng cao của MLF sẽ là lời tri ân chân thành nhất đến với mọi người!</i></small>
                <ul className='fa-ul text-12 mt-3' >
                    {COURSE_LIST_ICON.map(icon => (
                        <li key={icon.content} className="d-inline-block me-5">
                            <span className="fa-li" >{icon.icon}</span>{icon.content}
                        </li>

                    ))}

                </ul>

                <Row xs={1} md={12} className="g-4 p-3 m-md-5 mt-md-2">
                    <Col xs={0} md={2}></Col>
                    <Col xs={12} md={4}>
                        <CourseThumbnailVertical />
                    </Col>
                    <Col xs={12} md={4}>
                        <CourseThumbnailVerticalMT />
                    </Col>

                    <Col xs={0} md={2}></Col>
                </Row>
            </Container>
        </div >
    )
}

const InstructorList = ({ instructors }) => {
    return (
        <div id="hp-instructor-card" className='mb-5 mt-5 text-justify mx-md-7'>
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
                            (index % 2 === 0 ?
                                (<Col md={6} key={instructor.name} className="mb-2">
                                    <InstructorCardLeft instructor={instructor} />
                                </Col>) : (
                                    <Col md={6} key={instructor.name} className="mb-2">
                                        <InstructorCardRight instructor={instructor} />
                                    </Col>
                                ))
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
                            {instructor.name.split("\n").map(b => (<span key={b}>{b}<br /></span>))}
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
            </div>
        </>
    )
}

export const CTA = () => {
    const navigate = useNavigate()
    return (
        <div id="cta-homepage" style={{ height: "514px" }} className="mb-5 mt-5 mx-md-7">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className=' d-flex justify-content-center align-items-center'>
                        <div className='w-100'>
                            <p className='mb-4'>Cùng Med Lang Fanatic</p>
                            <h1 className='text-main'>Khám phá tri thức mới</h1>
                            <h1 className='text-main'>chuyên ngành Y Khoa</h1>
                            <h1 className='text-main mb-4'>thông qua Tiếng Anh</h1>
                            <h4 className='fw-light text-main mb-5'><i>Nền tảng học Tiếng Anh Y Khoa trực tuyến</i></h4>
                            <div className='mb-5'>
                                <a href='#course-list-session' >
                                    <Button
                                        // onClick={() => navigate("/register-form")}
                                        variant="primary" className='btn-primary-contrast btn-sign-up-contrast py-2 me-3 mb-2 mb-md-0' >
                                        <span>Các khóa học</span>
                                    </Button>
                                </a>
                                <a href='#hp-instructor-card'>
                                    <Button
                                        // onClick={() => navigate("/register - form")} 
                                        variant="primary" className='btn-sign-up py-2' ><span>Giảng viên</span></Button>
                                </a>
                            </div>
                            <p><i>Dare to open the box!</i></p>
                        </div >
                    </Col >
                    <Col xs={12} md={6} className='d-none d-md-block m-auto'>
                        <div className='text-center'>
                            <img width="550px" alt="hero" src='./images/homepage-hero.jpg' />
                        </div>
                        <div className='cta-hung'>
                            <div className='d-flex'>
                                <div className='rounded-circle cta-left me-3'>
                                    <img width="60px" src="./images/dr.hung.webp" alt="dr.Hung" />
                                </div>
                                <div className='cta-right d-flex flex-column justify-content-center'>
                                    <p className='mb-0 fw-bold'>Hưng Trần from MLF</p>
                                    <small>@founder</small>
                                </div>
                            </div>
                            <p className='mb-0'>"Another way to learn Medical English"</p>
                        </div>
                    </Col>
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
        title: "Class options",
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
        <section id="why-medlang-session" >
            <div className='mb-7 mx-md-7'>
                <Container >
                    <Row>
                        <Col md={6} className="py-5 m-auto left" >
                            <h1 className='fw-bold text-main mb-5'>Why online<br />learning method</h1>
                            <p className='text-16' style={{ paddingRight: "3rem" }}>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                            <Button variant='primary' className='btn-primary-contrast btn-sign-up-contrast'>Chi tiết khóa học</Button>
                        </Col>
                        <Col md={6} >
                            <Row>
                                {WHY_SESSION_ICON.map((icon, index) => (
                                    <Col md={6} className="mb-4 why-web-icon">
                                        <span className='why-icon'>
                                            {icon.icon}
                                        </span>
                                        <h4 className='fw-bold text-main'>{icon.title}</h4>
                                        <p className="text-12">{icon.content}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section >
    )
}

const WHY_TAB = [
    {}
]
const WhyMedLangMobile = () => {
    const [slide, setSlide] = useState(0)

    return (
        <section id="why-medlang-session" className='mb-4 mb-md-5 mobile mx-md-7'>
            <Container>
                <Row>
                    <Col md={6} className="pb-5 pt-0 m-auto">
                        <h1 className='fw-bold text-main mb-5'>Why online<br />learning method</h1>
                        <p className='text-16' style={{ paddingRight: "2rem" }}>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                        <Button variant='primary' className='btn-sign-up'>Tìm hiểu thêm</Button>
                    </Col>
                    <Col md={6} >
                        <div className='d-flex justify-content-between'>
                            {WHY_SESSION_ICON.map((icon, index) => (
                                <span key={index} className={`why-icon ${slide === index && "show"}`} onClick={() => setSlide(index)}>
                                    {icon.icon}
                                </span>
                            ))}
                        </div>
                        <div className='why-mob-content'>
                            {WHY_SESSION_ICON.map((icon, index) => (
                                <div key={index} className="mb-4 slideshow-container" >
                                    <div className={` mySlides faded ${slide === index ? "d-flex flex-column  flex-lg-row" : ""}`}>
                                        <h4 className='fw-bold text-main'>{icon.title}</h4>
                                        <p style={{ paddingRight: "50px" }} className="text-12">{icon.content}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >)
}

export default HomePage



// const containerStyle = {
//     position: "relative",
//     height: "100%",
//     width: "100%",
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "middle"
// };

// const cardStyle = {
//     height: "fit-content",
//     width: "500px",
//     paddingTop: "10px",
//     paddingBottom: "10px",
//     textAlign: "center",
//     background: "white",
//     color: "var(--main)",
//     fontFamily: "sans-serif",
//     fontSize: "16px",
//     borderRadius: "10px",
//     boxSizing: "border-box",
// };