import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
        </div>
    );
}

export default App;