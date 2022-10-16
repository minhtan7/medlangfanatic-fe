import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const HomePage = () => {
    return (
        <>
            <CTA />
            <WhyMedLangWeb />
            <InstructorList />
        </>
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

