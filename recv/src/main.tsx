import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashBoardLayout } from './components/Layout/DashBoard/DashBoardLayout.tsx'
import { Services } from './pages/dashboard/Services'
import { Results } from './pages/dashboard/Results'
import { Configs } from './pages/dashboard/Configs'
import { Login } from './pages/auth/Login/Login.tsx'
import { Administrative } from './pages/dashboard/Administrative/Administrative.tsx'
import { Users } from './pages/dashboard/Users/Users.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashBoardLayout />,
    errorElement: <>Erro</>,
    children: [
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'results',
        element: <Results />,
      },
      {
        path: 'configs',
        element: <Configs />,
      },
      {
        path: 'administrative',
        element: <Administrative />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/',
    element: <Login />,
    errorElement: <>Erro</>,
  },
])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
