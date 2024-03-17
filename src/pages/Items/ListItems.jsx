import { Outlet } from "react-router-dom";

export function ListItems() {
    return(
        <div>
<h1 className="text-5xl text-center">ListItems</h1>
<Outlet/>
        </div>
        
    )
}