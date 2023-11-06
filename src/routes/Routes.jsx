import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/catagory/:id",
                element:<Catagory></Catagory>,
                loader:({params}) =>fetch(`http://localhost:5000/catagories/${params.id}`)
            },
        ]
    },

    {
        path:"/news",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<News></News>,
                loader:({params}) =>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;