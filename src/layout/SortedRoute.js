
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { CourseHeader } from "./Header";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";


const slugs = {
    "mavl": 1751294,
    "medical-terminology": 2026776,
}
function SortedRoute({ children }) {
    const location = useLocation();
    const at = location.pathname.slice(1).toLowerCase()
    const { isLoading, currentCourse } = useSelector(state => state.course)

    if (!slugs[at]) {
        return <Navigate to="/" />
    }
    return <>
        {/* <LoadingScreen /> */}
        <CourseHeader />
        <div className={`${isLoading || !Object.keys(currentCourse).length ? "d-fixed" : "d-none"}`}>
            <LoadingScreen />
        </div>
        <div className={`${isLoading || !Object.keys(currentCourse).length ? "d-none" : "d-block"}`}>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default SortedRoute;