import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoggedInPage from "./components/pages/LoggedInPage";
import WeatherPage from "./components/pages/WeatherPage";
import LoggedInRoutes from "./route-guards/LoggedInRoutes";
import LoggedOutRoutes from "./route-guards/LoggedOutRoutes";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route element={<LoggedOutRoutes />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route element={<LoggedInRoutes />}>
                    <Route path="/home" element={<LoggedInPage />} />
                    <Route path="/forecast" element={<WeatherPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
