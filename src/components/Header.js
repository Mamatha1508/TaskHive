import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, CheckSquare, FolderKanban, BarChart3, Settings, UserCircle } from "lucide-react";

const Header = () => {
    return (
        <div className="header-container">

            <Link to='/'><img src="https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg" /></Link>

            <ul>
                <Link to="/"><li><LayoutDashboard />Dashboard</li></Link>
                <Link to="/add-tasks"><li><CheckSquare />My Tasks</li></Link>
                <Link to='/projects'><li><BarChart3 />Projects</li></Link>
                <Link to="/analytics"> <li>Analytics</li></Link>
                <li><Settings />Settings</li>
                <li><UserCircle />Logout</li>

            </ul>


        </div>
    )
}

export default Header