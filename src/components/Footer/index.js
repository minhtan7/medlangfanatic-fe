import { faFacebook, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileText, faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'

const index = () => {
    return (
        <>
            <div className='py-4 text-white' style={{ backgroundColor: "#2b3438" }}>
                <Container className='px-5 pt-4'>
                    <Row>
                        <Col xs={12} md={4} className="mb-3">
                            <div className=''>
                                <h5>Theo dõi Medlangfanatic:</h5>
                                <div>
                                    <FontAwesomeIcon className='ms-3' size='2x' icon={faFacebook} />
                                    <FontAwesomeIcon className='ms-3' size='2x' icon={faYoutube} />
                                    <FontAwesomeIcon className='ms-3' size='2x' icon={faSpotify} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="mb-3">
                            <Stack>
                                <p><span style={{ color: "var(--contrast" }}>Med Lang Fanatic</span> là một nhóm các bác sĩ có hoài bão cải thiện khả năng ngoại ngữ và kỹ năng giao tiếp của nhân viên y tế tại Việt Nam.</p>

                            </Stack>
                        </Col>
                        <Col xs={12} md={4} className="mb-3">
                            <Stack>
                                <div>
                                    <h5>Liên hệ: </h5>
                                    <p className='ms-3'><FontAwesomeIcon icon={faEnvelope} /> medlangfanatic@gmail.com</p>
                                </div>

                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-main py-1 text-center text-white'>
                <small>© Med Lang Fanatic</small>
            </div>
        </>
    )
}

export default index