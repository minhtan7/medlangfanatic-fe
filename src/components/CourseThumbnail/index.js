import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const CourseThumbnailHorizontal = () => {
    const navigate = useNavigate()
    return (
        <Card id="course-thumbnail-horizontal" className=' border-0 row flex-md-row-reverse flex-md-nowrap' >
            <Card.Img className='col' variant="top" src="/images/thumbnail.svg" style={{ borderRadius: 0 }} />
            <Card.Body className='col text-center '>
                <Card.Title>Medical Academic Vocabulary List</Card.Title>
                <Card.Text>
                    Từ vựng academic có tần suất gặp cao nhất trong y văn - 20% lượng từ vựng trong textbook và bài báo y khoa. MAVL là khóa học giúp bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.
                </Card.Text>
                <Button onClick={() => navigate("/MAVL")} className='btn-sign-up ' style={{ width: "10rem" }}><span>Xem thêm</span></Button>
            </Card.Body>
        </Card>
    )
}

const CourseThumbnailVertical = () => {
    const navigate = useNavigate()
    return (
        <Card>
            < Card.Img variant="top" src="/images/mavl-thumbnail.svg" style={{ borderRadius: 0 }} />
            <Card.Body className='text-center'>
                <Card.Title className='fw-bold text-main'>Medical Academic Vocabulary List</Card.Title>
                <Card.Text>
                    Từ vựng academic có tần suất gặp cao nhất trong y văn - 20% lượng từ vựng trong textbook và bài báo y khoa. MAVL là khóa học giúp bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.
                </Card.Text>
                <Button onClick={() => navigate("/MAVL")} variant="primary" className='btn-sign-up ' style={{ width: "10rem" }}><small>Xem thêm</small></Button>
            </Card.Body>
        </Card>
    )
}

export { CourseThumbnailHorizontal, CourseThumbnailVertical }