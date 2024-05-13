import { Outlet } from "react-router-dom"
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
const MainLayouts = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayouts;