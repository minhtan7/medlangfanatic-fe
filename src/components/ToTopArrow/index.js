

import { faAngleDoubleUp, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import MobileModal from '../MobileModal'
import "./style.css"

export const ToTopArrow = ({ course }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='position-fixed arrow-up '>
                <a className='d-none d-md-flex border rounded-circle justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
                </a>
                <span onClick={handleShow} className='d-md-none border rounded-circle d-flex justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faInfo} className="heartbeat" size="1x" />
                </span>

            </div>
            <MobileModal course={course} show={show} setShow={setShow} />
        </>
    )
}

export const ToTopArrowNormalUse = () => {
    return (
        <>
            <div className='position-fixed arrow-up '>
                <a className='d-none d-md-flex border rounded-circle justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
                </a>
            </div>
        </>
    )
}