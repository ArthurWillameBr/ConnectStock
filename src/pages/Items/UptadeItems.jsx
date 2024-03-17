import { Outlet } from "react-router-dom";

export function UpdateItems() {
    return(
        <div>
        <h1 className="text-5xl t text-center">UpdateItems</h1>
        <Outlet/>
        </div>
    )
}