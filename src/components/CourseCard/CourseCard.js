import { faFileText, faNoteSticky, faPlayCircle, faT, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, ListGroup, Placeholder } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useScript } from '../../hook/useScript'
import { slugTranslate } from '../../utility/slugTranslate'
// import { formatTime } from '../../utility/formatTime'
import { Timer } from '../Timer/Timer'
import "./style.css"

export const CourseCard = ({ course }) => {
    // const { hours, minutes, seconds } = formatTime(course?.duration || 0)
    const navigate = useNavigate()

    useScript(process.env.REACT_APP_LUCKY_ORANGE)
    useScript(process.env.REACT_APP_GG_TAG_MNG)
    return course ?
        (<Card className='course-card '>
            < Card.Img variant="top" src={slugTranslate({ slug: course.slug, target: "thumbnail" })} style={{ borderRadius: 0 }
            } />
            < Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>Chi phí khóa học:
                    <h2 style={{ color: "red", margin: "0 0 0.8rem" }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K</h2>
                </Card.Title>
                {/* <Button
                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}-trial`)}
                    className='btn-sign-up-contrast mb-2' >
                    <span>Học thử!</span>
                </Button> */}
                <Button
                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}`)}
                    variant="primary" className='btn-sign-up' >
                    <span>Đăng ký ngay</span>
                </Button>
            </Card.Body >
            {course.slug === "clinical-case-presentation" ? null : (
                <Card.Body>
                    <Timer targetDate={slugTranslate({ slug: course.slug, target: "targetDate" })} />
                </Card.Body>
            )}
            {course.slug === "clinical-case-presentation" ? (
                <Card.Body>
                    < Card.Img variant="top" id="card-coupon"
                        src="https://res.cloudinary.com/tanvo/image/upload/v1672176320/medlangfanatic/courses/presenting-clinical-case-from-scratch/3.500k_hx7qoc.jpg"
                        style={{ borderRadius: 0 }} />
                </Card.Body>
            ) : null}
            <Card.Body style={{ paddingTop: "0" }}>
                <p style={{ color: "black", marginBottom: '0' }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    {course.material.map((m, index) => (
                        <ListGroup.Item key={index} className='course-card-item fa-ul' as="ul" >
                            <li>
                                <span className="fa-li" >
                                    {filterIcon(m.icon)}
                                </span>
                                {m.text}
                            </li>
                        </ListGroup.Item>

                    ))}
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

const filterIcon = (icon) => {

    switch (icon) {
        case "faPlayCircle":
            return <FontAwesomeIcon icon={faPlayCircle} />
        case "faT":
            return <FontAwesomeIcon icon={faT} />
        case "faFileText":
            return <FontAwesomeIcon icon={faFileText} />
        case "faGlasses":
            return <FontAwesomeIcon icon={faGlasses} />
        case "faNoteSticky":
            return <FontAwesomeIcon icon={faNoteSticky} />
        default:
            return <FontAwesomeIcon icon={faT} />
    }
}