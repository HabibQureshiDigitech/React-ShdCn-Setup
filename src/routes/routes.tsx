import Layout from "@/Layout/Layout";
import Control from "@/pages/Control";
import Dashboard from "@/pages/Dashboard";
import Finance from "@/pages/Finance";
import EditUser from "@/User/EditUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([{
    path:'/',
    element: <Layout />,
    children:[
        {path:'/' , element: <Dashboard  />},
        { path:'/finance' , element: <Finance />},
        { path:'/edituser/:id' , element: <EditUser />},
        { path:'/control' , element: <Control />}
    
    ]
}])

const Routes = () => {
    return(
        <RouterProvider router={routes}></RouterProvider>
    )
}
export default Routes