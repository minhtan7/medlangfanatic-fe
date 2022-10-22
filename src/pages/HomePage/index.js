import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CourseThumbnailVertical, CourseThumbnailVerticalMT } from '../../components/CourseThumbnail'
// import "./style.css"

const HomePage = () => {
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4 m-5">
                <Col md={2}></Col>
                <Col md={4}>
                    <CourseThumbnailVertical />
                    {/* <CourseThumbnailVertical /> */}
                </Col>
                <Col md={4}>
                    <CourseThumbnailVerticalMT />
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}
export default HomePage