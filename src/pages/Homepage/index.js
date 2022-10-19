import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CourseThumbnailVertical } from '../../components/CourseThumbnail'
import "./style.css"

const HomePage = () => {
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4 m-5">
                <Col></Col>
                <Col>
                    <CourseThumbnailVertical />
                    {/* <CourseThumbnailVertical /> */}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default HomePage
