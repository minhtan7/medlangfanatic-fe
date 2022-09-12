
// import { Box, CircularProgress } from "@mui/material";
import React from "react";
import "./style.css"

function LoadingScreen({ display }) {
    return (
        <div className={`${display} justify-content-center align-items-center d-flex`} style={{ width: "100vw", height: "65vh" }}>
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;