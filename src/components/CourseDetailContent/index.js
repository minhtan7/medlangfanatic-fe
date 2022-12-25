import { faDumbbell, faFileArrowDown, faFileLines, faFilePdf, faQuestion, faSquarePollHorizontal, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Accordion } from 'react-bootstrap'
// import { formatTime } from '../../utility/formatTime'
import "./style.css"

const presenting_clinical_case = [
    {
        id: 0,
        contents: [
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 1: Công thức trình bày câu mở đầu, luyện tập sử dụng 'present' và 'to be admitted'"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 2: Học cách mô tả triệu chứng và bệnh sử, luyện tập sử dụng mạo từ thích hợp với các triệu chứng, học cách mô tả các triệu chứng thường gặp"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 3: Học cách mô tả tiền căn cá nhân, gia đình, các thuốc đang sử dụng"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 4: Học cách mô tả các kết quả khám bình thường và bất thường"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 5: Học cách mô tả các kết quả cận lâm sàng"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 6: Học một số công thức biện luận chẩn đoán, mô tả đáp ứng và diễn tiến điều trị"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 7: Luyện tập trình bày hoàn chỉnh ca lâm sàng, nộp bài cuối khóa"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 8: Luyện tập trình bày hoàn chỉnh ca lâm sàng, nộp bài cuối khóa"
            },
        ],
        name: "Lý thuyết",

    },
    {
        id: 1,
        contents: [
            {
                contentable_type: "Lesson",
                name: "Buổi 1: Luyện tập trình bày câu mở đầu"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 2: Luyện tập trình bày phần bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 3: Luyện tập trình bày phần bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 4: Luyện tập trình bày phần kết quả khám"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 5: Luyện tập trình bày phần kết quả cận lâm sàng"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 6: Luyện tập trình bày phần diễn tiến điều trị"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 7: Luyện tập tổng hợp"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 8: Luyện tập tổng hợp"
            },
        ],
        name: "Buổi học tương tác tập trung qua Zoom",

    }
]

const contentIcon = {
    Lesson: <FontAwesomeIcon icon={faVideo} />,
    Assignment: <FontAwesomeIcon icon={faDumbbell} />,
    HtmlItem: <FontAwesomeIcon icon={faFileLines} />,
    Iframe: <FontAwesomeIcon icon={faWindowMaximize} />,
    Pdf: <FontAwesomeIcon icon={faFilePdf} />,
    Survey: <FontAwesomeIcon icon={faSquarePollHorizontal} />,
    Quiz: <FontAwesomeIcon icon={faQuestion} />,
    Download: <FontAwesomeIcon icon={faFileArrowDown} />
}

export const CourseDetailContent = ({ chapters, slug }) => {
    console.log(chapters)
    if (slug === "clinical-case-presentation") {
        return <div id="course-detail-content" className="mb-5">
            <div className="px-3 px-md-5">
                <h2 className='mb-4 text-main-title'>Chương trình học</h2>
                <Accordion alwaysOpen>
                    {presenting_clinical_case.map(chapter => {
                        // const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                        return (
                            <Accordion.Item key={chapter.id} eventKey={chapter.id} className="accordion-item-outline">
                                <Accordion.Header bsPrefix='style' >
                                    <span>{chapter.name}</span>
                                </Accordion.Header>
                                <Accordion.Body as={"ul"} className='fa-ul'>
                                    {chapter.contents.map(content => (
                                        <Content key={content.id} content={content} id={content.id} />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    }
    return chapters && <div id="course-detail-content" className="mb-5">

        <div className="px-3 px-md-5">
            <h2 className='mb-4 text-main-title'>Chương trình học</h2>
            <Accordion alwaysOpen>
                {chapters.map(chapter => {
                    // const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                    return (
                        <Accordion.Item key={chapter.id} eventKey={chapter.id} className="accordion-item-outline">
                            <Accordion.Header bsPrefix='style' >
                                <span>{chapter.name}</span>
                                <div className='duration d-none d-md-block' >
                                    <span >{chapter.contents.length} bài giảng</span>
                                    {/* <span>{`${hours === "00" ? "" : `${hours}:`}${minutes} phút`}</span> */}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"} className='fa-ul'>
                                {chapter.contents.map(content => (
                                    <Content key={content.id} content={content} id={content.id} />
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    </div>
}

const Content = ({ content }) => {
    return (
        <li className={`${content.contentable_type === "Lesson" ? "video" : ""}`}>
            <span className="fa-li"  >{contentIcon[content.contentable_type]}</span>
            {content.name}
        </li>
    )
}