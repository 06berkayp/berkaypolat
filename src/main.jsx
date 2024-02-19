import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from '@/routes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/store'
import { inject } from '@vercel/analytics'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        inject()
        <RouterProvider router={routes} />
    </ReduxProvider>
)
