import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "./style.css"

function Header() {
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
                        <Nav.Link className='me-3' onClick={() => navigate("/MAVL")} href="#course-detail-content">Chương trình học</Nav.Link>
                        <Nav.Link className='me-3' onClick={() => navigate("/MAVL")} href="#instructors">Giảng viên</Nav.Link>
                        <Nav.Link className='me-3' onClick={() => navigate("/MAVL")} href="#faq">FAQ</Nav.Link>
                        <Nav.Link className='sign-up' onClick={() => navigate("/register-form")} >Đăng ký ngay</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;