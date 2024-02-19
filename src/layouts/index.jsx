import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import OverlayMenu from '@/components/navbar/overlayMenu'
import { inject } from '@vercel/analytics'

function RootLayout() {
    inject()

    return (
        <>
            <Navbar />
            <OverlayMenu />
            <Outlet />
        </>
    )
}

export default RootLayout
