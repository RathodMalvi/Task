import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./features/Login";
import Product from "./features/Product";
import PAgeNotFound from "./features/PAgeNotFound";
import PageNotFound from "./features/PAgeNotFound";

const router =createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Login/>},
            {path:'product',element:<Product/>},
        ]},
        {path:'*',element:<PageNotFound/>}
])

export default router