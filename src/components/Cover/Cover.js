import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./style.css"
import quote from "../../asset/quote.svg"

export const Cover = () => {
    return (
        <Container id="cover-session" className='mb-5'>
            <div className='px-md-5 px-4 border py-3' >
                <h2 className='text-center mb-3 fw-bolder text-main'>40 từ covered trên tổng 162 từ</h2>
                <div className='position-relative'>
                    <p className='text-justify'>
                        The application of <span className='covered-text'>current</span> <span className='covered-text'>treatment</span> <span className='covered-text'>techniques</span> (<span className='covered-text'>surgery</span>, radiation <span className='covered-text'>therapy</span>, chemotherapy, and biologic <span className='covered-text'>therapy</span>) results in the cure of nearly two of three <span className='covered-text'>patients</span> <span className='covered-text'>diagnosed</span> with <span className='covered-text'>cancer</span>.
                        Nevertheless, <span className='covered-text'>patients</span> <span className='covered-text'>experience</span> the <span className='covered-text'>diagnosis</span> of <span className='covered-text'>cancer</span> as one of the most traumatic and revolutionary <span className='covered-text'>events</span> that has ever happened to them.
                        Independent of <span className='covered-text'>prognosis</span>, the <span className='covered-text'>diagnosis</span> brings with it a <span className='covered-text'>change</span> in a person’s self-<span className='covered-text'>image</span> and in his or her <span className='covered-text'>role</span> in the home and workplace.
                        The <span className='covered-text'>prognosis</span> of a person who has just been found to have pancreatic <span className='covered-text'>cancer</span> is the same as the <span className='covered-text'>prognosis</span> of the person with aortic stenosis who <span className='covered-text'>develops</span> the first <span className='covered-text'>symptoms</span> of congestive heart <span className='covered-text'>failure</span> (<span className='covered-text'>median</span> <span className='covered-text'>survival</span>, ~8 <span className='covered-text'>months</span>).
                        However, the <span className='covered-text'>patient</span> with heart <span className='covered-text'>disease</span> may remain <span className='covered-text'>functional</span> and maintain a self-<span className='covered-text'>image</span> as a fully <span className='covered-text'>intact</span> person with just a malfunctioning part, a diseased <span className='covered-text'>organ</span>. By <span className='covered-text'>contrast</span>, the <span className='covered-text'>patient</span> with pancreatic <span className='covered-text'>cancer</span> has a completely <span className='covered-text'>altered</span> self- <span className='covered-text'>image</span> and is viewed differently by family and anyone who knows the <span className='covered-text'>diagnosis</span>.
                    </p>
                    <span className='slide-quote'>
                        <img src={quote} alt="quote sign" />
                    </span>
                </div>
                <p className='text-center fst-italic'>
                    <small>(Đoạn văn trích từ cuốn Harrison's principles of internal medicine, 21st ed, trang 481)</small>
                </p>
                <small style={{ fontSize: "10px", display: "inline-table" }}>
                    * Các từ được tô màu <span className='covered-text'>highlight</span> là các từ khóa trong bộ Medical Academic Vocabulary List
                </small>
            </div>
        </Container>
    )
}

export const CoverMedicalTerminology = () => {
    return (
        <Container id="cover-session" className='mb-5'>
            <div className='px-md-5 px-4 border py-3' >
                <h2 className='text-center mb-3 fw-bolder text-main'>An Essential Course for Beginners</h2>
                <div className='position-relative'>
                    <p className='text-justify'>
                        Khóa học Medical Terminology: An Essential Course for Beginner Learners hướng đến đối tượng các bạn chưa vững nền tảng thuật ngữ y khoa tiếng Anh, và có mục tiêu là xây dựng lại vững chắc căn bản thuật ngữ y khoa tiếng Anh sau 60 giờ học đúng lộ trình.<br />
                        Các bạn sẽ làm quen với khái niệm 7 loại thuật ngữ y khoa được đề xuất bởi Pitt và Hendrickson vào năm 2020, và cùng dành thời gian nghiên cứu cách đối phó với từ viết tắt khó, và những thuật ngữ y khoa dễ nhầm lẫn với nhau.<br />
                        Phần Technical Terminology gồm hơn 1.000 thuật ngữ được trình bày theo 13 hệ cơ quan khác nhau như hệ hô hấp, hệ tim mạch, hệ tiết niệu… là những chủ điểm quan trọng cần thiết để xây vững chắc vốn từ vựng y khoa. Mỗi chủ đề bao gồm 3 video phân tích các thuật ngữ thường gặp trong giải phẫu, sinh lý, triệu chứng, chẩn đoán, và điều trị của hệ cơ quan đó. Các bài Reading cũng rất phong phú giúp các bạn học viên gặp và học lại các thuật ngữ đã gặp trước đó qua video. Ngoài ra, khóa học cung cấp rất nhiều các dạng bài tập mini-game khác nhau để bạn luyện tập từ vựng như flashcards (có phát âm), nối thuật ngữ với cấu trúc giải phẫu, điền thuật ngữ vào bệnh án, trắc nghiệm từ vựng cuối chương…
                    </p>
                    <span className='slide-quote slide-quote-mt'>
                        <img src={quote} alt="quote sign" />
                    </span>
                </div>
            </div>
        </Container>
    )
}

export const CoverPCCS = () => {
    return (
        <Container id="cover-session" className='mb-5'>
            <div className='px-md-5 px-4 border py-3' >
                <h2 className='text-center mb-3 fw-bolder text-main'>How to present clinical cases in English?</h2>
                <div className='position-relative'>
                    <p className='text-justify lh-md'>
                        Khóa học hướng đến các bạn sinh viên y đã đi lâm sàng, hoặc các bác sĩ đã ra trường. <br />
                        Các bạn sẽ được ngắm nghía cách trình bệnh án hiệu quả bằng tiếng Anh dưới góc độ ngôn ngữ học, và tự chuẩn bị cho mình một hành trang "cao cấp" để đạt những bước tiến xa hơn trong sự nghiệp.<br />
                        Khóa học giới thiệu cho các bạn cấu trúc của một ca lâm sàng được trình miệng bằng tiếng Anh, và đi sâu vào phân tích cách trình bày hiệu quả cho từng phần riêng biệt. Các bạn sẽ lần lượt làm quen với nhiều loại công thức và từ vựng khác nhau, với những cấu trúc dễ học dễ áp dụng, để đạt mục tiêu đầu ra là có thể tự tin trình bày một ca lâm sàng bằng tiếng Anh. <strong>Khóa học gồm 2 phần:</strong>
                    </p>
                </div>
                <Row >
                    <Col>
                        <a href='#course-detail-content'>
                            <Button
                                className='w-100 h-100 p-5 text-center bg-main text-white rounded-0 me-3 fw-bold fs-4'

                            >
                                Lý thuyết tự học trên nền tảng online
                            </Button>

                        </a>
                    </Col>
                    <Col >
                        <a href="#course-detail-content">
                            <Button className='w-100 h-100 p-5 text-center bg-main text-white rounded-0 me-3 fw-bold fs-4'>
                                Tương tác thực hành qua Zoom
                            </Button>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export const CoverCWP = () => {
    return (
        <Container id="cover-session" className='mb-5'>
            <div className='px-md-5 px-4 border py-3' >
                <h2 className='text-center mb-3 fw-bolder text-main'>How to communicate with patients in English?</h2>
                <div className='position-relative'>
                    <p className='text-justify lh-md'>
                        Khóa học hướng đến các bạn sinh viên y đã đi lâm sàng, hoặc các bác sĩ đã ra trường. Các bạn sẽ được trang bị những câu giao tiếp cơ bản nhất để có thể tự tin hỏi bệnh, khám, và tư vấn cho các bệnh nhân người nước ngoài. <br />
                        Khóa học giới thiệu cho các bạn các cách hỏi và tư vấn cho nhiều tình huống lâm sàng và mục đích giao tiếp khác nhau. Các bạn sẽ lần lượt làm quen với nhiều loại công thức và từ vựng khác nhau, với những cấu trúc dễ học dễ áp dụng, để đạt mục tiêu đầu ra là có thể tự tin hỏi và tư vấn bệnh nhân bằng tiếng Anh. <strong>Học viên sẽ được trang bị trước buổi thực hành ngân hàng các câu và từ vựng cần thiết để sử dụng trong nhiều tình huống giao tiếp khác nhau.</strong>
                    </p>
                </div>
                <Row >
                    <Col >
                        <a href="#course-detail-content">
                            <Button className='w-100 h-100 p-5 text-center bg-main text-white rounded-0 me-3 fw-bold fs-4'>
                                Tương tác thực hành qua Zoom
                            </Button>
                        </a>
                    </Col>
                    <Col>
                        <a href='#course-detail-content'>
                            <Button
                                className='w-100 h-100 p-5 text-center bg-main text-white rounded-0 me-3 fw-bold fs-4'

                            >
                                Cùng giảng viên
                            </Button>

                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}