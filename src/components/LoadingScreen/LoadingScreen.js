
// import { Box, CircularProgress } from "@mui/material";
import React from "react";
import "./style.css"

function LoadingScreen({ display }) {
    return (
        <div className={`${display} justify-content-center align-items-center d-flex`} style={{ width: "100vw", height: "65vh" }}>
            <div class="boxes">
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="box">
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