import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export const Instructors = ({ instructors }) => {
    return (
        <div id="instructors" className="mb-5" >
            <Row >
                <Col className="px-5">
                    <h2 className='mb-4 text-main-title'>Giảng viên</h2>
                    {instructors.map(instructor => (
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <Image
                                    src={instructor.imageUrl} roundedCircle
                                    width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                                />
                            </Col>
                            <Col className='m-auto'>
                                <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{instructor.title} {instructor.name}</h4>
                                <ul>
                                    {instructor.bio.split("\n").map(b => (
                                        <li>{b}</li>
                                    ))}
                                </ul>

                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </div>
    )
}