import React from "react";

const Login=()=>{
    return (
        <div className="form">
            <form className="loginForm">
                <div className="loginFields">
                <label>UserName</label>
                <input type="text"  name="username"></input>
                </div>
                <div className="loginFields">
                    <label>Email</label>
                <input type="text"  name="email"></input>
                </div>
                <div className="loginFields">
                 <label>Password</label>
                <input type="text"  name="password"></input>
                </div>
               
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Login