import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./style.css"
import ToastMsg from '../ToastMsg.js'

const SUBSRIBE_MESSAGE_SUCCESS = "Cám ơn bạn đã đăng ký!! Bạn kiểm tra mail hàng tuần nhé"
const SUBSRIBE_MESSAGE_FAIL = "Có trục trặc xảy ra. Bạn vui lòng tải lại trang và thử lần nữa nhé. Cám ơn bạn!"
const Subscribe = () => {
    const [data, setData] = useState({
        name: "",
        email: "",

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
        console.log(d)
        setMess(d.success ? SUBSRIBE_MESSAGE_SUCCESS : SUBSRIBE_MESSAGE_FAIL)
        setShow(true)
    }
    return (
        <div id="subscribe" className="py-5 ">
            <Container className='px-3 px-md-5'>
                <h1 >Never miss a blog</h1>
                <p>Stay updated about Med Lang Fanatic news as it happens</p>
                <form className="mb-3" onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' type="text" placeholder="Your name" />
                    <input onChange={handleChange} name='email' type="email" placeholder="Email address" />
                    <Button variant="primary" type="submit">
                        <span className='d-none d-md-inline-block'>Subscribe</span>
                        <span className='d-inline-block d-md-none px-2'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Button>
                </form>
            </Container>
            <ToastMsg show={show} setShow={setShow} message={mess} />
        </div>
    )
}


export default Subscribe