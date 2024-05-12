import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import MyQueries from "../pages/MyQueries";
import AddQueries from "../pages/AddQueries";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpdateQueries from "../pages/UpdateQueries";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/myQueries',
                element: <PrivateRoute>
                    <MyQueries />
                </PrivateRoute>
            },
            {
                path: '/addQueries',
                element: <PrivateRoute><AddQueries /></PrivateRoute>
            },
            {
                path: '/updateQuery/:id',
                element: <UpdateQueries/>,
                loader: ({params})=> fetch(`http://localhost:5000/queries/${params.id}`)
            }

        ]
    },
]);

export default router;