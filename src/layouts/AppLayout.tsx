import { Outlet, NavLink } from "react-router-dom"

export default function AppLayout() {
  return (
    <div className="AppLayout">
      {/* <header>
        <NavLink to="/">
          <h1>TV Shows</h1>
        </NavLink>
      </header> */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}
