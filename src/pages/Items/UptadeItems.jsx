import { Outlet } from "react-router-dom";

export function UpdateItems() {
    return(
        <div>
        <h1 className="text-5xl t text-center">Update Items</h1>
        <Outlet/>
        </div>
    )
}