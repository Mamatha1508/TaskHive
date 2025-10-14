import { Proportions } from "lucide-react";
import React, { useEffect } from "react";
import {useState} from 'react'

const AddProject=(props)=>{
   //  const [showProjectPopup,setShowProjectPopup]=useState(false);
   console.log('props in add project',props)
        const [addTasks,setAddTasks]=useState(JSON.parse(localStorage.getItem('projects')) || []);
        const [title,setTitle]=useState("");
        const [desc,setDesc]=useState("");
        const [date,setDate]=useState();
        const [priority,setPriority]=useState();
        const [status,setStatus]=useState();
        const handleProjectPopupVisibilityInProject=(popupvisibility)=>{
            props.projectPopupVisibility(popupvisibility);
        }
        console.log('add tasks',addTasks)
    
        const handleProjectSave=(e)=>{
            e.preventDefault();
            console.log('props.edited project',props.EditedProject)
            if(props.EditedProject)
            {
                console.log('inside props.edited project')
                let updatedObj={
                   title: title,
                desc:desc,
                date: date,
                priority : priority,
                status:status 
                }
              
               let updatedProjects= addTasks.map((project)=> project.id!= props.EditedProject.id ? project : {...updatedObj, id : props.EditedProject.id})
                
               setAddTasks(updatedProjects);
                  props.projectPopupVisibility(false);
           props.onProjectAdded(updatedProjects);

            }
            else{
                const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            let newObj={
                title: title,
                desc:desc,
                date: date,
                priority : priority,
                status:status,
                id : generateId()
            }
            let updatedProjects= [...addTasks,newObj];
            console.log('updated projects',updatedProjects)
           
            setAddTasks(updatedProjects)
            localStorage.setItem('projects',JSON.stringify(updatedProjects))
           props.projectPopupVisibility(false);
           props.onProjectAdded(updatedProjects);
            }
             
              
        }

        useEffect(()=>{
            if(props.EditedProject)
            {
                const {title,desc,date,priority,status}=props.EditedProject
                console.log('edited project data',props.EditedProject.title)
                setTitle(title)
                setDesc(desc)
                setDate(date)
                setPriority(priority)
                setStatus(status)
            }

        },[props.EditedProject])
    return (
        <div className="projects-form">
                <form>
                    <label>Project Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Description</label>
                    <textarea  value={desc} onChange={(e)=> setDesc(e.target.value)}></textarea>
                    <label>Due Date</label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    <label>Priority</label>
                    <select type="dropdown"  value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option>Low</option>
                         <option>Medium</option>
                          <option>High</option>

                    </select>
                    <label>Status</label>
                    <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option>Yet to start</option>
                         <option>In Progress</option>
                          <option>Completed</option>

                    </select>
                    <div>
                        <button onClick={()=>handleProjectPopupVisibilityInProject(false)}>Cancel</button>
                        <button onClick={(e)=>handleProjectSave(e)}>Save</button>
                    </div>

                </form>
            </div>
    )
}

export default AddProject;