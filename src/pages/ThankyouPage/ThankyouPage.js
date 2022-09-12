import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useScript from '../../hook/useScript'

const ThankyouPage = () => {
    useScript(process.env.REACT_APP_LUCKY_ORANGE)

    return (
        <Container>
            <Row>
                <Col sx={12} md={6}>
                    <div className="p-5">
                        <img width="100%" src="/images/thankyou.webp" alt="thank you" />
                    </div>
                </Col>
                <Col sx={12} md={6}>
                    <div className="text-main pb-5 px-5 d-flex flex-column justify-content-center align-items-center w-100 h-100 text-center">
                        <h1 className="pb-3 fw-bold">Cám ơn bạn!</h1>
                        <h3>Med Lang Fanatic đã nhận được form đăng ký của bạn. Tụi mình sẽ phản hồi bạn qua email trong vòng 24 giờ kể từ thời điểm nhận được form.</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default ThankyouPage
