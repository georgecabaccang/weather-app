import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoggedInPage from "./components/pages/LoggedInPage";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<LoggedInPage />} />
            </Routes>
        </>
    );
}

export default App;
