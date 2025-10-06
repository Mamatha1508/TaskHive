import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import ProjectsOverview from "./projectManagement/ProjectsOverview";
import TasksOverview from "../TasksOverview";


const Body = () => {
  let tasks = localStorage.getItem('taskslist') && JSON.parse(localStorage.getItem('taskslist'));
// console.log('task count',tasks.length>0)
// const [ showTaskPopup, setShowTaskPopup]= useState(false);
  // const handleTaskPopupVisibility=()=>{
  //     setShowTaskPopup(true)
  // }

  return (
    <div className="dashboard">
      <div className="search-box">
        <input type="text" placeholder="    🔍     Search..." />

      </div>
      <div className="dashboard-overview">
        <h1>Stay Productive user!! </h1>
        <div className="dashboard-items">

          <div className="tasks-overview-container">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" />
            </div>
            <div className="tasks-count">
              {
              tasks &&   tasks.length > 0 && <label className="completed-tasks">{tasks.filter((task) => task.status == "Completed").length} </label>

              }
              <p>Completed Tasks</p>
            </div>

          </div>
         <div className="tasks-overview-container">
            <div>
              <img src="https://t4.ftcdn.net/jpg/16/56/94/25/360_F_1656942543_lOhvwycQkS3cnoNrxUslcwO781qxbIuU.jpg" />
            </div>
            <div className="tasks-count">
              {
               tasks &&  tasks.length > 0 && <label className="pending-tasks">{tasks.filter((task) => task.status == "In Progress").length} </label>

              }
              <p>Pending Tasks</p>
            </div>

          </div>
          <div className="tasks-overview-container">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" />
            </div>
            <div className="tasks-count">
              {
               tasks &&  tasks.length > 0 && <label className="completed-tasks">{tasks.filter((task) => task.status == "Completed").length} </label>

              }
              <p>Completed Tasks</p>
            </div>

          </div>
        </div>
      </div>
       {/* {
          showTaskPopup && <AddTask className="add-tasks-popup"  setShowTaskPopup={setShowTaskPopup}/>
           } */}
    
     <div className="tasksAndProjects-Overview">
      
         <div className="projects-overview">
          <ProjectsOverview/>
        </div>
         <div className="tasks-overview">
          <TasksOverview tasksList={tasks}/>
        </div>
    
        
     </div>

      <div>
       {/* <button onClick={()=>handleTaskPopupVisibility(true)}>Add Task</button> */}

        <Link to="/projects"> <button>Add Project </button></Link>
      </div>

    </div>
  )
}

export default Body;