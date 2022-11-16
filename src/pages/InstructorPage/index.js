import { faCheck, faCheckCircle, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { slugTranslate } from '../../utility/slugTranslate'
import "./style.css"

export const InstructorPage = () => {
    const { slug } = useParams()
    const instructor = slugTranslate({ slug, target: "instructors" })
    return (
        <section id='instructor-page' className='mt-md-5 mb-md-7 mx-md-7'>
            <Container>
                <Row>
                    <Col md={4} className='text-center'>
                        <div className='mb-5'>
                            <img width={"100%"} src={instructor.img} alt={slug} />
                        </div>
                        <p className="px-4">"The future belongs to those who believe in the beauty of their dreams."</p>
                        <small >-Eleanor Roosevelt-</small>
                        {/* <ul>
                            <li>Name: </li>
                            <li>Email: </li>
                            <li>Or Quote: </li>
                        </ul> */}
                    </Col>
                    <Col md={8} className="pt-5">
                        <h2 className='fw-bolder' >{instructor.name}
                            <span style={{

                                color: "#1a46e3",
                                marginLeft: "5px"
                            }}>
                                <FontAwesomeIcon style={{ width: "14px", }} icon={faCheckCircle} />
                            </span>
                        </h2>
                        <p className='mb-4' style={{ color: "#6c6c6c" }}>{instructor.title}</p>
                        {/* <hr /> */}
                        {/* <h4 className='mb-5'>Biography</h4> */}
                        <p style={{ lineHeight: '1.7' }} className="text-main text-justify">{instructor.bio}</p>
                        <hr className='mt-4' />
                        <h4 className='mb-5'>Thông tin sơ lược</h4>
                        <ul className='fa-ul'>
                            {instructor.info.map((inf, idx) => (
                                <li key={idx} className="mb-3 text-justify" style={{ lineHeight: '1.7' }}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {inf}
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <h4 className='mb-5'>Kinh nghiệm giảng dạy ngoại ngữ</h4>
                        <ul className='fa-ul'>
                            {instructor.exp.map((e, idx) => (
                                <li key={idx} className="mb-3 text-justify" style={{ lineHeight: '1.7' }}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {e}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
