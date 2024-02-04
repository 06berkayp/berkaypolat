import { createBrowserRouter } from 'react-router-dom'

// Pages
import Home from '@/pages/home'
import About from '@/pages/about'
import Projects from '@/pages/projects'

// Layouts
import RootLayout from '@/layouts'

// Not-Found

/** @type {import('react-router-dom').RouteObject[]} */
const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '*',
                element: <div>404! not found.</div>,
            },
        ],
    },
]

export default createBrowserRouter(routes)
