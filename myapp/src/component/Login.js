import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function Login(){
    const[data,setData]=useState({
        email:"",
        password:"",
    });
    const[errors,setError]=useState();

    const navigate = useNavigate();
    const handleChange = (e) => {
      const{name,value}=e.target;
     setData((prevUser)=>({
      ...prevUser,[name]:value
     }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
          if(localStorage.getItem('users')){
            const users = JSON.parse(localStorage.getItem('users'));
            const matchUser= users.find(
              (u)=> u.email == data.email && u.password == data.password
            )
            if(matchUser){
              Swal.fire({
                position:"top-center",
                icon:"success",
                title:"You have successfully Login",
                showConfirmButton:false,
                timer:2500,
                })
                navigate('/home')

            }else{
              setError('Invalid Login')
            }

          }
     }
    return(
        <div className="pict">
    <div className="faith">
      <h2 className="afo">SIGN UP</h2>


      <form action="" onSubmit={handleSubmit}>
      <input
className="real"
type="text"
name="email"
id="email"
value={data.email}
placeholder="Email @gmail.com"
onChange={handleChange}
/>
{/* <p id="fourth">{errors.emailErr}</p> */}
<br/>
<input
className="real"
type="text"
value={data.password}
name="password"
id=""
placeholder="password"
onChange={handleChange}
/>
{/* <p id="fifth">{errors.passwordErr}</p> */}
{errors && <div className="alert alert-danger">{errors}</div>}
<br/>
<button type="submit" value={Login} className="yam">Login</button>

    

</form>

</div>
    </div>




    )






}
       export default Login