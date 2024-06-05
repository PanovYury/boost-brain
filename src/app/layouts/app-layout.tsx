import { NavLink, Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <>
      <header className="flex gap-3 p-3">
        <NavLink className="nav-link" to="/">Главная</NavLink>
        <NavLink className="nav-link" to="/games/shulte">Таблица Шульте</NavLink>
        <NavLink className="nav-link" to="/games/math">Математика</NavLink>
      </header>
      <main className="p-3">
        <Outlet />
      </main>
    </>
  )
}