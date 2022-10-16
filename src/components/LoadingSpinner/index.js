import React from 'react'
import "./style.css"

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            <div className="loading-container">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </div>
    )
}

export default LoadingSpinner