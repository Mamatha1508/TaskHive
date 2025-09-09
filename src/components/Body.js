import React from "react";
import { Link } from "react-router-dom";


const Body=()=>{
    let tasks= localStorage.getItem('taskslist');
    
    return (
        <div className="dashboard">
                <h1>Welcome User </h1>
                <div className="dashboard-items">
                    
                      <div>
                    Total Tasks
                    {
                     tasks!= null && <label>{JSON.parse(tasks).length} </label>

                    }
                     </div>
                    <div>
                    Completed Tasks
                    </div>
                    <div>
                    Pending Tasks
                    </div>
                </div>
                <div>
                    <Link to='/add-tasks'> <button>Add Task</button></Link>
                   
                  <Link to="/projects"> <button>Add Project </button></Link> 
                </div>
              
        </div>
    )
}

export default Body;