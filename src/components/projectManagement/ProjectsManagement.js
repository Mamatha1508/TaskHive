import React from "react";

const ProjectsManagement=()=>{
    let projects= localStorage.getItem('projects') && JSON.parse(localStorage.getItem('projects'))

    return (
        <div>
            {
                projects.length>0 && projects.map((project,index)=>{
                    return (
                        <div>
                            {project.title}
                        </div>
                    )
                })
            }
        </div>
    )

}

export default ProjectsManagement;