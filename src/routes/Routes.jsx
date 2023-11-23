import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/terms/Terms";

const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:"/",
                element:<Navigate to="/catagory/0"/>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/terms",
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: "catagory",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: ":id",
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-pi-two.vercel.app/catagories/${params.id}`)
            },
            /* {
                path: ":id",
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-jtxpeopxb-rifat-bhuiyans-projects.vercel.app/catagories/${params.id}`)
            }, */
            /* loader: ({ params }) => {
                async function externalContent() {
                    await fetch(`https://the-news-dragon-server-82plugslw-rifat-bhuiyans-projects.vercel.app/catagories/${params.id}`)
                        .then(res => { return res })
                }
            } */
        ]
    },

    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            /* {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }, */
            {
                path: ":id",
                // element: <News></News>,
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-pi-two.vercel.app/news/${params.id}`)
            },
        ]
    }
])

export default router;