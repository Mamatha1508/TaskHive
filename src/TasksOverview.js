import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

const TasksOverview=({tasksList})=>{
    const [showTaskPopup,setShowTaskPopup]= useState(false);
   
    const [updatedTasks,setUpdatedTasks]=useState(()=>{
        var tasks= localStorage.getItem('taskslist') && localStorage.getItem('taskslist').length>0 && JSON.parse(localStorage.getItem('taskslist'));
        console.log('tasks',tasks)
        return tasks;
    });


   
    const handlePopupVisibility=()=>{
        setShowTaskPopup(true);

    }

    const handleAddTask=(data)=>{
        setUpdatedTasks(data);
    }

   
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
                   updatedTasks && updatedTasks.length>0 && updatedTasks.map((task,index)=> <tr key={index} className="overview-tasks">{task.title && <td>{task.title} </td> }{task.date && <td>{task.date} </td>}{task.priority && <td className="priority">{task.priority}</td>}  </tr>)
                }
                </tbody>
                </table>
                
            </div>
            {
                showTaskPopup && <AddTask setShowTaskPopup={setShowTaskPopup}  onTaskAdded={handleAddTask}/>
            }
            
        </div>
    )
}

export default TasksOverview