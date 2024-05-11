import { Outlet } from "react-router-dom"
import NavBar from "../pages/Shared/NavBar";
const MainLayouts = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;