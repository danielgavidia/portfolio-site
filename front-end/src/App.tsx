import { useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
    const [dashboard, setDashboard] = useState<string>("projects");
    const handleSetDashboard = (state: string): void => {
        setDashboard(state);
    };
    console.log(dashboard);

    if (dashboard === "projects") {
        return (
            <div className="App">
                <Navbar handleSetDashboard={handleSetDashboard} />
                <Projects />
            </div>
        );
    } else if (dashboard === "about") {
        return (
            <div className="App">
                <Navbar handleSetDashboard={handleSetDashboard} />
                <About />
            </div>
        );
    }
};

export default App;
