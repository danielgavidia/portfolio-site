import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
    const [dashboard, setDashboard] = useState("home");
    console.log(dashboard);

    if (dashboard === "home") {
        return (
            <div className="App">
                <Navbar />
                <Home />
            </div>
        );
    } else if (dashboard === "about") {
        return (
            <div className="App">
                <Navbar />
                <About />
            </div>
        );
    } else if (dashboard === "contact") {
        return (
            <div className="App">
                <Navbar />
                <Contact />
            </div>
        );
    }
};

export default App;
