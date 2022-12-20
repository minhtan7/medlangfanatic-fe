import React from 'react'
import { Modal } from 'react-bootstrap';
import { CourseCard } from '../CourseCard/CourseCard'
import "./style.css"

const MobileModal = ({ course, show, setShow }) => {
    const handleClose = () => setShow(false);


    return (
        <Modal
            show={show}
            onHide={handleClose}
            id="mobileModal"
        >

            <CourseCard course={course} />
        </Modal>
    );
}

export default MobileModal