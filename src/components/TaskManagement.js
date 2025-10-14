import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import { update } from "es-toolkit/compat";


const TaskManagement = () => {
    const [showUpdateOption, setshowUpdateOption] = useState(false);
    const [showRowIndex, setShowRowIndex] = useState();
    const [editTask,setEditTask]=useState();

    console.log('edit Task',editTask)
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('taskslist')) || [])
    const [showAddtaskPopup, setShowAddTaskPopup] = useState(false);
    
    const handleDeletetask = () => {
        let updatedDeletedTasks = tasks.filter((task, index) => task.id != showRowIndex);
        console.log('updated delted tasks', updatedDeletedTasks);
        localStorage.setItem('taskslist', JSON.stringify(updatedDeletedTasks))
        setTasks(updatedDeletedTasks)
    }

    const handleCopyTask=(data)=>{
        console.log('copied task',data)
         let taskToCopy= tasks.find((task)=> task.id==data);
         if(!taskToCopy)
            return ;
      const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const   copiedTask={...taskToCopy,id : generateId(), title : taskToCopy.title+"  (copy)"}
      console.log('copied',copiedTask);
       const updatedTasks = [...tasks, copiedTask];
  localStorage.setItem('taskslist', JSON.stringify(updatedTasks));
  setTasks(updatedTasks);
  
    }

    const handleAddTaskPopup = () => {
        setShowAddTaskPopup(true)
    }

    const handleAddTask = (data) => {
        setTasks(data)
    }
    const handleMenuVisibility = (id) => {
        if (showRowIndex == id)
            setshowUpdateOption(!showUpdateOption);
        else {
            setshowUpdateOption(true);
            setShowRowIndex(id)
        }

    }

    const handleUpdateTask=(id)=>{
        let updatedTask= tasks.find((task)=> task.id==id);
        console.log('updated edit task',updatedTask)
        if(!updatedTask)
            return ;
        setShowAddTaskPopup(true);
        setEditTask(updatedTask);

    }

    return (
        <div>
            <div>
                <div>
                    <input type="search" placeholder="Seach tasks" />
                    <button onClick={handleAddTaskPopup}>Add Task</button>
                </div>
                <div>
                    <h3>Tasks list</h3>
                </div>
                <div>
                    <table className="tasks-menu-list">
                        <tbody>
                            {
                                tasks.map((task, index) => <tr key={index} className="tasks-list">
                                    <td>{task.title} </td>
                                    <td>  {task.priority}</td>
                                    <td> {task.status} </td>

                                    <td className="popupMenu__icon " onClick={() => handleMenuVisibility(task.id)} ><svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C13.8997 6 13 6.89974 13 8C13 9.10026 13.8997 10 15 10C16.1003 10 17 9.10026 17 8C17 6.89974 16.1003 6 15 6ZM15 13.3333C13.8997 13.3333 13 14.2331 13 15.3333C13 16.4336 13.8997 17.3333 15 17.3333C16.1003 17.3333 17 16.4336 17 15.3333C17 14.2331 16.1003 13.3333 15 13.3333ZM15 20.6667C13.8997 20.6667 13 21.5664 13 22.6667C13 23.7669 13.8997 24.6667 15 24.6667C16.1003 24.6667 17 23.7669 17 22.6667C17 21.5664 16.1003 20.6667 15 20.6667Z" fill="#828282"></path></svg>

                                        {
                                            showRowIndex == task.id && showUpdateOption &&
                                            <div>
                                                <ul>
                                                  <li onClick={()=>handleUpdateTask(task.id)}>Update task</li>
                                                   
                                                    {/* <Link to={`copy-task/${task.id}`   }><li >Copy Task</li></Link> */}
                                                    <li onClick={()=>handleCopyTask(task.id)}>Copy Task</li>
                                                    <Link to={`delete-task/${task.id}`}  ><li >Delete Task</li></Link>
                                                </ul>

                                            </div>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>

            </div>

            <Outlet context={{ showRowIndex, handleDeletetask ,tasks  }} />
            {showAddtaskPopup && <AddTask setShowTaskPopup={setShowAddTaskPopup} onTaskAdded={handleAddTask} existingTask={editTask}/>
            }


        </div>
    )
}

export default TaskManagement;