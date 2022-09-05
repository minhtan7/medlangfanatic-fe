import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Placeholder, Row } from 'react-bootstrap'
import { CourseCard } from '../CourseCard/CourseCard'
import "./style.css"

export const Hero = ({ course }) => {
    return <div id="hero" className='mb-5 bg-main position-relative overflow-hidden' style={{ color: "white", padding: "3rem 0 29px" }}>
        {course ? (<Container >
            <Row >
                <Col xs={12} md={6} className="px-2 px-md-3 m-auto overflow-hidden" style={{ paddingTop: "4rem" }}>
                    <h1 className='title-animation anim-typewriter-first mb-3 text-contrast fw-bold ' >Medical Academic</h1>
                    <h1 className='title-animation anim-typewriter-second mb-3 text-contrast fw-bold '> Vocabulary List</h1>
                    <ul className='fa-ul sub-title'>
                        <li> <span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Từ vựng academic có tần suất gặp cao nhất trong y văn - 20% lượng từ vựng trong textbook và bài báo y khoa.</li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.</li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Phân tích hàm nghĩa của từ vựng đa nghĩa trong nhiều ngữ cảnh khác nhau.</li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Tăng nhanh vốn từ vựng một cách có định hướng.</li>
                    </ul>

                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className='hero-image-wrapper'>
                        <div className='hero-image'>
                            <img width="100%" src="http://localhost:3000/images/hero-image.webp" alt="hidden logo" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>) : (<Container >
            <Row >
                <Col xs={12} md={6} className="px-5"  >
                    <Placeholder size="sm" as={"h1"} animation="glow">
                        <Placeholder xs={8} /><br />
                        <Placeholder xs={4} />
                    </Placeholder>

                    <ul className='fa-ul'>
                        <li> <span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Cấu trúc của một ca lâm sàng được trình miệng bằng tiếng Anh</li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Đi sâu vào phân tích cách trình bày hiệu quả cho từng phần riêng biệt. </li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Công thức và từ vựng khác nhau</li>
                        <li><span class="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Cấu trúc dễ học dễ áp dụng.</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <div className='hero-image'>
                        <img width="100%" src="http://localhost:3000/images/hero-image.webp" alt="hidden logo" />
                    </div>
                </Col>

            </Row>
        </Container>)}
        <div className='hidden-logo'>
            <img width="100%" src="http://localhost:3000/images/logo_transparent.webp" alt="hidden logo" />
        </div>

    </div>
}
