import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useScript, useScriptFbShare } from '../../hook/useScript'
import "./style.css"

const today = (new Date()).toString()

const blogContent = [
    {
        _id: 1,
        title: "McKinsey experts bring sustainability and inclusion to the skies",
        content: `“Bác ơi, hãy xét nghiệm chỉ số CRP cho em nha.”

Một đồng nghiệp của tôi kể lại chuyện đã được một bệnh nhân yêu cầu như vậy. Bệnh nhân không sốt, không ổ nhiễm trùng trên lâm sàng, và các xét nghiệm chỉ số bạch cầu đều trong giới hạn bình thường. Sau khi hỏi thêm, bệnh nhân cho biết lý do muốn làm xét nghiệm thêm là vì bệnh nhân nội trú nằm giường bên cạnh có ho, và bà sợ lây cho phổi của bà.

Quan hệ của bác sĩ và bệnh nhân không còn là cơ chế 1 chiều xin – cho như ngày trước nữa, và để đạt được hiệu quả trong tư vấn, giao tiếp hai chiều và quyền được quyết định của khách hàng phải được tôn trọng. Nếu như trong mô hình “clinician-centered”, bác sĩ sẽ ngay lập tức bác bỏ việc thực hiện những xét nghiệm mà bác sĩ cho là “không cần thiết”, thì trong trong mô hình “patient-centered”, những mong muốn của bệnh nhân phải được tôn trọng. Điều đó có thể gây ức chế cho nhiều bác sĩ. Không sao, chúng ta đang hướng đến mô hình “relationship-centered”, khi đó chúng ta phải lắng nghe suy nghĩ của bệnh nhân, và có thể dùng kiến thức và kỹ năng giao tiếp của mình để trao đổi với bệnh nhân. Mục tiêu cuối cùng không phải là để cho thấy ai “mạnh” hơn ai, mà là hướng đến điều tốt nhất cho bệnh nhân.`,
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
    {
        _id: 2,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
    {
        _id: 3,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
    {
        _id: 4,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
    {
        _id: 5,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
    {
        _id: 6,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today,
        image: "/images/blog-page.jpeg"
    },
]

const SingleBlogPage = () => {
    const { id } = useParams()
    const blog = blogContent.filter(b => b._id === parseInt(id))[0]
    useScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0")
    return (
        <div>
            <Container>
                <Row className='pt-5'>
                    <Col xs={2}></Col>
                    <Col >
                        <div className=' pt-4'>
                            <Link to="/blogs" className='text-secondary text-decoration-none'>
                                <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                Về trang blogs
                            </Link>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row >
                    <Col xs={2}></Col>
                    <Col>
                        <h1 className='py-3'>{blog.title}</h1>
                        <div className='wrapper-fb-share-btn'>
                            <FontAwesomeIcon size='2x' icon={faFacebook} />
                            <div className="fb-share-button position-absolute "
                                data-href={`${process.env.REACT_APP_FRONTEND_URL}/blogs/${id}`}
                                data-layout="button_count">
                            </div>
                        </div>
                        <div>
                            <img src={blog.image} alt="blog" width="100%" />
                        </div>
                        <div className='py-4'>
                            {blog.topic.map((t, index) => (
                                <span>
                                    {t.toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                                </span>
                            ))}
                        </div>
                        <div>
                            <small className="text-muted">{dayjs(blog.createAt).format("DD/MM/YYYY")} - </small>
                            {blog.content}
                        </div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-end">
                        <div className='related-border'>
                            <p>Liên quan</p>
                            <small>Blogs</small>
                            <Link to="/blogs/3" className='related-link'>{blogContent[0].title}</Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default SingleBlogPage