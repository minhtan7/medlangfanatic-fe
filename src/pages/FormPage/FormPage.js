import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useScript } from '../../hook/useScript'
import "./style.css"


const slugs = {
    "medical-terminology": "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    "mavl": "https://webforms.pipedrive.com/f/6Na7FxACrR9AIRnhT8dm44I4RAqCPurExWfMOooL85t0s1JxH2m9WyyqEEW9kzCo5t"
}

const FormPage = () => {
    const [show, setShow] = useState(false)
    const [link, setLink] = useState("")
    const { slug } = useParams()

    useScript(process.env.REACT_APP_PIPEDRIVE_LOADER)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
        if (slugs[slug]) {
            setLink(slugs[slug])
        }
    }, [slug])
    return (
        <Container className='py-5' id="form-page">
            <Row>
                <Col xs={0} md={6} >
                    <div className="px-5 position-relative w-100 h-100 d-none d-md-block">
                        <div className='position-sticky  left-0  w-100' style={{ height: "40rem", top: "5rem" }}>
                            <div className='position-absolute top-10 start-10 ' style={{ width: "20rem" }}>
                                <img width="100%" src="/images/form-1.webp" alt="thank you" />
                            </div>
                            <div className='position-absolute top-50 start-50' style={{ transform: "translate(-20%,-20%)", width: "20rem" }} >
                                <img width="100%" src="/images/form-2.webp" alt="thank you" />
                            </div>

                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`w-100 ${show ? "d-block" : "d-none"}`} >
                        <div className="pipedriveWebForms" data-pd-webforms={link}></div>
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
export default FormPage
