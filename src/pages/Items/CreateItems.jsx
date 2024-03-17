import { Outlet } from "react-router-dom";

export function CreateItems() {
    return(
        <div>
        <h1 className="text-5xl text-center">CreateItems</h1>
        <Outlet/>
        </div>
    )
}