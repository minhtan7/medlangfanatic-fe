

import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./style.css"

export const ToTopArrow = () => {
    return (
        <a className='position-fixed  arrow-up border rounded-circle d-flex justify-content-center align-items-center' href='#header'>
            <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
        </a>
    )
}
