import { Outlet } from "react-router-dom";

export function ItemsLayout() {
    return(
        <div>
        <h1 className="text-5xl text-center">ItemsLayout</h1>
        <Outlet/>
        </div>
    )
}