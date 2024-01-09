import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import LandingPage from "./components/pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
}

export default App;
