import { Link, Outlet, useLocation } from "react-router-dom";

export function ItemsLayout() {
    const { pathname } = useLocation()
    return(
        <div>
          <h1 className="text-5xl text-center">Items Layout</h1>
             <div className="border-b border-slate-100 py-4 mx-8 ">
               <Link to={"/items"} className={`mx-4 cursor-pointer  px-2 py-4 hover:bg-slate-500/10 ${pathname === '/items' ? "border-b-4 border-slate-50 " : "" }`}>Todos os Items</Link>
               <Link to={"/items/new"} className={`mx-4 cursor-pointer  px-2 py-4 hover:bg-slate-500/10 ${pathname === '/items/new' ? "border-b-4 border-slate-50 " : "" }`}>Novo Item</Link>
               </div>
              <div className="my-10">
               <Outlet/>
               </div>
        </div>
    )
}