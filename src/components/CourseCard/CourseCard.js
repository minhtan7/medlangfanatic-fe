import { faFileText, faNoteSticky, faPlayCircle, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, ListGroup, Placeholder } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useScript from '../../hook/useScript'
// import { formatTime } from '../../utility/formatTime'
import { Timer } from '../Timer/Timer'
import "./style.css"

export const CourseCard = ({ course }) => {
    // const { hours, minutes, seconds } = formatTime(course?.duration || 0)
    const navigate = useNavigate()

    useScript("https://tools.luckyorange.com/core/lo.js?site-id=a0c6a81c")
    useScript("https://www.googletagmanager.com/gtag/js?id=G-NJYDR7ML63")

    return course ?
        (<Card className='course-card d-none d-sm-none d-md-block'>
            < Card.Img variant="top" src="/images/thumbnail.svg" style={{ borderRadius: 0 }
            } />
            < Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>Chi phí khóa học:
                    <h2 style={{ color: "red", margin: "0 0 0.8rem" }}>3,899K</h2>
                </Card.Title>
                <Button onClick={() => navigate("/register-form")} variant="primary" className='btn-sign-up' ><span>Đăng ký ngay</span></Button>
            </Card.Body >
            <Card.Body>
                <Timer />
            </Card.Body>
            <Card.Body style={{ paddingTop: "0" }}>
                <p style={{ color: "black", marginBottom: '0' }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon icon={faFileText} /></span>
                            Bài tập tương tác đa dạng
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon icon={faPlayCircle} /></span>
                            Video phân tích hàm nghĩa của các từ
                        </li>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon icon={faNoteSticky} /></span>
                            Flashcards ôn tập
                        </li>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card >) :
        (<Card className='course-card' >
            {/* <Card.Img variant="top" src="/images/case-presentation-thumbnail.webp" /> */}
            <Placeholder size="lg" as={"div"} animation="glow" style={{ borderRadius: 0 }} >
                <Placeholder xs={12} />
            </Placeholder>

            <Card.Body style={{ color: "black" }}>
                <Placeholder size="sm" as={Card.Title} animation="glow" >
                    <Placeholder xs={12} />
                </Placeholder>
                {/* <Button target="_blank" href='https://forms.gle/EtHE8p7CxnrQHErq9' variant="primary" className='btn-sign-up' >Đăng ký ngay</Button> */}
                <Placeholder.Button className='btn-sign-up' variant="primary" xs={12} />
            </Card.Body>
            <Card.Body>
                <Timer />
            </Card.Body>
            <Card.Body>
                <p style={{ color: "black" }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>)
}