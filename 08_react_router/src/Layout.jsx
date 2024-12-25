import React from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router'
function Layout() {
    return (
        <>
            <Header />
            <Outlet />  {/* If we required the header and the footer same for the entire webpage then we need to use this technique */}
            <Footer />
        </>
    )
}

export default Layout
