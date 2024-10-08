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
import QueryDetails from "../pages/QueryDetails";
import AllQueries from "../pages/AllQueries";
import MyRecommendation from "../pages/MyRecommendation";
import RecommendationForMe from "../pages/RecommendationForMe";
import Notification from "../pages/Notification";


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
                element: <PrivateRoute>
                    <AddQueries />
                </PrivateRoute>
            },
            {
                path: '/queryDetails/:id',
                element: <PrivateRoute><QueryDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://alternative-product-information-server.vercel.app/queries/${params.id}`)
            },
            {
                path: '/updateQuery/:id',
                element: <UpdateQueries />,
                loader: ({ params }) => fetch(`https://alternative-product-information-server.vercel.app/queries/${params.id}`)
            },
            {
                path: '/allQueries',
                element: <AllQueries />
            },
            {
                path: '/myRecommendation',
                element: <MyRecommendation />
            },
            {
                path: '/recommendation',
                element: <RecommendationForMe />
            },
            {
                path: '/notification',
                element: <Notification/>
            }

        ]
    },
]);

export default router;