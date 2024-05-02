import { Route, Routes } from "react-router-dom"
import ROUTES from "./routesModel";
import App from "../App";
import HomePage from "../pages/HomePage";
<<<<<<< HEAD
import Clicks from "../components/clicks/Clicks";
=======
>>>>>>> 383d56e49490223d88d80173bfda6d929d5fb71a

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<App />}>
                <Route index={true} path={ROUTES.HOME} element={<HomePage />} />
<<<<<<< HEAD
                <Route path={ROUTES.CLICKS} element={<Clicks />} />
=======
>>>>>>> 383d56e49490223d88d80173bfda6d929d5fb71a
            </Route>
        </Routes>
    )
}

export default Router;