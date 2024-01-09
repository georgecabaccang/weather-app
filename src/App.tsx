import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoggedInPage from "./components/pages/LoggedInPage";
import WeatherPage from "./components/pages/WeatherPage";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<LoggedInPage />} />
                <Route path="/forecast" element={<WeatherPage />} />
            </Routes>
        </>
    );
}

export default App;
