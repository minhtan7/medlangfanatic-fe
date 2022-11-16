import React from 'react'
import "./style.css"

export const MLFScreen = () => {
    return (
        <div className="loader-wrap" >
            <div className="preloader">
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner">
                            <img width={250} alt="logo" src="http://localhost:3000/images/logo-color-transparent.png" />
                        </div>
                        <div className="txt-loading">
                            {["m", "e", "d", "l", "a", "n", "g", "f", "a", "n", "a", "t", "i", "c"].map(t => (
                                <span data-text-preloader={t} className="letters-loading">
                                    {t}
                                </span>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
