import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
// import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <h2>home</h2>
            },
            {
                path: '/login',
                element: <h2>login</h2>
            },
            {
                path: '/register',
                element: <h2>register</h2>
            },
            
        ]
    },
]);

export default router;