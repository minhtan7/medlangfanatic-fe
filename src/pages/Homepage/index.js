import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { CourseThumbnailVertical } from '../../components/CourseThumbnail'
import "./style.css"

const HomePage = () => {
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4 m-5">
                <Col></Col>
                <Col>
                    <CourseThumbnailVertical />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default HomePage