import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="header-container">
         
               <Link to='/'><img src="https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg"/></Link>
                
                <ul>
                   <Link to="/"><li>Dashboard</li></Link> 
                    <Link to="/add-tasks"><li>My Tasks</li></Link> 
                    <li>Projects</li>
                  <Link to="/analytics"> <li>Analytics</li></Link> 
                    <li>Settings</li>
                    <li>Logout</li>

                </ul>
                
        
        </div>
    )
}

export default Header