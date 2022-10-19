
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { CourseHeader } from "./Header";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";


const slugs = {
    "mavl": 1751294,
    "medical-terminology": 2026776,
}
function SortedRoute({ children }) {
    const location = useLocation();
    const at = location.pathname.slice(1).toLowerCase()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    if (!slugs[at]) {
        return <Navigate to="/" />
    }
    return <>
        {/* <LoadingScreen /> */}
        <CourseHeader />
        <div className={`${loading ? "d-fixed" : "d-none"}`}>
            <LoadingScreen />
        </div>
        <div className={`${loading ? "d-none" : "d-block"}`}>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default SortedRoute;