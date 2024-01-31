import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Layouts
import AppLayout from './layouts/AppLayout'

// Pages
import Shows, { ShowsError, showsLoader } from './pages/Shows'
import Details, { DetailsError, detailsLoader } from './pages/Details'
import NotFound from './pages/NotFound'

import './App.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route
        index
        element={<Shows/>}
        loader={showsLoader}
        errorElement={<ShowsError/>}
     />
      <Route path=":showId" element={<Details/>} loader={detailsLoader} errorElement={<DetailsError/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
