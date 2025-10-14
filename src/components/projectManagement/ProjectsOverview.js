import React, { useEffect, useRef } from "react";
import { useState } from "react";
import AddProject from "./AddProject";

const ProjectsOverview=()=>{
     const [showProjectPopup,setShowProjectPopup]=useState(false);
     const [projectsAdded,setProjectsAdded]=useState();
    // const [addTasks,setAddTasks]=useState([]);
    // const [title,setTitle]=useState("");
    // const [desc,setDesc]=useState("");
    // const [date,setDate]=useState();
    // const [priority,setPriority]=useState();
    // const [status,setStatus]=useState();
    const handleProjectPopupVisibility=(popupvisibility)=>{
        setShowProjectPopup(popupvisibility);
    }

    const handleProjectsAdded=(data)=>{
        console.log('projects added',data)
        setProjectsAdded(data)
    }
    // console.log('add tasks',addTasks)

    // const handleProjectSave=(e)=>{
    //     e.preventDefault();
    //      const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    //     let newObj={
    //         title: title,
    //         desc:desc,
    //         date: date,
    //         priority : priority,
    //         status:status,
    //         id : generateId()
    //     }
    //     let updatedProjects= [...addTasks,newObj];
    //     console.log('updated projects',updatedProjects)
       
    //     setAddTasks(updatedProjects)
    //     localStorage.setItem('projects',JSON.stringify(updatedProjects))
    //     setShowProjectPopup(false);
          
    // }
    useEffect(()=>{
       // console.log('in effect projects',JSON.parse(localStorage.getItem('projects')))
        if(localStorage.getItem('projects'))
     setProjectsAdded(JSON.parse(localStorage.getItem('projects')))
    },[])
    return (
        <div>
            <div className="projects-overview-header">
                <h4>
                    Projects
                </h4>
                <button onClick={()=>handleProjectPopupVisibility(true)}> + Add Project</button>
            </div>
         {
            // showProjectPopup &&  <div className="projects-form">
            //     <form>
            //         <label>Project Title</label>
            //         <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            //         <label>Description</label>
            //         <textarea onChange={(e)=> setDesc(e.target.value)}></textarea>
            //         <label>Due Date</label>
            //         <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            //         <label>Priority</label>
            //         <select type="dropdown" onChange={(e)=>setPriority(e.target.value)}>
            //             <option>Low</option>
            //              <option>Medium</option>
            //               <option>High</option>

            //         </select>
            //         <label>Status</label>
            //         <select  onChange={(e)=>setStatus(e.target.value)}>
            //             <option>Yet to start</option>
            //              <option>In Progress</option>
            //               <option>Completed</option>

            //         </select>
            //         <div>
            //             <button onClick={()=>handleProjectPopupVisibility(false)}>Cancel</button>
            //             <button onClick={(e)=>handleProjectSave(e)}>Save</button>
            //         </div>

            //     </form>
            // </div>
            showProjectPopup && <AddProject  projectPopupVisibility={handleProjectPopupVisibility} onProjectAdded={handleProjectsAdded}/>
         } 
          {
          projectsAdded&& projectsAdded.length>0 &&  projectsAdded.map((task,index)=> {
                return ( < div key={task.id}>
                <label>{task.title}</label>
                 <label>{task.date}</label>
                  <label>{task.status}</label>
                 </div>)
            })
          }
        </div>
    )
}

export default ProjectsOverview