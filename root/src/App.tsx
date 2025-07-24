import * as React from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Cfp from "./pages/cfp";
import Program from "./pages/program";

const App = () => {
    return (
        <Router>
            <RoutedApp />
        </Router>
    );
};

const RoutedApp = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/cfp" element={<Cfp/>} />
                <Route path="/program-2025" element={<Program/>} />
            </Routes>
        </>
    );
};

export default App;