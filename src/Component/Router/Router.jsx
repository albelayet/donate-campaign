import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Statistic from "../Header/Statistic/Statistic";
import ErrorPage from "../ErrorPage/ErrorPage";
import Donate from "../ErrorPage/Donate/Donate";
import Donation from "../Header/Donation";
import Details from "../HomeCard/Details/Details";


const MyCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader : ()=>fetch('/public.json')
            },
            {
                path: "/donate",
                element: <Donation></Donation>
            },
            {
                path: "/statistic",
                element: <Statistic></Statistic>
            },
            {
                path: "/cards/:cardID",
                element: <Details></Details>,
                loader: ()=>fetch('/public.json')
            }

        ]
    }
])

export default MyCreateRouter;