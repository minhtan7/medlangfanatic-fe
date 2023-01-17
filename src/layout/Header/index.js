import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { slugTranslate } from '../../utility/slugTranslate';
import "./style.css"

function CourseHeader() {
    const navigate = useNavigate()
    const { slug } = useParams()

    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Navbar.Brand as="img" onClick={() => navigate("/")} src="/images/logo_transparent.webp" href="#home" width={96} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className='me-3' onClick={() => navigate("/")} >Trang chủ</Nav.Link>
                        <Nav.Link className='me-3' href="/#course-list-session"  >Khóa học</Nav.Link>
                        <Nav.Link className='me-3' href="#course-detail-content">Chương trình học</Nav.Link>
                        <Nav.Link className='me-3' href="#instructors">Giảng viên</Nav.Link>
                        <Nav.Link className='me-3' href="#faq">FAQ</Nav.Link>
                        <Nav.Link className={`sign-up ${slugTranslate({ slug, target: "signUpHover" })}`} onClick={() => navigate(`/register-form/${slug.toLowerCase()}`)} >Đăng ký ngay</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
function MainHeader() {
    const navigate = useNavigate()
    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Navbar.Brand as="img" onClick={() => navigate("/")} src="/images/logo_transparent.webp" href="#home" width={96} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className='me-3' onClick={() => navigate("/")} >Trang chủ</Nav.Link>
                        <Nav.Link className='me-3' href="/#course-list-session"  >Khóa học</Nav.Link>
                        <Nav.Link className='me-3' onClick={() => navigate("/blogs")} >Blogs</Nav.Link>
                        {/* <Nav.Link className='me-3' onClick={() => navigate("/documentation")} >Tài liệu</Nav.Link> */}
                        <Nav.Link className='me-3' onClick={() => navigate("/game")} >Game</Nav.Link>
                        {/* <Nav.Link className='sign-up' onClick={() => navigate("/register-form")} >Đăng ký ngay</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { CourseHeader, MainHeader };