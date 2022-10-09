import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./style.css"

const NotFoundPage = () => {
    return (
        <div className='text-center not-found d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='mb-5'>Bạn vào nhầm địa chỉ rồi!!</h1>
                <h2> <span >(╯°□°）╯︵ ┻━┻</span></h2>
                <div className=' mt-5'>
                    <Button as={Link} to="/">
                        <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                        Trở lại gấp
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default NotFoundPage