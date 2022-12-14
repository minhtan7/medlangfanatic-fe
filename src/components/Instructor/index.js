import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { instructors } from '../../mockData'
const [hung, tram, cang, huong, duc, truc] = instructors
// const hungtran = {
//     name: "Trần Quang Hưng",
//     title: "BS. CKI.",
//     bio: `Trưởng phòng Đào tạo và Quản lý chất lượng Jio Health\nFounder của Med Lang Fanatic\nGiảng viên kỹ năng giao tiếp trong y khoa, được đào tạo theo chương trình của ACH Hoa Kỳ\nTổ chức các khóa học tiếng Anh tại Đại học Y Dược TPHCM, Đại học Y khoa Phạm Ngọc Thạch, và tại Tổng lãnh sự quán Hoa Kỳ tại TPHCM`,
//     imageUrl: "/images/dr.hung.webp"
// }
// const tramnguyen = {
//     name: "Nguyễn Ngọc Quỳnh Trâm",
//     title: "BS. ",
//     bio: `Tốt nghiệp bác sĩ đa khoa hạng Summa Cum Laude với GPA 4.67/5 tại đại học Debrecen, Hungary\nCựu phó chủ tịch hội sinh viên Việt Nam tại Debrecen, Hungary`,
//     imageUrl: "/images/dr.tram.webp"
// }
// const huongtran = {
//     name: "Trần Nguyễn Thanh Hương",
//     title: "BS. ",
//     bio: "Bác sĩ, khoa Phẫu thuật tim trẻ em, Bệnh viện Đại học Y Dược TP.HCM.\nHoàn thành Step 1 và Step 2 CK USMLE\nTrưởng nhóm biên dịch sách “The End of Alzheimer\nChứng chỉ OET (Occupational English Test) - Medicine.\nChứng chỉ IELTS 8.0.\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
//     imageUrl: "/images/dr.huong.png"
// }

const pccs = [huong, tram]
const cwp = [huong, tram, cang, duc, truc]
export const Instructors = ({ instructors }) => {
    const { slug } = useParams()

    return (
        <div id="instructors" className="mb-5" >
            <Row >
                <Col className="px-3 px-md-5">
                    <h2 className='mb-4 text-main-title'>Giảng viên</h2>
                    <Row >
                        <Col md={4} className="d-flex justify-content-center">
                            <Image
                                src={hung.imageUrl} roundedCircle
                                width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                            />
                        </Col>
                        <Col className='m-auto'>
                            <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{hung.title} {hung.name}</h4>
                            <ul>
                                {hung.bio.split("\n").map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>

                        </Col>
                    </Row>
                    {/* {instructors.map(instructor => ( */}
                    {slug === "clinical-case-presentation" ? (
                        <>
                            {pccs.map(ins => (
                                <Row className=''>
                                    <Col md={4} className="d-flex justify-content-center">
                                        <Image
                                            src={ins.imageUrl} roundedCircle
                                            width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                                        />
                                    </Col>
                                    <Col className='m-auto'>
                                        <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{ins.title} {ins.name}</h4>
                                        <ul>
                                            {ins.bio.split("\n").map((b, idx) => (
                                                <li key={idx}>{b}</li>
                                            ))}
                                        </ul>

                                    </Col>
                                </Row>

                            ))}
                        </>
                    ) : slug === "communication-with-patients-101" ? (
                        <>
                            {cwp.map(ins => (
                                <Row className='mt-4'>
                                    <Col md={4} className="d-flex justify-content-center">
                                        <Image
                                            src={ins.imageUrl} roundedCircle
                                            width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                                        />
                                    </Col>
                                    <Col className='m-auto'>
                                        <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{ins.title} {ins.name}</h4>
                                        <ul>
                                            {ins.bio.split("\n").map((b, idx) => (
                                                <li key={idx}>{b}</li>
                                            ))}
                                        </ul>

                                    </Col>
                                </Row>

                            ))}
                        </>
                    ) : (
                        <Row >
                            <Col md={4} className="d-flex justify-content-center">
                                <Image
                                    src={filterInstructor(instructors[0].name)} roundedCircle
                                    width={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content" }}
                                />
                            </Col>
                            <Col className='m-auto'>
                                <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{instructors[0].title} {instructors[0].name}</h4>
                                <ul>
                                    {instructors[0].bio.split("\n").map((b, idx) => (
                                        <li key={idx}>{b}</li>
                                    ))}
                                </ul>

                            </Col>
                        </Row>
                    )}

                    {/* ))} */}
                </Col>
            </Row >
        </div >
    )
}

const filterInstructor = (name) => {
    switch (name) {
        case "Trần Quang Hưng":
            return "/images/dr.hung.webp"
        case "Nguyễn Ngọc Quỳnh Trâm":
            return "/images/dr.tram.webp"
        case "Nguyễn Đình Cang":
            return "/images/dr.cang.jpg"
        default:
            break;
    }
}

