import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="p-2 h-24 bg-black">
            <div className="container flex space-x-3">
                <Link to="/" className="text-white text-2xl font-bold">Home</Link>
                <Link to="/about" className="text-white text-2xl font-bold">about</Link>
                <Link to="/users" className="text-white text-2xl font-bold">users</Link>
            </div>
        </nav>
    )
}

export default NavBar;