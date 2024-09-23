interface iNavbar {
    handleSetDashboard: (state: string) => void;
}

interface iNavbarButton {
    state: string;
    handleSetDashboard: (state: string) => void;
}

const NavbarButton: React.FC<iNavbarButton> = ({
    state,
    handleSetDashboard,
}) => {
    const capitalized = state.charAt(0).toUpperCase() + state.slice(1);
    return (
        <li className="p-1">
            <button className="btn" onClick={() => handleSetDashboard(state)}>
                {capitalized}
            </button>
        </li>
    );
};

const Navbar: React.FC<iNavbar> = ({ handleSetDashboard }) => {
    const arr = ["home", "about", "contact"];
    return (
        <div className="navbar sticky top-0 z-50 bg-white">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Daniel Gavidia</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {arr.map((x) => {
                        return (
                            <NavbarButton
                                state={x}
                                handleSetDashboard={handleSetDashboard}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
