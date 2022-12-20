import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { SideBar } from '../../components/SideBar'
import { WelcomeDoc } from '../../components/WelcomeDoc'
import { useScript } from '../../hook/useScript'
import { slugTranslate } from '../../utility/slugTranslate'
import { SubscriptionHP } from '../HomePage'
import { ToTopArrowNormalUse } from '../../components/ToTopArrow'


const getRender = (frame) => {
    if (!frame) {
        return <WelcomeDoc />
    }
    if (frame.type === "document") {
        if (frame.display === 'download') {
            return <button>View</button>
        } else if (frame.display === 'html') {
            return (<div id="notion">
                {frame.html}
            </div>)
        }
    } else if (frame.type === "exercise" && frame.display === "embed") {
        return <iframe title="Sentence arrangement - Introductory email" src="https://medlangfanatic.h5p.com/content/1291480456540279979/embed" width="100%" height="984" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *" aria-label="Email writing - Sentence arrangement - Introductory email"></iframe>
    }
    return <WelcomeDoc />
}

const DocumentationPage = () => {
    const [frame, setFrame] = useState(null)
    useScript("https://medlangfanatic.h5p.com/js/h5p-resizer.js")
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type")
    const slug = searchParams.get("name")
    useEffect(() => {
        if (location.search) {
            setFrame(slugTranslate({ target: type, slug }))
        }
    }, [location.search, slug, type])

    return (
        <>

            <div id="blog-page" >
                <Container>
                    <div className=' pt-5'>
                        <Link to="/" className='text-secondary text-decoration-none'>
                            <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                            Về trang chủ
                        </Link>
                        <h1 className='title' >Tài Liệu</h1>
                    </div>
                    <Row >
                        <Col md={3}>
                            <SideBar />
                        </Col>
                        <Col md={9} >
                            {getRender(frame)}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mt-5'>
                <SubscriptionHP />
            </div>
            <ToTopArrowNormalUse />
        </>
    )
}

export default DocumentationPage