import { Link, Outlet } from "react-router-dom";

export function RootLayout() {
    return(
        <>
        <header>
            <Link to={"/"}>ConnectStock</Link>
            <nav>
                <Link to={"/"} >Inicio</Link>
                <Link to={"/items"}>Items</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
            <footer>Feito com react router dom</footer>
        </header>
        </>
    )
}