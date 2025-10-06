import React, { useState } from "react"

const ManageProjects=()=>{
   const [projects,setProjects]=useState([]);

   console.log('rjects',projects)
    
    return (
        <div>
              {/* <h2> Add New Project</h2> */}
            <form className="add-projects-form" >
                <label>Project Title</label>
                <input type="text" />
                <label>Description</label>
                <textarea value={projects.desc}></textarea>
                <label>Due Date</label>
                <input type="date" value={projects.date}/>
                <label>Priority</label>
                <select value={projects.priority} >
                    <option type="dropdown" > Low</option>
                     <option type="dropdown" > Medium</option>
                      <option type="dropdown"> High</option>
                </select>
                <label>status</label>
                 <select value={projects.status}>
                    <option type="dropdown" > yet to start</option>
                     <option type="dropdown" > In Progress</option>
                      <option type="dropdown"> Completed</option>
                </select>
                <div className="save-btn">
                    <button>Cancel</button>
                    <button>Save Project</button>
                </div>
                </form>
                
        </div>
    )

}
export default ManageProjects;