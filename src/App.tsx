import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Layouts
import AppLayout from './layouts/RootLayout'

// Pages
import Shows from './pages/Shows'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

import './App.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Shows/>}/>
      <Route path="details" element={<Details/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
