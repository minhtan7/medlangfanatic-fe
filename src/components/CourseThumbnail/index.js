import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const CourseThumbnailHorizontal = () => {
    const navigate = useNavigate()
    return (
        <Card id="courshorizontale-thumbnail-" className='py-5 border-0 row flex-md-row-reverse flex-md-nowrap box-shadow-card' >
            {/* <Card.Img className='col' variant="top" src="/images/thumbnail.svg" style={{ borderRadius: 0 }} /> */}
            <Card.Body className='col text-center '>
                <Card.Title>Medical Academic Vocabulary List</Card.Title>
                <Card.Text>
                    Khóa học MAVL hướng dẫn bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.
                </Card.Text>
                <Button onClick={() => navigate("/MAVL")} className='btn-sign-up ' style={{ width: "10rem" }}><span>Tìm hiểu thêm</span></Button>
            </Card.Body>
        </Card>
    )
}

const CourseThumbnailVertical = () => {
    const navigate = useNavigate()
    return (
        <Card className='box-shadow-card'>
            < Card.Img variant="top" src="/images/mavl-thumbnail.svg" style={{ borderRadius: 0 }} />
            <Card.Body className='text-center'>
                <Card.Title className='fw-bold text-main'>Medical Academic Vocabulary List</Card.Title>
                <Card.Text>
                    Khóa học MAVL hướng dẫn bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.
                </Card.Text>
                <Button onClick={() => navigate("/MAVL")} variant="primary" className='btn-sign-up ' style={{ width: "10rem" }}><small>Tìm hiểu thêm</small></Button>
            </Card.Body>
        </Card>
    )
}

const CourseThumbnailVerticalMT = () => {
    const navigate = useNavigate()
    return (
        <Card className='box-shadow-card'>
            < Card.Img variant="top" src="/images/mt-thumbnail.jpeg" style={{ borderRadius: 0 }} />
            <Card.Body className='text-center'>
                <Card.Title>Medical Terminology: An essential course for healthcare professional</Card.Title>
                <p></p>
                <Card.Text>
                    Medical Terminology: An essential course for healthcare professional: xây dựng vững chắc căn bản thuật ngữ y khoa tiếng Anh sau 60 giờ học đúng lộ trình.
                </Card.Text>
                <Button onClick={() => navigate("/medical-terminology")} variant="primary" className='btn-sign-up btn-mt-secondary' style={{ width: "10rem" }}><small>Tìm hiểu thêm</small></Button>
            </Card.Body>
        </Card>
    )
}

export { CourseThumbnailHorizontal, CourseThumbnailVertical, CourseThumbnailVerticalMT }