import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { MainHeader } from './Header'
import Footer from "./Footer"
import { MLFScreen } from '../components/MLFScreen'
import { slugTranslate } from '../utility/slugTranslate'

const MainLayout = () => {
    const [welcome, setWelcome] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setWelcome(false)
        }, 3000)
    }, [])
    const { slug } = useParams()
    const location = useLocation();
    const firstPath = location.pathname.split('/')[1].toLowerCase();
    switch (firstPath) {
        case "instructors":
            if (!slugTranslate({ slug, target: "instructors" })) {
                return <Navigate to="/" />
            }
            break;
        default:
            break;
    }
    return welcome ? <MLFScreen /> : (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout