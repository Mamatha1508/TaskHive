import React from "react";
import ReactDOM from "react-dom/client"
import Login from "./src/components/Login";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import AddTask from "./src/components/AddTask";
import Analytics from "./src/components/Analytics";
import ManageProjects from "./src/components/ManageProjects";

const Index=()=>{
    return (
        <div>
           {/* <Login/> */}
           <Header/>
           <Outlet/>
        </div>
    )

}

const appRouter= createBrowserRouter([
    {
            path:'/',
            element : <Index/>,
            children :[
                {
                    path : '/',
                    element : <Body/>
                },
                {
                    path: '/add-tasks',
                    element : <AddTask/>
                },
                {
                    path:"/analytics",
                    element : <Analytics/>
                },
                {
                    path : "/projects",
                    element: <ManageProjects/>
                }
           ]
    }
    

   

])

const root= ReactDOM.createRoot(document.querySelector('[id="root"]'));
root.render(<RouterProvider router={appRouter}/>);

