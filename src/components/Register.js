import React from "react";
import "../Main.css";
const Register = () =>{

    return(
        <div className="Main_body">
            <form action="" className="Regist">
                <div className="form_head">
                    <h5>REGISTER</h5>
                </div>
                <input type="text" className="input1" placeholder="UserName" required/>
                <input type="email" className="input2" placeholder="Email" required/>
                <input type="password" className="input3" placeholder="Password" required/>
                <button className="tuma" type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Register;