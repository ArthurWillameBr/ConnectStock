import { Outlet } from "react-router-dom";

export function ListItems() {
  return (
    <div>
      <h1 className="text-5xl text-center">Todos os items</h1>
      <Outlet />
    </div>
  );
}
