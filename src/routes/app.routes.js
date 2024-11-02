import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/"
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Header />
            <Routes >
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/favorites"
                    element={<Favorites />}
                />
                <Route
                    path="/details/:id"
                    element={<Details />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>

    )

}