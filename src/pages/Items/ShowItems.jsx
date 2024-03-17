import { Outlet } from "react-router-dom";

export function ShowItems() {
    return(
        <div>
        <h1 className="text-5xl t text-center">ShowItems</h1>
        <Outlet/>
        </div>
    )
}