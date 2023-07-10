import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return ( <div>
        <header className="flex items-center justify-around">
        <Link className="text-red hover:animate-pulse font-bold text-3xl" to="/">
            Valhøj Skole
        </Link>

        <Link className="mt-5 flex items-center" to="https://www.rk.dk/forside">
            <h1 className="font-bold tracking-wider text-3xl">Rødovre Kommune</h1>
            <img src="" alt="RK logo" />
        </Link>
        </header>
        <Outlet/>
        <footer className="bg-red absolute bottom-0 h-24 w-screen">

        </footer>
    </div> );
}
 
export default Layout;