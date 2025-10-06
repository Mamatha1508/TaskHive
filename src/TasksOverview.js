import React, { useState } from "react";
import AddTask from "./components/AddTask";

const TasksOverview=({tasksList})=>{
    const [showTaskPopup,setShowTaskPopup]= useState(false);
    const handlePopupVisibility=()=>{
        setShowTaskPopup(true)
    }

    var tasks= tasksList && tasksList.length>0 && tasksList.filter((task)=> task.priority=="Low")
    return (
        <div>
            <div className="tasks-overview-header">
                <h4>
                    Tasks
                </h4>
                <button onClick={handlePopupVisibility}> + Add Task</button>
            </div>
            <div className="tasks-overview-list">
                <table>
                    <thead></thead>
                    <tbody>
                        {
                   tasks && tasks.length>0 && tasks.map((task,index)=> <tr key={index} className="overview-tasks">{task.title && <td>{task.title} </td> }{task.date && <td>{task.date} </td>}{task.priority && <td className="priority">{task.priority}</td>}  </tr>)
                }
                </tbody>
                </table>
                
            </div>
            {
                showTaskPopup && <AddTask setShowTaskPopup={setShowTaskPopup}/>
            }
            
        </div>
    )
}

export default TasksOverview