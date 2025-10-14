import React, { useState } from "react";
import AddProject from "../projectManagement/AddProject";


const ProjectsManagement = () => {
    //let projects= localStorage.getItem('projects') && JSON.parse(localStorage.getItem('projects'));
    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || [])
    const [showProjectMenu,setShowProjectMenu]=useState(false);
    const [showRowIndex,setShowRowIndex]=useState();
    const [deletePopup,setDeletePopup]=useState(false);
    const [editedProject,setEdtedProject] =useState();

    const handleProjectsAdded = (data) => {
        console.log('projects added', data)
        setProjects(data)
    }
    const handleAddProject = () => {
        setShowProjectPopup(true)
    }


    const handleProjectPopupVisibility = (popupvisibility) => {
        setShowProjectPopup(popupvisibility);
    }

    const handleProjectMenuVisbility = (id) => {
       if(showRowIndex==id)
         setShowProjectMenu(!showProjectMenu);
        else
        {
            setShowProjectMenu(true)
            setShowRowIndex(id);
        }
       
    }

    const handleDeleteProject=()=>{
        setDeletePopup(true)
    }

    const handleCancelDelete=()=>{
        setDeletePopup(false)
    }
    const handleConfirmDelete=(index)=>{
   const FilteredProjects= projects.filter((project)=> project.id != index);
   localStorage.setItem('projects',JSON.stringify(FilteredProjects));
   setProjects(FilteredProjects);
   setDeletePopup(false)
    }

    const handleCopyProject=(project)=>{
                     const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
   console.log('project copy',project)
        let copyObj= {
           title: project.title+ " (Copy)",
                desc:project.desc,
                date: project.date,
                priority : project.priority,
                status:project.status,
                id : generateId()

        }
        console.log('copied obj',copyObj)
        let copiedProjects= [...projects,copyObj];
        console.log('copied projects',copiedProjects)
       localStorage.setItem('projects', JSON.stringify(copiedProjects));
        setProjects(copiedProjects);


    }

    const handleUpdateProject=(project)=>{
       setEdtedProject(project)
        setShowProjectPopup(true)
    }
    return (
        <div>
            <div>
                <input type="search" placeholder="Search Projects" />
                <button onClick={handleAddProject}>Add Project</button>
            </div>
            {
                projects.length > 0 && projects.map((project, index) => {
                    return (
                        <div key={project.id}>
                            <label> {project.title}</label>
                            <label> {project.date}</label>
                            <label> {project.priority}</label>
                            <label> {project.status}</label>
                      <div className="popupMenu__icon_project " onClick={() => handleProjectMenuVisbility(project.id)}><svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6C13.8997 6 13 6.89974 13 8C13 9.10026 13.8997 10 15 10C16.1003 10 17 9.10026 17 8C17 6.89974 16.1003 6 15 6ZM15 13.3333C13.8997 13.3333 13 14.2331 13 15.3333C13 16.4336 13.8997 17.3333 15 17.3333C16.1003 17.3333 17 16.4336 17 15.3333C17 14.2331 16.1003 13.3333 15 13.3333ZM15 20.6667C13.8997 20.6667 13 21.5664 13 22.6667C13 23.7669 13.8997 24.6667 15 24.6667C16.1003 24.6667 17 23.7669 17 22.6667C17 21.5664 16.1003 20.6667 15 20.6667Z" fill="#828282"></path></svg>
                                {showProjectMenu &&   project.id== showRowIndex && <div className="project_popupMenu">
                                    <li onClick={()=> handleUpdateProject(project)}>Update project</li>
                                    <li onClick={()=> handleCopyProject(project)}>Copy project</li>
                                    <li onClick={()=> handleDeleteProject()}>Delete project</li>
                                </div>}      

                            </div>
                        </div>
                    )
                })
            }
            {showProjectPopup && <AddProject projectPopupVisibility={handleProjectPopupVisibility} onProjectAdded={handleProjectsAdded} EditedProject={editedProject}/>
            }
           {deletePopup && <div>
                <h3>Are you sure you want to delete?</h3>
                <div>
                    <button onClick={()=>handleCancelDelete()}>Cancel</button>
                    <button onClick={()=>handleConfirmDelete(showRowIndex)}>Delete</button>
                </div>
            </div>} 
        </div>
    )

}

export default ProjectsManagement;