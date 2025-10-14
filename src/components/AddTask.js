import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const AddTask = (props) => {

    
    const [saveTask, setSaveTask] = useState(false);
    let existingTasks = localStorage.getItem('taskslist') && JSON.parse(localStorage.getItem('taskslist'));
    console.log('existing taskss', existingTasks);
  
    existingTasks = existingTasks || [];
    const [tasks, setTasks] = useState(existingTasks);
   
    const { register, handleSubmit, setValue, reset } = useForm();
    const onTaskSubmit = (data) => {

        if(props.existingTask)
        {
        let newArr= tasks.map((t)=> t.id==props.existingTask.id ? {...data} : t)
         localStorage.setItem('taskslist',JSON.stringify(newArr))
          setTasks(newArr);
        props.setShowTaskPopup(false);
         props.onTaskAdded(newArr);

        }
        else
        {
             console.log('data', data)
        console.log('add tasks', tasks);
        const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        const newTask= {...data, id: generateId()}
        console.log('new task')
        let newArr = [...tasks, newTask]
        localStorage.setItem('taskslist', JSON.stringify(newArr))
         setTasks(newArr);
        props.setShowTaskPopup(false);
         props.onTaskAdded(newArr);
        }
       
       


    }

    const handleTaskCancel = () => {
        props.setShowTaskPopup(false)
    }


     useEffect(() => {
    if (props.existingTask) {
      for (const [key, value] of Object.entries(props.existingTask)) {
        setValue(key, value);
      }
    } else {
      reset(); // clear form for Add mode
    }
  }, [props.existingTask, setValue, reset]);

    console.log('props.existing task',props.existingTask)
    return (

        <div className="add-tasks-form-container">
        
            <form className="add-tasks-form" onSubmit={handleSubmit(onTaskSubmit)}>
                  {props.existingTask ?  <h2> Update Task</h2> : <h2>Add New Task</h2>}
            
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
        </div>
    )
}
export default AddTask