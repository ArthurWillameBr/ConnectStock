import { Outlet } from "react-router-dom";

export function CreateItems() {
    return(
        <div>
        <h1 className="text-5xl text-center">Criar items</h1>
        <Outlet/>
        </div>
    )
}