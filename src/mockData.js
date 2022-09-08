import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
const faq = [
    // {
    //     question: "Khóa học dành cho đối tượng nào?",
    //     answer: <p>Khóa học hướng đến các bạn sinh viên y đã đi lâm sàng, hoặc các bác sĩ đã ra trường, đã biết cách trình bày một bệnh án cơ bản bằng tiếng Việt và muốn trau dồi khả năng trình bày nội dung bằng tiếng Anh. Khóa học rất thích hợp khi học viên có nhu cầu trao đổi về ca bệnh với đồng nghiệp bằng tiếng Anh (trao đổi miệng hay bằng email), hay chuẩn bị báo cáo ca lâm sàng bằng tiếng Anh.</p>
    // },
    // {
    //     question: "Có cần nói lưu loát tiếng Anh mới đủ khả năng tham gia khóa học này?",
    //     answer: "Trình độ tối thiểu để có thể tham gia được lớp này là A2 - B1 theo khung quy chiếu châu Âu. Học viên sẽ được cung cấp nhiều từ vựng và mẫu câu để tự xây dựng được cách trình bày thông tin của một ca lâm sàng bằng tiếng Anh. Nếu học viên chưa quá tự tin trong việc trình bày, giảng viên hướng dẫn sẽ giúp học viên trình bày được trong các giờ tương tác. Nếu học viên đã nói tương đối tốt tiếng Anh, giảng viên hướng dẫn có thể hỗ trợ cho học viên trình hay hơn."
    // },
    // {
    //     question: "Khóa học diễn ra như thế nào?",
    //     answer: "Khóa học bao gồm phần lý thuyết tự học trên nền tảng Thinkific và 4 buổi học tương tác (qua Zoom), dự kiến tổng thời gian của mỗi khóa học là 30 ngày. Thời gian diễn ra các buổi học tương tác sẽ được trao đổi cụ thể trong nhóm tương tác giữa giảng viên hướng dẫn và học viên. Nhờ vào việc tích hợp tất cả nội dung lý thuyết và bài tập củng cố trên Thinkific, giảng viên hướng dẫn và học viên có thể hoàn toàn tập trung vào phần luyện tập và thực hành trong các buổi tương tác."
    // },
    // {
    //     question: "Làm sao tôi có thể liên lạc với giảng viên hướng dẫn?",
    //     answer: "Học viên sẽ được tham gia nhóm Zalo riêng của lớp học ngay sau khi hoàn tất đăng ký khóa học, và có thể liên lạc trao đổi trực tiếp với giảng viên hướng dẫn trong nhóm. Ngoài ra, Med Lang Fanatic còn để nút 'Discussions' tại mỗi bài của khóa học để học viên có thể trao đổi thêm hoặc gửi thắc mắc. Tất cả học viên của khóa học đều có thể thấy phần nội dung thảo luận này."
    // },
    {
        question: "Đăng ký khóa học như thế nào?",
        answer: "Bạn cần điền đầy đủ thông tin trong form đăng ký và chuyển khoản học phí để hoàn tất đăng "
    },
    // {
    //     question: "Có bài kiểm tra đầu vào không?",
    //     answer: "Học viên sẽ được tham gia nhóm Zalo riêng của lớp học ngay sau khi hoàn tất đăng ký khóa học, và có thể liên lạc trao đổi trực tiếp với giảng viên hướng dẫn trong nhóm. Ngoài ra, Med Lang Fanatic còn để nút 'Discussions' tại mỗi bài của khóa học để học viên có thể trao đổi thêm hoặc gửi thắc mắc. Tất cả học viên của khóa học đều có thể thấy phần nội dung thảo luận này."
    // },
    {
        question: "Có giấy chứng nhận sau khi kết thúc khóa học không?",
        answer: "Các khóa học của Med Lang Fanatic hướng đến việc thành thạo các kỹ năng có thể ứng dụng trong công việc và cuộc sống. Do đó, việc bạn có thể ứng dụng được các kiến thức đã học sẽ là bảo chứng tuyệt vời nhất. Tuy vậy, Med Lang Fanatic vẫn có chứng nhận tham gia khóa học dành cho các học viên hoàn tất 100% khóa học vào cuối khóa, để học viên vẫn có thể lưu giữ kỷ niệm đẹp về khoảng thời gian đồng hành cùng Med Lang Fanatic."
    }
]
const instructors = [
    {
        name: "Trần Quang Hưng",
        title: "BS. CKI",
        bio: `Trưởng phòng Đào tạo và Quản lý chất lượng Jio Health\nFounder của Med Lang Fanatic\nGiảng viên kỹ năng giao tiếp trong y khoa, được đào tạo theo chương trình của ACH Hoa Kỳ\nTổ chức các khóa học tiếng Anh tại Đại học Y Dược TPHCM, đại học Y khoa Phạm Ngọc Thạch, và tại Tổng lãnh sự quán Hoa Kỳ tại TPHCM`,
        imageUrl: "/images/dr.hung.webp"
    },
    {
        name: "Nguyễn Ngọc Quỳnh Trâm",
        title: "BS.",
        bio: `Tốt nghiệp bác sĩ đa khoa hạng Summa Cum Laude với GPA 4.67/5 tại đại học Debrecen, Hungary\nCựu phó chủ tịch hội sinh viên Việt Nam tại Debrecen, Hungary`,
        imageUrl: "/images/dr.tram.webp"
    },
]
const courseDetail = {
    description: "Khóa học giới thiệu cho các bạn cấu trúc của một ca lâm sàng được trình miệng bằng tiếng Anh, và đi sâu vào phân tích cách trình bày hiệu quả cho từng phần riêng biệt. Các bạn sẽ lần lượt làm quen với nhiều loại công thức và từ vựng khác nhau, với những cấu trúc dễ học dễ áp dụng, để đạt mục tiêu đầu ra là có thể tự tin trình bày một ca lâm sàng bằng tiếng Anh."
}

const feedBack = [
    {
        name: "Như Quỳnh",
        title: "Sinh viên Y5",
        content: `Mình rất thích kiểu định hướng học 80/20 theo kiểu corpus-based learning, vì bản thân mình cũng khá... lười, hihi, và bộ từ vựng Medical Academic Vocabulary List đã giúp mình rất nhiều trong việc cải thiện vốn từ vựng academic của mình. Khóa học rất hay, và trình bày rất đẹp. Mình có thể thấy sự trau chuốt công phu từ anh Hưng và chị Trâm cho khóa học này. Cảm ơn Med Lang Fanatic rất nhiều vì không chỉ cung cấp cần câu như mọi lần, mà lần này đã cung cấp cá rất tươi ngon.`
    },
    {
        name: "Hoàng Thị Kim Anh",
        title: "Bác sĩ",
        content: "Mình tình cờ biết được bộ từ vựng MAVL do học lớp Medical Literacy của anh Hưng, và thật sự thích bộ từ vựng này. Nhờ tập trung trau dồi bộ từ vựng này, mình đã có thể cải thiện khả năng hiểu các textbook mà trước đó mình đọc nhưng chỉ hiểu lõm bõm. Highly recommend mọi người học bộ từ MAVL nha."
    },
    {
        name: "Tuyết Phương",
        title: "Sinh viên Y5",
        content: `Thật sự bất ngờ vì khóa học hay hơn mình tưởng tượng rất nhiều. Nội dung không chỉ có các video giảng bài như các khóa học từ vựng thường thấy, mà có cả một hệ thống bài tập tương tác rất công phu. Chưa kể còn có email nhắc nhở bài mỗi tuần. Quá chu đáo. Highly recommend khóa học này.`
    },
    {
        name: "Trần Hà Uyên",
        title: "Sinh viên Y6",
        content: `Em vừa học xong và không biết nói gì ngoài cảm ơn anh Hưng và chị Trâm đã đầu tư quá xịn sò cho khóa học chất lượng này ạ. Em đã hoàn thành khóa học này sớm hơn dự kiến vì nội dung quá cuốn ạ, không nhàm chán như kiểu mô tả liệt kê từ vựng. Hy vọng Med Lang Fanatic sẽ có thêm các khóa học cho các bộ từ vựng giống giống như vậy để em đăng ký học tiếp ạ.`
    }
]

// const about = [
//     {
//         title: "Đối tượng",
//         url: "http://localhost:3000/images/doi_tuong.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Sinh viên y đã đi lâm sàng.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Bác sĩ đã ra trường.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Học viên đã biết cách trình bày một bệnh án cơ bản bằng tiếng Việt và muốn trau dồi khả năng trình bày nội dung bằng tiếng Anh. </li>

//         </ul>
//     },
//     {
//         title: "Hình thức",
//         url: "http://localhost:3000/images/hinh_thuc.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Lý thuyết tự học trên nền tảng Thinkific.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>4 buổi học tương tác trực tiếp (qua Zoom).</li>
//         </ul>
//     },
//     {
//         title: "Thời gian",
//         url: "http://localhost:3000/images/thoi_gian.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>30 ngày.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Thời gian diễn ra các buổi học tương tác sẽ được trao đổi cụ thể trong nhóm tương tác giữa giảng viên hướng dẫn và học viên.</li>
//         </ul>
//     },
//     {
//         title: < >
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//         </>,
//         url: "http://localhost:3000/images/nam_sao.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Tập trung vào phần luyện tập và thực hành trong các buổi tương tác nhờ vào việc tích hợp tất cả nội dung trên nền tảng Thinkific.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Trao đổi về ca bệnh với đồng nghiệp bằng tiếng Anh(trao đổi miệng hay bằng email).</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Chuẩn bị báo cáo ca lâm sàng bằng tiếng Anh.</li>
//         </ul>
//     }
// ]
const about = [
    {
        title: "Đối tượng",
        url: "/images/doi_tuong.jpeg",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Sinh viên chuyên ngành Y Nha Dược.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Nhân viên y tế các chuyên ngành.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Người có mong muốn cải thiện khả năng đọc các tài liệu ngành y.</li>
        </ul>
    },
    {
        title: "Hình thức",
        url: "/images/hinh_thuc.jpeg",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Lý thuyết tự học và bài tập tương tác trên nền tảng học online.</li>
        </ul>
    },
    {
        title: "Thời gian",
        url: "/images/thoi_gian.jpeg",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Thời gian dự kiến để hoàn thành khóa học là 8 tuần.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Người học có thể linh hoạt tùy chỉnh tốc độ tùy theo thời gian rảnh của bản thân.</li>
        </ul>
    },
    {
        title: < >
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
        </>,
        url: "/images/nam_sao.jpeg",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Tập trung vào việc tạo nhiều "điểm chạm" với từ vựng mới, giúp người học có thể hiểu sâu từ vựng bằng cách "ngắm nghĩa" từ vựng ở những góc cạnh khác nhau.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Định hướng học các từ vựng có tần suất gặp cao nhất, giúp tăng nhanh vốn từ trong thời gian ngắn nhất.</li>
        </ul>
    }
]

export { instructors, courseDetail, faq, feedBack, about }