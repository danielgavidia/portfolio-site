const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Daniel Gavidia</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button
                            className="btn"
                            // onClick={() => handleSetDashboard("home")}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn"
                            // onClick={() => handleSetDashboard("about")}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="btn"
                            // onClick={() => handleSetDashboard("contact")}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
