
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { CourseHeader } from "./Header";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";


const slugs = {
    "MAVL": 1751294
}
function SortedRoute({ children }) {
    const location = useLocation();
    const at = location.pathname.slice(1)
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
        <div className={`${loading ? "d-fixed" : "d-none"}`}>
            <CourseHeader />
            <LoadingScreen />
            <Footer />
        </div>
        <div className={`${loading ? "d-none" : "d-block"}`}>
            <CourseHeader />
            <Outlet />
            <Footer />
        </div>
    </>
}

export default SortedRoute;