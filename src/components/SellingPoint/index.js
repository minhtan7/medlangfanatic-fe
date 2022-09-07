import { faCertificate, faCheck, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'


export const SellingPoint = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Khóa học từng được tài trợ bởi American Center tại TP. HCM
        </Tooltip>
    );
    return (
        <div className="mb-5" >
            <Row >
                <div className="px-5 position-relative overflow-hidden selling-point-shadow-top" >
                    <Image src='/images/graduate.png' width="100%"
                        style={{
                            position: "absolute",
                            top: "84%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}
                    />
                </div>
                <div className="d-flex p-0 selling-point-shadow-bottom">
                    <ul className='selling-point-ul fa-ul py-3 flex-divumn flex-md-row align-items-center justify-content-md-around'>
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon style={{ color: "white" }} size='2x' icon={faCertificate} /></span>
                            <strong>15000</strong>
                            graduate</li>
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon size='2x' style={{ color: "white" }} icon={faCheck} /></span>
                            <strong>15000</strong>graduate
                        </li>
                        <li>
                            <span class="fa-li" ><FontAwesomeIcon style={{ color: "white" }} size='2x' icon={faHandshake} /></span>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <img src="/images/AC-logo-white-trans.png" width={150} alt="AC logo" />
                            </OverlayTrigger>
                        </li>
                    </ul>
                </div>
            </Row>
        </div>
    )
}

