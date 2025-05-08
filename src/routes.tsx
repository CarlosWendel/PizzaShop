import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboeard'
import { SingIn } from './pages/auth/sing-in'
import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/', element: <Dashboard /> }]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [{ path: '/sing-in', element: <SingIn /> }]
    },
    

]) 