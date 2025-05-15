import { createBrowserRouter } from 'react-router-dom'

import { SingIn } from './pages/auth/sing-in'
import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'
import { SingUp } from './pages/auth/sing-up'
import { Dashboard } from './pages/app/dashboard/dashboeard'
import { Orders } from './pages/app/orders/orders'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/orders', element: <Orders /> },
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sing-in', element: <SingIn /> },
            { path: '/sing-up', element: <SingUp /> },
        ]
    },


]) 