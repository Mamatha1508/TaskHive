import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

const TasksOverview=({tasksList})=>{
    const [showTaskPopup,setShowTaskPopup]= useState(false);
     var tasks= tasksList && tasksList.length>0 && tasksList.filter((task)=> task.priority=="Low")
    const [updatedTasks,setUpdatedTasks]=useState(()=>{
        var tasks= localStorage.getItem('taskslist') && localStorage.getItem('taskslist').length>0 && JSON.parse(localStorage.getItem('taskslist'))
        return tasks;
    });
    console.log('updatec tasks',updatedTasks)
    const handlePopupVisibility=()=>{
        setShowTaskPopup(true);

    }


    useEffect(()=>{
      var tasks= JSON.parse(localStorage.getItem('taskslist'));

      setUpdatedTasks(tasks) 

    },[showTaskPopup])
   
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
                showTaskPopup && <AddTask setShowTaskPopup={setShowTaskPopup}/>
            }
            
        </div>
    )
}

export default TasksOverview