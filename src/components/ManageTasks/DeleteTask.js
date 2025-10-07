
import React, { useEffect, useState } from "react";
import { useOutlet, useOutletContext, useParams } from "react-router";

const DeleteTask=()=>{
    //const tasksList= localStorage.getItem('taskslist') && JSON.parse( localStorage.getItem('taskslist'));
    const [deletePopup,setDeletePopup]=useState(true);
    const {showRowIndex,handleDeletetask} = useOutletContext();
    console.log('index',showRowIndex);
    const {taskId}=useParams();
    const handleDeletePopupVisibility=()=>{
        setDeletePopup(false)
    }
    const deleteTask=()=>{
handleDeletetask();
setDeletePopup(!deletePopup);
    }
    useEffect(()=>{
        console.log('loading useEffect');
        setDeletePopup(true);
    },[taskId])
    return (
       deletePopup && <div className="delete-task">
            <div className="delete">
               <h4>Are you sure you want to Delete?</h4> 
               <div className="delete-buttons">
                <button className="cancel-btn" onClick={()=>handleDeletePopupVisibility()}>Cancel</button>
                <button className="delete-btn" onClick={()=>deleteTask()}>Delete</button>
               </div>
            </div>
        </div>
    )
}

export default DeleteTask;