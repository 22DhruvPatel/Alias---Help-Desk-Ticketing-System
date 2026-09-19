import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
            
        <BrowserRouter>
            
            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/login" element={<LoginPage />} />

              

            </Routes>
        </BrowserRouter>
        
    );
}

export default App;