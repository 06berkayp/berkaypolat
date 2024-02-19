import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '@/routes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/store'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <RouterProvider router={routes} />
        <Analytics />
    </ReduxProvider>
)
