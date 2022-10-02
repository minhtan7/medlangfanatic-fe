import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useScript } from '../../hook/useScript'
import "./style.css"

const EventPage = () => {
    const [show, setShow] = useState(false)
    useScript(process.env.REACT_APP_PIPEDRIVE_LOADER)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
    }, [])
    return (
        <Container className='py-5' id="form-page">
            <Row>
                <Col xs={0} md={6} >
                    <div className="px-5 position-relative w-100 h-100 d-none d-md-block">
                        <div className='position-sticky  left-0  w-100' style={{ height: "40rem", top: "5rem" }}>
                            <div className='position-absolute ' style={{ width: "35rem", top: "6rem" }}>
                                <img width="100%" src="/images/event-form-1.webp" alt="thank you" />
                            </div>
                            <div className='position-absolute ' style={{ width: "20rem", right: "-8rem", zIndex: "-1" }} >
                                <img width="100%" src="/images/event-form-2.webp" alt="thank you" />
                            </div>

                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`w-100 ${show ? "d-block" : "d-none"}`} >
                        <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/bYYsEmdAWOeSU2Pw7yWCOiSbrRfOby9SP9RtJSIMZH4wIqkpRegRx5sg1usNTk6Ldx"></div>
                    </div>
                    <div className={` ${!show ? "d-block" : "d-none"} h-100 w-100 d-flex justify-content-center align-items-center`} >
                        <Spinner animation="border" role="status"  >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default EventPage
