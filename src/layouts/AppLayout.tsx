import { Outlet, NavLink } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <h1>TV Shows</h1>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
