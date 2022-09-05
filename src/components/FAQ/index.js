import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'


export const FAQ = ({ faq }) => {
    return faq && <div className="mb-5" id="faq">

        <h2 className="px-5 mb-4 text-main-title">Các câu hỏi thường gặp</h2>

        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row>
                <Col className="px-5" md={6}>
                    <Nav variant="tabs" className="flex-column">
                        {faq.map((item, index) => (
                            <Nav.Item className='faq-nav-item'>
                                <Nav.Link eventKey={index}>
                                    <FontAwesomeIcon icon={faQuestion} />
                                    <span className='ms-1'> {item.question}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col md={6} className="px-5 px-md-1 ">
                    <Tab.Content>
                        {faq.map((item, index) => (
                            <Tab.Pane eventKey={index} as="p" style={{ textAlign: "justify" }}>
                                {item.answer}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div >
}
