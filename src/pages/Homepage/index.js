import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Container className='my-5'>
            <Row xs={1} md={3} className="g-4 m-5">
                <Col></Col>
                <Col>
                    <Card>
                        < Card.Img variant="top" src="/images/thumbnail.svg" style={{ borderRadius: 0 }} />
                        <Card.Body className='text-center'>
                            <Card.Title>Medical Academic Vocabulary List</Card.Title>
                            <Card.Text>
                                Từ vựng academic có tần suất gặp cao nhất trong y văn - 20% lượng từ vựng trong textbook và bài báo y khoa. MAVL là khóa học giúp bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.
                            </Card.Text>
                            <Button onClick={() => navigate("/MAVL")} variant="primary" className='btn-sign-up ' style={{ width: "10rem" }}><small>Xem thêm</small></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default HomePage