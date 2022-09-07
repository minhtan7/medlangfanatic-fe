
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";


const slugs = {
    "oral-presentation": 1529640,
    "MAVL": 1751294
}
function SortedRoute({ children }) {
    const location = useLocation();
    const at = location.pathname.slice(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    if (!slugs[at]) {
        return <Navigate to="/" />
    }
    return <>
        {/* <LoadingScreen /> */}
        <LoadingScreen display={`${loading ? "d-fixed" : "d-none"}`} />
        <div className={`${loading ? "d-none" : "d-block"}`}>
            {children}
        </div>
    </>
}

export default SortedRoute;