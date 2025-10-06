import React, { useState } from "react";
import AddTask from "./AddTask";
import { Link } from "react-router-dom";

const TaskManagement=()=>{
    const [showUpdateOption,setshowUpdateOption]=useState(false);
    const [showRowIndex,setShowRowIndex]=useState();
    console.log('row index,update option',showRowIndex,showUpdateOption)
    let existingTasks= localStorage.getItem('taskslist') && JSON.parse(localStorage.getItem('taskslist') );
    console.log('existng tasks',existingTasks);
    const handleAdTask=()=>{
       
    }
    const handleMenuVisibility=(index)=>{
        if(showRowIndex==index)
            setshowUpdateOption(!showUpdateOption);
        else
        {
             setshowUpdateOption(true);
        setShowRowIndex(index)
        }
       
    }
    return (
        <div>
            <div>
                <div>
                    <input type="search" placeholder="Seach tasks"/>
                    <button onClick={handleAdTask}>Add Task</button>
                </div>
                <div>
                      <h3>Tasks list</h3>
            </div>
            <div>
                <table className="tasks-menu-list">
                    <tbody>
                         {
                existingTasks.map((task,index)=> <tr key={index} className="tasks-list">
                    <td>{task.title} </td> 
                    <td>  {task.priority}</td>
                     <td> {task.status} </td> 
                   
                 <td className="popupMenu__icon " onClick={()=>handleMenuVisibility(index)} ><svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C13.8997 6 13 6.89974 13 8C13 9.10026 13.8997 10 15 10C16.1003 10 17 9.10026 17 8C17 6.89974 16.1003 6 15 6ZM15 13.3333C13.8997 13.3333 13 14.2331 13 15.3333C13 16.4336 13.8997 17.3333 15 17.3333C16.1003 17.3333 17 16.4336 17 15.3333C17 14.2331 16.1003 13.3333 15 13.3333ZM15 20.6667C13.8997 20.6667 13 21.5664 13 22.6667C13 23.7669 13.8997 24.6667 15 24.6667C16.1003 24.6667 17 23.7669 17 22.6667C17 21.5664 16.1003 20.6667 15 20.6667Z" fill="#828282"></path></svg>
                 
                 {
                    showRowIndex==index && showUpdateOption &&
                    <div>
                            <ul>
                                <li>Update</li>
                                <li>Copy</li>
                                <li>Delete</li>
                            </ul>
                        </div>
                 } 
                 </td>  
                    
                      {/* {
                 showRowIndex==index &&       showUpdateOption &&
                     <td className="task-popup">
                        <div>
                            <ul>
                                <li>Edit</li>
                                <li>Delete</li>
                            </ul>
                        </div>
                      </td>
                  }  */}
                        </tr>)
                        

                       
            }
                    </tbody>
                    
                </table>
            </div>
            {/* {
                existingTasks.map((task,index)=> <div key={index} className="tasks-list">
                    <div>{`${task.title}   ${task.priority}  ${task.status}`}  </div> 
                   
                     <div className="popupMenu__icon " onClick={handleMenuVisibility} ><svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C13.8997 6 13 6.89974 13 8C13 9.10026 13.8997 10 15 10C16.1003 10 17 9.10026 17 8C17 6.89974 16.1003 6 15 6ZM15 13.3333C13.8997 13.3333 13 14.2331 13 15.3333C13 16.4336 13.8997 17.3333 15 17.3333C16.1003 17.3333 17 16.4336 17 15.3333C17 14.2331 16.1003 13.3333 15 13.3333ZM15 20.6667C13.8997 20.6667 13 21.5664 13 22.6667C13 23.7669 13.8997 24.6667 15 24.6667C16.1003 24.6667 17 23.7669 17 22.6667C17 21.5664 16.1003 20.6667 15 20.6667Z" fill="#828282"></path></svg></div>  
                        </div>)
            } */}
                </div>
                {/* <div>
                    {
                        showUpdateOption && <div>
                            show menu
                            </div>
                    }
                </div> */}
              
        </div>
    )
}

export default TaskManagement;