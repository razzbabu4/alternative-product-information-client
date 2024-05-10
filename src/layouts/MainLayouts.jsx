import { Outlet } from "react-router-dom"
import NavBar from "../pages/Shared/NavBar";
const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;