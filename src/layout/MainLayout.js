import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainHeader } from './Header'
import Footer from "./Footer"

const MainLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout