import { Outlet } from 'react-router-dom'
import Navbar from '@/components/navbar'
import OverlayMenu from '@/components/navbar/overlayMenu'

function RootLayout() {
    return (
        <>
            <Navbar />
            <OverlayMenu />
            <Outlet />
        </>
    )
}

export default RootLayout
