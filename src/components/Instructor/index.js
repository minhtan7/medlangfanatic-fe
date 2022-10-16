import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const hungtran = {
    name: "Trần Quang Hưng",
    title: "BS. CKI",
    bio: `Trưởng phòng Đào tạo và Quản lý chất lượng Jio Health\nFounder của Med Lang Fanatic\nGiảng viên kỹ năng giao tiếp trong y khoa, được đào tạo theo chương trình của ACH Hoa Kỳ\nTổ chức các khóa học tiếng Anh tại Đại học Y Dược TPHCM, đại học Y khoa Phạm Ngọc Thạch, và tại Tổng lãnh sự quán Hoa Kỳ tại TPHCM`,
    imageUrl: "/images/dr.hung.webp"
}
export const Instructors = ({ instructors }) => {
    console.log("instructors", instructors)
    return (
        <div id="instructors" className="mb-5" >
            <Row >
                <Col className="px-3 px-md-5">
                    <h2 className='mb-4 text-main-title'>Giảng viên</h2>
                    <Row >
                        <Col md={4} className="d-flex justify-content-center">
                            <Image
                                src={hungtran.imageUrl} roundedCircle
                                width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                            />
                        </Col>
                        <Col className='m-auto'>
                            <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{hungtran.title} {hungtran.name}</h4>
                            <ul>
                                {hungtran.bio.split("\n").map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>

                        </Col>
                    </Row>
                    {/* {instructors.map(instructor => ( */}
                    <Row >
                        <Col md={4} className="d-flex justify-content-center">
                            <Image
                                src={filterInstructor(instructors.name)} roundedCircle
                                width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                            />
                        </Col>
                        <Col className='m-auto'>
                            <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{instructors.title} {instructors.name}</h4>
                            <ul>
                                {instructors.bio.split("\n").map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>

                        </Col>
                    </Row>
                    {/* ))} */}
                </Col>
            </Row>
        </div>
    )
}

const filterInstructor = (name) => {
    switch (name) {
        case "Trần Quang Hưng":
            return "/images/dr.hung.webp"
        case "Nguyễn Ngọc Quỳnh Trâm":
            return "/images/dr.tram.webp"
        default:
            break;
    }
}

