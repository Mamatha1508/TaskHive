import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";


const CopyTask=()=>{
    const {tasks,showRowIndex,handleCopyTask}= useOutletContext();
    const {taskId}=useParams();
    console.log('copy tasks', tasks,showRowIndex,taskId);
    const [copyTask,setCopyTask]=useState(tasks);
    const handleCopiedTasks=()=>{
        console.log('handle copy tasks',showRowIndex)
        handleCopyTask(taskId)
    }
    handleCopiedTasks();
    return (
        <div>
            
        </div>
    )
}

export default CopyTask