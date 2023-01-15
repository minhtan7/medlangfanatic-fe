import { faCertificate, faCheck, faCircleCheck, faPenRuler, faSchoolCircleCheck, faWifiStrong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { CourseThumbnailVertical, CourseThumbnailVerticalMT } from '../../components/CourseThumbnail'
// import ReactCardCarousel from "react-card-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from '../../asset/quote.svg'

import { isMobile } from 'react-device-detect';

import "./style.css"
import BlogCard from '../../features/blog/BlogCard'
import { blogContent, instructors } from '../../mockData'
import ToastMsg from '../../components/ToastMsg.js'
import { ToTopArrowNormalUse } from '../../components/ToTopArrow'
import CarouselML from '../../components/Carousel/CarouselML'
import { Helmet } from 'react-helmet-async'

const fbs = [
    {
        content: "Nhờ khóa học mà em có ý thức hơn trong việc giao tiếp, đặc biệt là những mindset và skill theo hướng patient - centered nhiều hơn so với những gì mình vẫn hay làm ở Tiếng Việt. Một điều rất lớn em học được từ các anh chị trong khóa học này đó là hiểu rõ hơn mục đích của việc giao tiếp, đó là sự quan tâm và thấu cảm với người đối diện, từ đó định hướng những gì mình nói, mình thể hiện trong lúc khám bệnh cũng sẽ thay đổi so với trước đây, luôn hướng về điều mà người bệnh đang thực sự gặp khó khăn, biết cân bằng giữa thời gian khám và hiệu quả cuộc khám. Với những tình huống bất ngờ trong giao tiếp thì em cũng phần nào hiểu được mình phải vừa giải quyết được những thắc mắc của người bệnh trong phạm vị cho phép, vừa cam đoan với người bệnh những gì sẽ làm được và đặc biệt là cố gắng hết sức để cuộc khám trở nên có ý nghĩa với người bệnh nhất có thể.",
        name: "Dương Lê",
        title: "Sinh viên"
    },
    {
        content: "Em hiện chưa có cơ hội thực hành giao tiếp với người bệnh bằng tiếng Anh. Tuy nhiên, khoá học đã giúp em có một cái nhìn tổng quát hơn về khai thác bệnh sử, tiền sử, khám lâm sàng, quan tâm hơn đến cảm xúc của người bệnh. Nhờ đó, em đã tự tin hơn trong khi khám lâm sàng, khai thác thông tin từ bệnh nhân bằng tiếng Việt, đặc biệt là em đã biết quan tâm và tiếp cận lấy người bệnh làm trung tâm, do vậy hiệu quả học lâm sàng của em đã cải thiện nhiều.",
        name: "Thanh Ngân",
        title: "Bác sĩ"
    },
    {
        content: "Trước khi học thì khả năng giao tiếp bằng tiếng Anh với bệnh nhân của riêng em chỉ khoảng 2.5/10. Sau 12 buổi học với các instructors thì em đã tự tin hơn rất nhiều trong việc tư vấn, giải thích, hỏi han bệnh nhân. Không chỉ học được về tiếng Anh, những nghệ thuật về giao tiếp này em cũng đã áp dụng với bệnh nhân em đang thực tập và kết quả ngoài sức mong đợi ^^ ",
        name: "Khoa",
        title: "Sinh viên"
    },
    {
        content: "Có rất nhiều điều bổ ích từ khoá học này như về phương diện ngôn ngữ thì khoá học đã giúp mình khá nhiều trong việc sử dụng Tiếng Anh trong giao tiếp, những cụm từ và cách nói mà hay sử dụng cũng như về phương diện chuyên ngành thì khoá học đã giúp đỡ rất bổ ích từ việc trao đổi với bệnh nhân, những điều tưởng chừng như đơn giản nhưng khi giao tiếp bằng tiếng Anh thì hoá ra lại cực kì khó.",
        name: "Tiến Lê",
        title: "Bác sĩ"
    },
    {
        content: "Đầu tiên là khóa đưa ra những guide rất rõ ràng và dễ hiểu để áp dụng trong việc giao tiếp với người bệnh mà có thể áp dụng cả tiếng Việt lẫn tiếng Anh. Các guide khi tóm tắt lại thì hoàn toàn có thể áp dụng, dù em bên chuyên ngành khác bác sĩ nhưng vẫn rất hiệu quả. Thứ hai là nhờ những bài tập và bài học mà em biết được thêm nhiều những từ vựng chuyên ngành, cũng như những loại bệnh khác mà chuyên ngành của mình ít tiếp xúc. Ngoài ra, em cũng biết thêm nhiều các medicine mà em chưa biết hoặc ít biết đến. Thứ ba là khả năng giao tiếp của em đã nâng lên đáng kể, về khả năng giao tiếp với người khác nói chung, và khả năng giao tiếp với người bệnh ở khá nhiều scenarios nói riêng.",
        name: "Hồng Diễm ",
        title: "Dược sĩ"
    },
    {
        content: "Thầy share một lượng kiến thức và kinh nghiệm rất lớn cho học viên, điều đó khiến mình có nhiều cách để cải thiện Tiếng Anh chuyên ngành của mình hơn.",
        name: "Thanh Thảo",
        title: "Bác sĩ"
    },
    {
        content: "Những kiến thức mà anh Hưng chia sẻ ạ, các khoá học khác sẽ dạy đơn thuần nghĩa từng từ từng bài khô khan, còn khoá học này lại cung cấp “cần câu” bởi một người có nhiều kinh nghiệm. Chỉ sợ là có học hết được những cái anh chỉ không thui ạ.",
        name: "Thu Hương",
        title: "Sinh viên"
    },
    {
        content: "Để trả lời cho câu hỏi này em cũng đắn đo nhiều lắm á, bởi vì có khá nhiều điều em thích về CA. Đầu tiên là giáo trình học theo 1 tiến trình rất mạch lạc, cụ thể, các mẫu câu có tính ứng dụng cao, và nội dung học cũng hay được nhắc lại giữa các buổi giúp em dễ nhớ hơn. Những trang web được giới thiệu cũng thiết thực, hay lạ, có nhiều trang em còn chưa từng biết đến sự tồn tại luôn :3. Em đặc biệt ấn tượng với accent của anh Hưng, lần đầu tiên nghe ảnh nói em bất ngờ kinh khủng, dù em cũng biết anh Hưng 'khủng' từ trước rồi nhưng mà không ngờ nó siêu trầm và siêu hay luôn í 😣 Thêm một cái nữa là mỗi lần chữa bài tập, em đều được nhận các feedback rất cụ thể để bài trình của mình súc tích hơn, và các góp ý về phát âm nữa.",
        name: "Lan Chi",
        title: "Bác sĩ"
    }
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsivePodcast = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};



const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Med Lang Fanatic | Khóa học tiếng Anh Y khoa trực tuyến. Cải thiện khả năng ngoại ngữ và nâng cao kỹ năng giao tiếp trong Y khoa." data-rh="true" />
                <meta name="keywords"
                    content="Tiếng anh y khoa, Khái niệm về các ngành nghề cơ bản trong y khoa,
Từ vựng tiếng Anh chuyên ngành Y khoa tổng quát ,
Từ vựng tiếng Anh chuyên ngành thần kinh,
Từ vựng tiếng Anh chuyên ngành mắt,
Từ vựng tiếng Anh chuyên ngành tai mũi họng,
Từ vựng tiếng Anh chuyên ngành hô hấp,
Từ vựng y khoa chuyên ngành tiêu hóa,
Từ vựng tiếng Anh chuyên ngành da liễu ,
Từ vựng tiếng Anh y khoa chuyên ngành xương khớp,
Từ vựng y khoa tiếng Anh chuyên ngành nội tiết ,
Từ vựng tiếng Anh chuyên ngành thú y,
Một số nguồn học từ vựng tiếng Anh chuyên ngành y khoa hữu ích,
Tài liệu tiếng Anh chuyên ngành Y khoa,
Bài tập về từ vựng tiếng Anh chuyên ngành Y khoa,
Một số từ tiếng anh các cơ quan bộ phận trên cơ thể,
Tiếng anh chuyên ngành y khoa,
Tiếng anh chuyên ngành y khoa pdf,
Tiếng anh chuyên ngành y khoa y học cổ truyền,
Tiếng anh chuyên ngành y khoa y học,
Tiếng anh chuyên ngành y khoa y dịch,
Tiếng anh chuyên ngành y khoa y dược,
Tiếng anh chuyên ngành y khoa y tế cộng đồng,
Tiếng anh chuyên ngành y khoa y khoa song ngữ,
Tiếng anh y khoa pdf,
Tiếng anh y khoa giao tiếp,
Tiếng anh y khoa từ điển,
Tiếng anh y khoa song ngữ,
Tiếng anh y khoa dịch,
Tiếng anh y khoa từ số 0,
Tiếng anh y khoa hệ tiêu hoá,
Tiếng anh y khoa cơ bản,
Tiếng anh y khoa sách,
Thuật ngữ y khoa,
Thuật ngữ y khoa chuyên ngành Thần kinh,
 Thuật ngữ y khoa chuyên ngành Truyền nhiễm,
 Thuật ngữ y khoa chuyên ngành Ung thư,
 Thuật ngữ y khoa chuyên ngành Y học cổ truyền,
Thuật ngữ y khoa chuyên ngành Tâm Lý Học,
 Thuật ngữ y khoa chuyên ngành ,
Thuật ngữ y khoa chuyên ngành Chẩn đoán hình ảnh,
Thuật ngữ y khoa chuyên ngành Chấn thương chỉnh hình,
Thuật ngữ y khoa chuyên ngành Da liễu,
Thuật ngữ y khoa chuyên ngành Giải phẫu bệnh,
Thuật ngữ y khoa chuyên ngành Hồi sức cấp cứu,
Thuật ngữ y khoa chuyên ngành Huyết học - Truyền máu,
Thuật ngữ y khoa chuyên ngành Lão khoa,
Thuật ngữ y khoa chuyên ngành Ngoại khoa,
Thuật ngữ y khoa chuyên ngành Ngoại - Lồng ngực,
Thuật ngữ y khoa chuyên ngành Ngoại - Nhi,
Thuật ngữ y khoa chuyên ngành Nội khoa,
Thuật ngữ y khoa chuyên ngành Tâm thần,
Thuật ngữ y khoa chuyên ngành mắt,
Thuật ngữ y khoa chuyên ngành phụ sản,
Thuật ngữ y khoa chuyên ngành Y đa khoa,
Thuật ngữ y khoa chuyên ngành Dược,
Thuật ngữ y khoa chuyên ngành Răng Hàm Mặt,
Thuật ngữ y khoa chuyên ngành Y học cổ truyền,
Thuật ngữ y khoa chuyên ngành Điều dưỡng,
Thuật ngữ y khoa chuyên ngành Vật lý trị liệu,
Thuật ngữ y khoa chuyên ngành Y học dự phòng,
Thuật ngữ y khoa chuyên ngành Dinh dưỡng,
Thuật ngữ y khoa chuyên ngành Nhi Khoa,
Thuật ngữ y khoa chuyên ngành Gây mê hồi sức,
Từ vựng tiếng Anh chuyên ngành Y khoa tổng quát ,
Từ vựng tiếng Anh chuyên ngành thần kinh,
Từ vựng tiếng Anh chuyên ngành mắt,
Từ vựng tiếng Anh chuyên ngành tai mũi họng,
Từ vựng tiếng Anh chuyên ngành hô hấp,
tiếng anh chuyên ngành Thần kinh,
 tiếng anh chuyên ngành Truyền nhiễm,
 tiếng anh chuyên ngành Ung thư,
 tiếng anh chuyên ngành Y học cổ truyền,
tiếng anh chuyên ngành Tâm Lý Học,
 tiếng anh chuyên ngành ,
tiếng anh chuyên ngành Chẩn đoán hình ảnh,
tiếng anh chuyên ngành Chấn thương chỉnh hình,
tiếng anh chuyên ngành Da liễu,
tiếng anh chuyên ngành Giải phẫu bệnh,
tiếng anh chuyên ngành Hồi sức cấp cứu,
tiếng anh chuyên ngành Huyết học - Truyền máu,
tiếng anh chuyên ngành Lão khoa,
tiếng anh chuyên ngành Ngoại khoa,
tiếng anh chuyên ngành Ngoại - Lồng ngực,
tiếng anh chuyên ngành Ngoại - Nhi,
tiếng anh chuyên ngành Nội khoa,
tiếng anh chuyên ngành Tâm thần,
tiếng anh chuyên ngành mắt,
tiếng anh chuyên ngành phụ sản,
tiếng anh chuyên ngành Y đa khoa,
tiếng anh chuyên ngành Dược,
tiếng anh chuyên ngành Răng Hàm Mặt,
tiếng anh chuyên ngành Y học cổ truyền,
tiếng anh chuyên ngành Điều dưỡng,
tiếng anh chuyên ngành Vật lý trị liệu,
tiếng anh chuyên ngành Y học dự phòng,
tiếng anh chuyên ngành Dinh dưỡng,
tiếng anh chuyên ngành Nhi Khoa,
tiếng anh chuyên ngành Gây mê hồi sức,
từ vựng chuyên ngành Thần kinh,
 từ vựng chuyên ngành Truyền nhiễm,
 từ vựng chuyên ngành Ung thư,
 từ vựng chuyên ngành Y học cổ truyền,
từ vựng chuyên ngành Tâm Lý Học,
 từ vựng chuyên ngành ,
từ vựng chuyên ngành Chẩn đoán hình ảnh,
từ vựng chuyên ngành Chấn thương chỉnh hình,
từ vựng chuyên ngành Da liễu,
từ vựng chuyên ngành Giải phẫu bệnh,
từ vựng chuyên ngành Hồi sức cấp cứu,
từ vựng chuyên ngành Huyết học - Truyền máu,
từ vựng chuyên ngành Lão khoa,
từ vựng chuyên ngành Ngoại khoa,
từ vựng chuyên ngành Ngoại - Lồng ngực,
từ vựng chuyên ngành Ngoại - Nhi,
từ vựng chuyên ngành Nội khoa,
từ vựng chuyên ngành Tâm thần,
từ vựng chuyên ngành mắt,
từ vựng chuyên ngành phụ sản,
từ vựng chuyên ngành Y đa khoa,
từ vựng chuyên ngành Dược,
từ vựng chuyên ngành Răng Hàm Mặt,
từ vựng chuyên ngành Y học cổ truyền,
từ vựng chuyên ngành Điều dưỡng,
từ vựng chuyên ngành Vật lý trị liệu,
từ vựng chuyên ngành Y học dự phòng,
từ vựng chuyên ngành Dinh dưỡng,
từ vựng chuyên ngành Nhi Khoa,
từ vựng chuyên ngành Gây mê hồi sức,
tiếng anh y khoa Chẩn đoán hình ảnh,
tiếng anh y khoa Chấn thương chỉnh hình,
tiếng anh y khoa Da liễu,
tiếng anh y khoa Giải phẫu bệnh,
tiếng anh y khoa Hồi sức cấp cứu,
tiếng anh y khoa Huyết học - Truyền máu,
tiếng anh y khoa Lão khoa,
tiếng anh y khoa Ngoại khoa,
tiếng anh y khoa Ngoại - Lồng ngực,
tiếng anh y khoa Ngoại - Nhi,
tiếng anh y khoa Nội khoa,
tiếng anh y khoa Tâm thần,
tiếng anh y khoa mắt,
tiếng anh y khoa phụ sản,
tiếng anh y khoa Y đa khoa,
tiếng anh y khoa Dược,
tiếng anh y khoa Răng Hàm Mặt,
tiếng anh y khoa Y học cổ truyền,
tiếng anh y khoa Điều dưỡng,
tiếng anh y khoa Vật lý trị liệu,
tiếng anh y khoa Y học dự phòng,
tiếng anh y khoa Dinh dưỡng,
tiếng anh y khoa Nhi Khoa,
tiếng anh y khoa Gây mê hồi sức,
Thần kinh,
Truyền nhiễm,
Ung thư,
Y học cổ truyền,
Tâm Lý Học,
Chẩn đoán hình ảnh,
Chấn thương chỉnh hình,
Da liễu,
Giải phẫu bệnh,
Hồi sức cấp cứu,
Huyết học - Truyền máu,
Lão khoa,
Ngoại khoa,
Ngoại - Lồng ngực,
Ngoại - Nhi,
Nội khoa,
Tâm thần,
mắt,
phụ sản,
Y đa khoa,
Dược,
Răng Hàm Mặt,
Y học cổ truyền,
Điều dưỡng,
Vật lý trị liệu,
Y học dự phòng,
Dinh dưỡng,
Nhi Khoa,
Gây mê hồi sức,
chuyên ngành Thần kinh,
chuyên ngành Truyền nhiễm,
chuyên ngành Ung thư,
chuyên ngành Y học cổ truyền,
chuyên ngành Tâm Lý Học,
chuyên ngành Chẩn đoán hình ảnh,
chuyên ngành Chấn thương chỉnh hình,
chuyên ngành Da liễu,
chuyên ngành Giải phẫu bệnh,
chuyên ngành Hồi sức cấp cứu,
chuyên ngành Huyết học - Truyền máu,
chuyên ngành Lão khoa,
chuyên ngành Ngoại khoa,
chuyên ngành Ngoại - Lồng ngực,
chuyên ngành Ngoại - Nhi,
chuyên ngành Nội khoa,
chuyên ngành Tâm thần,
chuyên ngành mắt,
chuyên ngành phụ sản,
chuyên ngành Y đa khoa,
chuyên ngành Dược,
chuyên ngành Răng Hàm Mặt,
chuyên ngành Y học cổ truyền,
chuyên ngành Điều dưỡng,
chuyên ngành Vật lý trị liệu,
chuyên ngành Y học dự phòng,
chuyên ngành Dinh dưỡng,
chuyên ngành Nhi Khoa,
chuyên ngành Gây mê hồi sức"
                />
            </Helmet>
            <CTA />
            {/* {isMobile ? <WhyMedLangMobile /> : <WhyMedLangWeb />} */}

            <InstructorList instructors={instructors} />
            <CourseList />
            <FeedBackList />
            <BlogSession />
            <VideoSession />
            <PodCastHP />
            <SubscriptionHP />
            <ToTopArrowNormalUse />
        </>
    )
}

const VideoSession = () => {
    return (
        <div id="video-session" className='mb-4 mb-md-5 mx-md-7'>
            <Container className='h-100'>
                <h1 className='mb-4'>
                    <span className='text-main fw-bold'>Tài liệu</span>
                    <br />
                    <span className='text-30'>Tiếng Anh Y khoa chọn lọc</span>
                </h1>
                <Row>
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <div className="video-thumbnail left px-3 pb-1 pt-3">
                            <div>
                                <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">
                                    <img width="100%" src="./images/document_xray.jpeg" alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">

                                <p className='text-16 pt-3'>Bộ từ vựng X-quang lồng ngực (Fleishner 2008)</p>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        {isMobile ? <VideoSessionRightMobile /> : <VideoSessionRightWeb />}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const DOCUMENT_FREE = [
    {
        image: "./images/document_ban-ron-lam-sao-hoc-tieng-anh.jpeg",
        title: "Bận rộn làm sao học tiếng Anh",
        link: "https://drive.google.com/file/d/1bomzB9sYaQQ6tGMVRBaqNig3D6f4WUCD/view?usp=sharing"
    },
    {
        image: "./images/document_MAVL.jpeg",
        title: "Medical Academic\nVocabulary List",
        link: "https://drive.google.com/file/d/14gR4lureVsFvVQfzNkVea_y0rhfbQ2-3/view?usp=sharing"
    },
    {
        image: "./images/document_prefix-suffix.jpeg",
        title: "Prefixes, suffixes, and combining forms",
        link: "https://drive.google.com/file/d/1zHqOXs5SYbghJ5zVsHUDBOa-YR0XJ8W3/view?usp=sharing"
    },
    {
        image: "./images/document_cach-hoi-benh-su-bang-tieng-anh.jpeg",
        title: "Học cách hỏi bệnh sử bằng tiếng Anh như thế nào?",
        link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing"
    }
]
const VideoSessionRightWeb = () => {
    return (
        <Row style={{ height: "100%" }}>
            {
                DOCUMENT_FREE.map((d, index) => (
                    <Col md={6} className="h-50 " style={index < 2 ? { paddingBottom: "0.2rem" } : { paddingTop: "0.2rem" }}>
                        <div className='video-thumbnail px-3 pt-3'>
                            <div  >
                                <a target="_blank" href={d.link} rel="noreferrer">
                                    <img width="100%" src={d.image} alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href={d.link} rel="noreferrer">
                                <p className="mb-0 pt-2 text-14" >{d.title}</p>
                            </a>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}

const VideoSessionRightMobile = () => {
    return (
        <>
            {DOCUMENT_FREE.map((d, index) => (
                <div key={index} className='d-flex mb-2 video-thumbnail-mobile'>
                    <div className='box-shadow-card' style={{ borderRadius: "10px" }}>
                        <a target="_blank" href={d.link} rel="noreferrer">
                            <img width="100%" src={d.image} alt="video" />
                        </a>
                    </div>
                    <a target="_blank" href={d.link} rel="noreferrer">
                        <p className=" ps-4 fw-bold" >{d.title}</p>
                    </a>
                </div>
            ))}
        </>
    )
}


const SUBSRIBE_MESSAGE_SUCCESS = "Cám ơn bạn đã đăng ký!! Bạn kiểm tra mail hàng tuần nhé"
const SUBSRIBE_MESSAGE_FAIL = "Có trục trặc xảy ra. Bạn vui lòng tải lại trang và thử lần nữa nhé. Cám ơn bạn!"

export const SubscriptionHP = () => {
    const [data, setData] = useState({
        email: "",
        name: "bạn"
    })
    const [show, setShow] = useState(false)
    const [mess, setMess] = useState("")
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://medlangfanatic.pipedrive.com/v1/persons?api_token=${process.env.REACT_APP_PIPEDRIVE_API}`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, marketing_status: "subscribed" })
        });
        const d = await res.json()
        setMess(d.success ? SUBSRIBE_MESSAGE_SUCCESS : SUBSRIBE_MESSAGE_FAIL)
        setShow(true)
    }
    return (
        <div id="subscription-session" className='mb-md-5 overflow-hidden mx-md-7'>
            <Container className='h-100'>
                <Row className='flex-column flex-md-row'>
                    <Col className='d-flex mb-2 mb-md-0'>
                        <h2 className='my-auto mb-2 mb-md-0 '>Đăng ký nhận tài liệu<br /> tiếng Anh Y khoa!</h2>
                    </Col>
                    <Col className='m-auto'>
                        <form onSubmit={handleSubmit} className="position-relative">
                            <div>
                                <input onChange={handleChange} name='email' type="email" placeholder="Email..." />
                                <Button className='subscription-span position-md-absolute' >Đăng ký</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <ToastMsg show={show} setShow={setShow} message={mess} />
        </div>
    )
}

const PODCASTS = [
    {
        title: "34",
        image: "./images/podcast-34.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7MwAofZ0kbpgWaiJjeILyK",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "33",
        image: "./images/podcast-33.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/69FYPawJOY5qaTqd0yzJcl",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "32",
        image: "./images/podcast-32.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/0GfJKHZYhPpj1oK6Hi9Ci5",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "31",
        image: "./images/podcast-31.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5b0nCW1uuqsDcthYJPFQW7",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "30",
        image: "./images/podcast-30.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5z7bYLe8k5PpSYoQqashCJ",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "29",
        image: "./images/podcast-29.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5Fa8PbZc6NUtfxlU8rHh56",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "28",
        image: "./images/podcast-28.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/1kvme0BvAHKuRA3HiWbzuS",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "27",
        image: "./images/podcast-27.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2Q3mN6o51vjM1Mf3MSwZ1m",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "26",
        image: "./images/podcast-26.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2h3j6mJYueKfrn3i14KnOy",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "25",
        image: "./images/podcast-25.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7w0i2lDQVwCbIWk9fP7LTx",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "24",
        image: "./images/podcast-24.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/24dsJ7tTNZCQxlN6whtFAm",
                siteName: "spotify"
            }
        ]
    }

]

const PodCastHP = () => {
    const navigate = useNavigate()
    return (
        <div id="podcast-session" className='mb-6 mx-md-7 mt-md-5 pt-md-5'>
            <Container className='h-100 '>
                <h1 className='text-main fw-bold mb-4'>Podcast
                    <br />
                    <span className='text-30'>
                        Học từ vựng Y khoa miễn phí
                    </span></h1>
                <Carousel responsive={responsivePodcast}>
                    {PODCASTS.map((p, index) => (
                        <div key={index} style={{ width: "80%", margin: "auto", }}>
                            <a href={p.siteLink[0].link} rel="noreferrer" target="_blank">
                                <img width="100%" src={p.image} alt={p.title} />
                            </a>
                        </div>
                    ))}
                </Carousel>

            </Container>
        </div>
    )
}

const BlogSession = () => {
    const navigate = useNavigate()
    return (
        <div id="blog-session" className='mb-4 mb-md-5'>
            <div className='mx-md-7'>
                <Container className='h-100'>
                    <h1 className='mb-4'>
                        <span className='text-main fw-bold' onClick={() => navigate("/blogs")}>Blogs </span>
                        <br />
                        <span className='text-30'>
                            chia sẻ kinh nghiệm
                        </span>
                        <Link to="/blogs" className='visit-blog d-none d-md-block'><i>Xem thêm blogs</i></Link>
                    </h1>
                    <Carousel responsive={responsive}>
                        {blogContent.map(blog => (
                            // <div style={{ padding: "1rem 2rem" }}>
                            <div key={blog._id} style={{ marginRight: "3rem", paddingBottom: "1rem" }}>
                                <BlogCard blog={blog} length="100" />
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>
    )
}

const FeedBackCard = () => {

    return (
        <>

            <div className="container-style">
                <CarouselML autoplay={true} autoplay_speed={50000}>
                    {fbs.map(fb => (
                        <Card className="card-style" key={fb.name}>
                            {/* <Card.Img variant="top" src="/images/student_icon.svg"
                                style={{ width: "90px", margin: "auto" }} className='doctor-icon' /> */}

                            <Card.Body>
                                <Card.Title style={{ textTransform: "uppercase" }}>
                                    {fb.name} <br />
                                    <small style={{ fontSize: "15px", textTransform: "lowercase" }}>- {fb.title} -</small>
                                </Card.Title>
                                <Card.Text className='text-black position-relative'>

                                    {fb.content}
                                    <span className='slide-quote' style={{ zIndex: 1, top: "1rem", left: "1.5rem", opacity: "0.7" }}>
                                        {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                        <img src={quote} alt="quote sign" />
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </CarouselML>
            </div>
        </>
    )
}
const LIST_FB_IMAGE = [
    "./images/student_fb_1.jpg",
    "./images/student_fb_2.jpg",
    "./images/student_fb_3.jpg",
    "./images/student_fb_4.jpg",
    "./images/student_fb_5.jpg"
]
const FeedBackList = () => {
    const circleListFn = (arr, index) => {
        if (index === -1) {
            return (<ul><li className='student-icon last '>
                <img src="./images/plus-icon.png" alt="student icon" width={40} />
            </li></ul>)
        }
        return (<ul><li className='student-icon '>
            <img src={arr[index]} alt="student icon" />
            {circleListFn(arr, index - 1)}
        </li></ul>)
    }

    return (
        <div id="feedback-list" className='mb-4 my-md-5 py-md-5 mx-md-7'>
            <Container >
                <Row xs={1} md={12} className="g-4 my-md-5">
                    <Col xs={12} md={5} className="text-40 ">
                        {/* <h1 className='fw-bold text-main ' > </h1> */}
                        <h1 className='mb-2 mb-md-5'>
                            <span className='text-main fw-bold'>Feedback </span>
                            -<br />Học viên nói gì?
                        </h1>
                        <ul className='d-flex' >
                            {circleListFn(LIST_FB_IMAGE, LIST_FB_IMAGE.length - 1)}
                        </ul>

                    </Col>
                    <Col xs={12} md={6} >
                        <FeedBackCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const COURSE_LIST_ICON = [
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Học trực tuyến"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Từ 3 - 6 tháng"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Tương tác Online"
    }

]
const courseListContent = {
    "communication-with-patients-101": {
        title: "Giao Tiếp Với Bệnh Nhân",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1672313340/medlangfanatic/courses/cwp/communications_ycbuwr.jpg",
        content: "Khóa học hướng đến các bạn sinh viên y đã đi lâm sàng, hoặc các bác sĩ đã ra trường. Các bạn sẽ được trang bị những câu giao tiếp cơ bản nhất để có thể tự tin hỏi bệnh, khám, và tư vấn cho các bệnh nhân người nước ngoài.",
        path: "/communication-with-patients-101",
        idEl: "cwp-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-cwp-main'
    },
    "clinical-case-presentation": {
        title: "Trình Ca Lâm Sàng",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1671965829/medlangfanatic/courses/presenting-clinical-case-from-scratch/pccs-thumbnail_nei3t5.jpg",
        content: "Khóa học cho bạn trải nghiệm ngắm nghía cách trình bệnh án hiệu quả bằng tiếng Anh dưới góc độ ngôn ngữ học, và tự chuẩn bị cho mình một hành trang 'cao cấp' để đạt những bước tiến xa hơn trong sự nghiệp.",
        path: "/clinical-case-presentation",
        idEl: "pccs-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-pccs-main'
    },
    "medical-terminology": {
        title: "Thuật Ngữ Y Khoa",
        image: "/images/mt-thumbnail.jpeg",
        content: "Medical Terminology: An essential course for healthcare professional: xây dựng vững chắc căn bản thuật ngữ y khoa tiếng Anh sau 60 giờ học đúng lộ trình.",
        path: "/medical-terminology",
        idEl: "mt-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-mt-secondary'
    },
    mavl: {
        title: <span>Từ Vựng Học Thuật<br />Y Khoa</span>,
        image: "/images/mavl-thumbnail.svg",
        content: "Khóa học MAVL hướng dẫn bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.",
        path: "/MAVL",
        idEl: "mavl-thumbnail-vertical",
        btnClass: "btn-sign-up",
    },

}
const CourseList = () => {
    return (
        <div id="course-list-session" className='text-center mb-4 mb-md-5 '>
            <Container className='mt-5'>
                {
                    !isMobile ?
                        (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện khả năng ngoại ngữ<br /> và kỹ năng giao tiếp trong Y khoa.
                            </h1>
                        )
                        : (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện ngoại ngữ<br /> và nâng cao<br /> kỹ năng giao tiếp
                            </h1>
                        )
                }
                <small><i>Những khóa học tiếng Anh chuyên ngành Y khoa chất lượng cao của MLF sẽ là lời tri ân chân thành nhất đến với mọi người!</i></small>
                <ul className='fa-ul text-12 mt-3' >
                    {COURSE_LIST_ICON.map(icon => (
                        <li key={icon.content} className="d-inline-block me-5">
                            <span className="fa-li" >{icon.icon}</span>{icon.content}
                        </li>

                    ))}
                </ul>

                <Row xs={1} md={12} className="g-4 mt-md-2">
                    {
                        Object.keys(courseListContent).map(c => (
                            <Col xs={12} md={3}>
                                <CourseThumbnailVertical course={courseListContent[c]} />
                            </Col>
                        )
                        )
                    }
                    {/* <Col xs={12} md={4}>
                        <CourseThumbnailVertical />
                    </Col>
                    <Col xs={12} md={4}>
                        <CourseThumbnailVerticalMT />
                    </Col>

                    <Col xs={12} md={4}>
                        <CourseThumbnailVerticalMT />
                    </Col> */}
                </Row>
            </Container>
        </div >
    )
}

const InstructorList = ({ instructors }) => {
    return (
        <div id="hp-instructor-card" className='mb-5 mt-5 text-justify mx-md-7'>
            <Container>
                <Row>
                    {/* <Col md={1}></Col> */}
                    <Col>
                        <h1 className='fw-bold text-main'>Giảng viên</h1>
                    </Col>
                </Row>
                <Row >
                    {/* <Col md={1}></Col> */}
                    <Col md={12} >
                        <Row>
                            {instructors.map((instructor, index) =>
                            (index % 2 === 0 ?
                                (<Col md={6} key={instructor.name} className="mb-2">
                                    <InstructorCardLeft instructor={instructor} />
                                </Col>) : (
                                    <Col md={6} key={instructor.name} className="mb-2">
                                        <InstructorCardRight instructor={instructor} />
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Col>
                    {/* <Col md={1}></Col> */}

                </Row>
            </Container>

        </div>
    )
}

const InstructorCardLeft = ({ instructor }) => {
    return (
        <>
            <div className="new-speaker my-2">
                <div className="speaker-right">
                    <div>
                        <ul className="speaker-topic mb-0 fa-ul">
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="speaker-left">
                    <div style={{ height: "60%" }}>
                        <div className="team-image">
                            <img src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className="speaker-sub">{instructor.titleFull}</p>
                        <p className="speaker-name mb-0 fw-bold" >
                            {instructor.name.split("\n").map(b => (<span key={b}>{b}<br /></span>))}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const InstructorCardRight = ({ instructor }) => {
    return (
        <>
            <div className="new-speaker  my-2">
                <div className="speaker-left">
                    <div style={{ height: "60%" }}>
                        <div className="team-image">
                            <img src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className="speaker-sub">{instructor.titleFull}</p>
                        <p className="speaker-name mb-0 fw-bold" >
                            {instructor.name.split("\n").map(b => (<>{b}<br /></>))}
                        </p>
                    </div>
                </div>
                <div className="speaker-right">
                    <div>
                        <ul className="speaker-topic mb-0 fa-ul">
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CTA = () => {
    const navigate = useNavigate()
    return (
        <div id="cta-homepage" style={{ height: "514px" }} className="mb-5 mt-5 mx-md-7">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className=' d-flex justify-content-center align-items-center'>
                        <div className='w-100'>
                            <p className='mb-4'>Cùng Med Lang Fanatic</p>
                            <h1 className='text-main'>Khám phá tri thức mới</h1>
                            <h1 className='text-main'>chuyên ngành Y Khoa</h1>
                            <h1 className='text-main mb-4'>thông qua Tiếng Anh</h1>
                            <h4 className='fw-light text-main mb-5'><i>Nền tảng học Tiếng Anh Y Khoa trực tuyến</i></h4>
                            <div className='mb-5'>
                                <a href='#course-list-session' >
                                    <Button
                                        // onClick={() => navigate("/register-form")}
                                        variant="primary" className='btn-primary-contrast btn-sign-up-contrast py-2 me-3 mb-2 mb-md-0' >
                                        <span>Các khóa học</span>
                                    </Button>
                                </a>
                                <a href='#hp-instructor-card'>
                                    <Button
                                        // onClick={() => navigate("/register - form")} 
                                        variant="primary" className='btn-sign-up py-2' ><span>Giảng viên</span></Button>
                                </a>
                            </div>
                            <p><i>Dare to open the box!</i></p>
                        </div >
                    </Col >
                    <Col xs={12} md={6} className='d-none d-md-block m-auto'>
                        <div className='text-center'>
                            <img width="550px" alt="hero" src='./images/homepage-hero.jpg' />
                        </div>
                        <div className='cta-hung'>
                            <div className='d-flex'>
                                <div className='rounded-circle cta-left me-3'>
                                    <img width="60px" src="./images/dr.hung.webp" alt="dr.Hung" />
                                </div>
                                <div className='cta-right d-flex flex-column justify-content-center'>
                                    <p className='mb-0 fw-bold'>Hưng Trần from MLF</p>
                                    <small>@founder</small>
                                </div>
                            </div>
                            <p className='mb-0'>"Another way to learn Medical English"</p>
                        </div>
                    </Col>
                </Row >
            </Container >
        </div >
    )
}

const WHY_SESSION_ICON = [
    {
        icon: <FontAwesomeIcon icon={faSchoolCircleCheck} />,
        title: "Flexible time",
        content: "Online education allows teachers and students set their own pace of learning, and there is added flexibility in setting a schedule that fit everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faCertificate} />,
        title: "Certificate",
        content: "Online education allows teachers and students to set their own pace of learning and there is added flexibility in setting a schedule that fits everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faPenRuler} />,
        title: "Class options",
        content: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone's agenda"
    },
    {
        icon: <FontAwesomeIcon icon={faWifiStrong} />,
        title: "Access anywhere",
        content: "Online education allows teachers and students to set their own pace of learning, and there is added flexibility in setting a schedule that fits everyone's"
    }
]

const WhyMedLangWeb = () => {
    return (
        <section id="why-medlang-session" >
            <div className='mb-7 mx-md-7'>
                <Container >
                    <Row>
                        <Col md={6} className="py-5 m-auto left" >
                            <h1 className='fw-bold text-main mb-5'>Why online<br />learning method</h1>
                            <p className='text-16' style={{ paddingRight: "3rem" }}>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                            <Button variant='primary' className='btn-primary-contrast btn-sign-up-contrast'>Chi tiết khóa học</Button>
                        </Col>
                        <Col md={6} >
                            <Row>
                                {WHY_SESSION_ICON.map((icon, index) => (
                                    <Col md={6} className="mb-4 why-web-icon">
                                        <span className='why-icon'>
                                            {icon.icon}
                                        </span>
                                        <h4 className='fw-bold text-main'>{icon.title}</h4>
                                        <p className="text-12">{icon.content}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section >
    )
}

const WHY_TAB = [
    {}
]
const WhyMedLangMobile = () => {
    const [slide, setSlide] = useState(0)

    return (
        <section id="why-medlang-session" className='mb-4 mb-md-5 mobile mx-md-7'>
            <Container>
                <Row>
                    <Col md={6} className="pb-5 pt-0 m-auto">
                        <h1 className='fw-bold text-main mb-5'>Why online<br />learning method</h1>
                        <p className='text-16' style={{ paddingRight: "2rem" }}>Studying online teaches important time management skills, which makes it easier for you to find a good work-study balance</p>
                        <Button variant='primary' className='btn-sign-up'>Tìm hiểu thêm</Button>
                    </Col>
                    <Col md={6} >
                        <div className='d-flex justify-content-between'>
                            {WHY_SESSION_ICON.map((icon, index) => (
                                <span key={index} className={`why-icon ${slide === index && "show"}`} onClick={() => setSlide(index)}>
                                    {icon.icon}
                                </span>
                            ))}
                        </div>
                        <div className='why-mob-content'>
                            {WHY_SESSION_ICON.map((icon, index) => (
                                <div key={index} className="mb-4 slideshow-container" >
                                    <div className={` mySlides faded ${slide === index ? "d-flex flex-column  flex-lg-row" : ""}`}>
                                        <h4 className='fw-bold text-main'>{icon.title}</h4>
                                        <p style={{ paddingRight: "50px" }} className="text-12">{icon.content}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >)
}

export default HomePage



// const containerStyle = {
//     position: "relative",
//     height: "100%",
//     width: "100%",
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "middle"
// };

// const cardStyle = {
//     height: "fit-content",
//     width: "500px",
//     paddingTop: "10px",
//     paddingBottom: "10px",
//     textAlign: "center",
//     background: "white",
//     color: "var(--main)",
//     fontFamily: "sans-serif",
//     fontSize: "16px",
//     borderRadius: "10px",
//     boxSizing: "border-box",
// };