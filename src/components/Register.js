import React from "react";
import { useState } from "react";
import "../Main.css";
const Register = () =>{
    const [data, setData]=useState({
        email: "",
        password: ""
    })

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

      const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        fetch('http://localhost:4000/register',{
         method: 'POST',
         headers: {"content-type": "application/json"},
         body: JSON.stringify(data)
        }).then(response => response.json()
            //()=>{
            //console.log('new user added'); 
        //  history.push('/');
        //}
        )
        //.then(error => alert(error.statu));
        .then(result => alert(JSON.stringify(result.error.message, null, 2)));
    }

    return(
        <div className="Main_body">
            <form action="POST" className="Regist">
                <div className="form_head">
                    <h5>REGISTER</h5>
                </div>
                {/* <input type="text" className="input1" placeholder="UserName" required/> */}
                <input type="email" className="input2" placeholder="Email" name="email" required onChange={handleChange}/>
                <input type="password" className="input3" placeholder="Password" name="password" required onChange={ handleChange }/>
                <button className="tuma" type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}
export default Register;