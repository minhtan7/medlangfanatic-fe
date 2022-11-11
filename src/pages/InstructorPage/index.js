import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const InstructorPage = () => {

    return (
        <section>
            <Container>
                <Row>
                    <Col md={4}>
                        <div>
                            <img src="./images/dr.hung.png" alt="dr.hung" />
                        </div>
                        <ul>
                            <li>Name: </li>
                            <li>Email: </li>
                            <li>Or Quote: </li>
                        </ul>
                    </Col>
                    <Col md={8}>
                        <h1>Trần Quang Hưng</h1>
                        <h3>Biography</h3>
                        <p>BS Trần Quang Hưng có ước mơ cải thiện ngoại ngữ của nhân viên y tế tại Việt Nam. Trong khoảng thời gian du học tại châu Âu, anh đã có cơ hội trao đổi kinh nghiệm với các polyglot hàng đầu thế giới tại Polyglot Gathering 2018 tại Bratislava, Slovakia. Anh cũng là người Việt Nam duy nhất hoàn thành khóa Huấn luyện Giảng viên giao tiếp trong lĩnh vực Y khoa tại ACH, Hoa Kỳ, và đã kết hợp với Tổng lãnh sự quán Hoa Kỳ tổ chức thành công nhiều khóa học về giao tiếp bằng tiếng Anh với bệnh nhân.</p>
                        <hr />
                        <h3>Thông tin sơ lược</h3>
                        <ul>
                            <li>Trưởng phòng Đào tạo Jio Health</li>
                            <li>Sáng lập Med Lang Fanatic</li>
                            <li>Sáng lập câu lạc bộ tiếng Pháp khoa Y Đại học Y Dược TPHCM</li>
                            <li>Học bổng toàn phần khóa huấn luyện Giảng viên của Học viện giao tiếp trong lĩnh vực y tế của Mỹ (Academy of Communication in Healthcare)</li>
                            <li>Tu nghiệp về ghép tế bào gốc tạo máu tại Lyon, Pháp.</li>
                            <li>Thành viên của Hội nghị quốc tế những người trẻ nói tiếng Pháp năm 2018 tại Genève, Thụy Sỹ và Trại hè Pháp ngữ châu Á - Thái Bình Dương năm 2013.</li>
                            <li>Speaker tại Polyglot Gathering 2018 tại Bratislava, Slovakia</li>
                            <li>Cây bút của https://s4be.cochrane.org - dự án giảng dạy về thống kê y học của Cochrane UK</li>
                            <li>Phiên dịch viên trong nhiều hội thảo và hội nghị y khoa</li>
                        </ul>
                        <hr />
                        <h3>Kinh nghiệm giảng dạy ngoại ngữ</h3>
                        <ul>
                            <li>Phối hợp với Tổng Lãnh sự quán Hoa Kỳ tại TPHCM tổ chức khóa học “Communication in English with Patients and Caregivers”.</li>
                            <li>Phối hợp với CLB tiếng Anh khoa Y đại học Y Dược TPHCM (H.E.I.) và CLB tiếng Anh đại học Y khoa Phạm Ngọc Thạch (Esculape) xây dựng chương trình dạy tiếng Anh y khoa thường niên dành cho sinh viên.</li>
                            <li>Giảng viên chính trong nhiều khóa học tại Med Lang Fanatic</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
