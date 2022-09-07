
// import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Spinner } from "react-bootstrap";
import "./style.css"

function LoadingScreen({ display }) {
    return (
        <div className={`${display} justify-content-center align-items-center d-flex`} style={{ width: "100vw", height: "60vh" }}>
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