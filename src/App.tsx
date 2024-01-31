import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Layouts
import AppLayout from './layouts/AppLayout'

// Pages
import Shows from './pages/Shows'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

import './App.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Shows />} />
      <Route path=":showId" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
