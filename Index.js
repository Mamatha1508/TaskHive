import React from "react";
import ReactDOM from "react-dom/client"
import Login from "./src/components/Login";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import AddTask from "./src/components/AddTask";
// import Analytics from "./src/components/Analytics";
import ManageProjects from "./src/components/ManageProjects";
import TaskManagement from "./src/components/TaskManagement";
import ProjectsManagement from "./src/components/projectManagement/ProjectsManagement";
import DeleteTask from "./src/components/ManageTasks/DeleteTask";
import UpdateTask from "./src/components/ManageTasks/UpdateTask";
import CopyTask from "./src/components/ManageTasks/CopyTask";

const Index=()=>{
    return (
        <div className="main-div">
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
                    element : <TaskManagement/>,
                      children :  [
                        {
                             path : "update-task",
                        element : <UpdateTask/>
                        },
                          {
                             path : "copy-task",
                        element : <CopyTask/>
                        },
                          {
                             path : "delete-task/:taskId",
                        element : <DeleteTask/>
                        }
                       
                       
                       
                    ]
                },
                // {
                //     path:"/analytics",
                //     element : <Analytics/>
                // },
                {
                    path : "/projects",
                    element: <ProjectsManagement/>
                  
                }
           ]
    }
    

   

])

const root= ReactDOM.createRoot(document.querySelector('[id="root"]'));
root.render(<RouterProvider router={appRouter}/>);

