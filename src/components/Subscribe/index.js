import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./style.css"


const Subscribe = () => {
    return (
        <div id="subscribe" className="py-5 ">
            <Container className='px-3 px-md-5'>
                <h1 >Never miss a story</h1>
                <p>Stay updated about Med Lang Fanatic news as it happens</p>
                <form className="mb-3" >
                    <input type="email" placeholder="Email address" />
                    <Button variant="primary">
                        <span className='d-none d-md-inline-block'>Subscribe</span>
                        <span className='d-inline-block d-md-none px-2'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default Subscribe