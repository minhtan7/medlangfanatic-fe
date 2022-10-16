import React from 'react'
import { Toast } from 'react-bootstrap'

const ToastMsg = ({ show, setShow, message }) => {
    return (

        <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            style={{ position: "fixed", top: "1rem", right: "1rem" }}>
            <Toast.Header>
                <strong className="me-auto">Med Lang Fanatic</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>

    )
}

export default ToastMsg