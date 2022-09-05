import { faDumbbell, faFileArrowDown, faFileLines, faFilePdf, faQuestion, faSquarePollHorizontal, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { formatTime } from '../../utility/formatTime'
import "./style.css"

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

export const CourseDetailContent = ({ chapters }) => {
    return chapters && <div id="course-detail-content" className="mb-5">

        <div className="px-5">
            <h2 className='mb-4 text-main-title'>Chương trình học</h2>
            <Accordion alwaysOpen>
                {chapters.map(chapter => {
                    const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                    return (
                        <Accordion.Item eventKey={chapter.id} className="accordion-item-outline">
                            <Accordion.Header bsPrefix='style' >
                                <span>{chapter.name}</span>
                                <div className='duration d-none d-md-block' >
                                    <span >{chapter.contents.length} bài giảng</span>
                                    {/* <span>{`${hours === "00" ? "" : `${hours}:`}${minutes} phút`}</span> */}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"} className='fa-ul'>
                                {chapter.contents.map(content => (
                                    <Content content={content} />
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