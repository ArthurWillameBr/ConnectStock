import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <main className="h-screen ">
      <header className="flex justify-between m-6 ">
        <Link className="text-3xl font-lalezar" to={"/"}>
          CONNECT STOCK
        </Link>
        <nav className="mt-2">
          <Link
            className="text-2xl mx-4 cursor-pointer rounded-md px-6 py-4 hover:bg-slate-500/10 "
            to={"/"}
          >
            Inicio
          </Link>
          <Link
            className="text-2xl mx-4 cursor-pointer rounded-md px-6 py-4 hover:bg-slate-500/10 "
            to={"/items"}
          >
            Itens
          </Link>
        </nav>
      </header>
      <div className="">
      <Outlet />
      </div>
      
    </main>
  );
}
