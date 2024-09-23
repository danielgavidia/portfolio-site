import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    const [dashboard, setDashboard] = useState<string>("home");
    const handleSetDashboard = (state: string): void => {
        setDashboard(state);
    };
    console.log(dashboard);

    if (dashboard === "home") {
        return (
            <div className="App">
                <Navbar handleSetDashboard={handleSetDashboard} />
                <Home />
            </div>
        );
    } else if (dashboard === "about") {
        return (
            <div className="App">
                <Navbar handleSetDashboard={handleSetDashboard} />
                <About />
            </div>
        );
    } else if (dashboard === "contact") {
        return (
            <div className="App">
                <Navbar handleSetDashboard={handleSetDashboard} />
                <Contact />
            </div>
        );
    }
};

export default App;
