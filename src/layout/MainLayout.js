import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MainHeader } from './Header'
import Footer from "./Footer"
import { MLFScreen } from '../components/MLFScreen'

const MainLayout = () => {
    const [welcome, setWelcome] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setWelcome(false)
        }, 3000)
    }, [])
    return welcome ? <MLFScreen /> : (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout