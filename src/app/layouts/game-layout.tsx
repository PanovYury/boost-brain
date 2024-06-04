import { Outlet } from "react-router-dom";

export const GameLayout = () => (
  <section className="flex flex-col items-center justify-center h-full">
    <Outlet />
  </section>
)