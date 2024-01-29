import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import LoggedInPage from "./components/pages/LoggedInPage";
import WeatherPage from "./components/pages/WeatherPage";
import LoggedInRoutes from "./route-guards/LoggedInRoutes";
import LoggedOutRoutes from "./route-guards/LoggedOutRoutes";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isLoading } = useAuth0();
    return (
        <>
            <NavigationBar />
            {isLoading ? (
                <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    Loading...
                </h1>
            ) : (
                <Routes>
                    <Route element={<LoggedOutRoutes />}>
                        <Route path="/" element={<LandingPage />} />
                    </Route>
                    <Route element={<LoggedInRoutes />}>
                        <Route path="/home" element={<LoggedInPage />} />
                        <Route path="/forecast" element={<WeatherPage />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
