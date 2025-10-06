import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddTask = ({ setShowTaskPopup }) => {

    // console.log('tasks first',tasks)
    const [saveTask, setSaveTask] = useState(false);
    let existingTasks = localStorage.getItem('taskslist') && JSON.parse(localStorage.getItem('taskslist'));
    console.log('existing taskss', existingTasks);
    // existingTasks==null ? existingTasks=[] : existingTasks=existingTasks;
    existingTasks = existingTasks || [];
    const [tasks, setTasks] = useState(existingTasks);
    //console.log('existing task',existingTasks.length)

    const { register, handleSubmit } = useForm();
    const onTaskSubmit = (data) => {
        console.log('data', data)
        console.log('add tasks', tasks)
        let newArr = [...tasks, data]
        localStorage.setItem('taskslist', JSON.stringify(newArr))
        setTasks(newArr);
        // setShowTaskPopup(false)
        setShowTaskPopup(false)


    }

    const handleTaskCancel = () => {
        setShowTaskPopup(false)
    }
    return (

        <div className="add-tasks-form-container">
            {/* <h2> Add New Task</h2> */}
            
            <form className="add-tasks-form" onSubmit={handleSubmit(onTaskSubmit)}>
                <label>Task Title</label>
                <input type="text" {...register("title")} />
                <label>Description</label>
                <textarea {...register("desc")}></textarea>
                <label>Due Date</label>
                <input type="date" {...register("date")} />
                <label>Priority</label>
                <select {...register("priority")}>
                    <option type="dropdown" > Low</option>
                    <option type="dropdown" > Medium</option>
                    <option type="dropdown"> High</option>
                </select>
                <label>Status</label>
                <select {...register("status")}>
                    <option type="dropdown" > yet to start</option>
                    <option type="dropdown" > In Progress</option>
                    <option type="dropdown"> Completed</option>
                </select>
                <div className="save-btn">
                    <button type="cancel" onClick={handleTaskCancel}>Cancel</button>
                    <button type="submit" >Save Task</button>
                </div>

            </form>
            {/* <div className="task-list">
                {
                    existingTasks && existingTasks.length>0 && existingTasks.map((task,index)=>{
                        return (
                            <div key={index}>
                                <span>{task.title}</span>
                               
                                  <span>{task.date}</span>
                                  <span>{task.priority}</span>
                                  <span>{task.status}</span>
                                </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}
export default AddTask