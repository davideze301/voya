
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Register() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    // dateofbirth:"",
    phonenumber: "",
    email: "",
    password: "",
    confirmpassword:"",
  });
  const [errors,setError] = useState({
    firstnameErr: "",
    lastnameErr: "",
    // dateofbirthErr:"",
    phonenumberErr: "",
    emailErr: "",
    passwordErr: "",
    confirmpasswordErr:"",

  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setData(() => {
      return { ...data, [e.target.name]: value };
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    const pushNewErr = {}
    if(data.firstname == ""){
      pushNewErr.firstnameErr = "Firstname is required"
    }
    if(data.lastname == ""){
      pushNewErr.lastnameErr = "Lastname is required"
    }
    // if(data.dateofbirth){
    //   pushNewErr.dateofbirthErr=" date of birth is required"
    // }
    if(data.email == ""){
      pushNewErr.emailErr = "email is required"
    }
    if(data.phonenumber == ""){
      pushNewErr.phonenumberErr = "phone number is required"
    }
    if(data.password == ""){
      pushNewErr.passwordErr = "Password is required"
    }
    if(data.confirmpassword == ""){
      pushNewErr.confirmpasswordErr="confirm your password"
    } 
    else if( data.confirmpassword !== data.password){
      pushNewErr.confirmpasswordErr = "Invalid Password"
    }

    setError(pushNewErr)

   if(Object.keys(pushNewErr).length === 0){
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users));
      Swal.fire({
      position:"top-center",
      icon:"success",
      title:"You have successfully registered",
      showConfirmButton:false,
      timer:2500,
      })
      navigate('/login')
    }
    // if (data.firstname == "") {
    //   console.log("Firstname is required");
    //   document.getElementById("first").innerHTML="Firstname is required"
    //   return;

    // } 
    //  if (data.lastname == "") {
    //   console.log("Lastname is required");
    //   document.getElementById("second").innerHTML="Lastname is required"
    //   return;
    // }
    //  if (data.phonenumber == "") {
    //     console.log("phone number is required");
    //     document.getElementById("third").innerHTML="Phone number is required"
    //     return;
    // } 
    // if(data.email == ""){
    //   console.log("E-mail is required")
    //   document.getElementById("fourth").innerHTML="email is required"
    //   return;
    // }
    // if (data.password == ""){
    //   console.log("password is required");
    //   document.getElementById("fifth").innerHTML="password is required"
    //   return;

    // }else{
    
    //   navigate ("/login");
    // }
   

    // console.log(data);
  };

return( 
  <div className="pict">
    <div className="faith">
      <h2 className="afo">SIGN UP</h2>

      <form action="" onSubmit={handleSubmit}>
<input
className="real"
type="text"
name="firstname"
id=""
placeholder="firstname"
onChange={handleChange}
/>
<p id="first">{errors.firstnameErr}</p>
<br/>
<input
className="real"
type="text"
name="lastname"
id=""
placeholder="lastname"
onChange={handleChange}
/>
<p id="second">{errors.lastnameErr}</p>
<br/>
{/* <input
className="real"
type="date"
name="dateofbirth"
id=""
placeholder=" select date of birth"
onChange={handleChange}
/>
<p id="phil">{errors.dateofbirthErr}</p>
<br/> */}
<input
className="real"
type="text"
name="phonenumber"
id=""
placeholder="phonenumber"
onChange={handleChange}
/>
<p id="third">{errors.phonenumberErr}</p>
<br/>
<input
className="real"
type="text"
name="email"
id=""
placeholder="Email @gmail.com"
onChange={handleChange}
/>
<p id="fourth">{errors.emailErr}</p>
<br/>
<input
className="real"
type="text"
name="password"
id=""
placeholder="password"
onChange={handleChange}
/>
<p id="fifth">{errors.passwordErr}</p>
<br/>
<input
className="real"
type="text"
name="confirmpassword"
id=""
placeholder="confirmpassword"
onChange={handleChange}
/>
<p id="sixth">{errors.confirmpasswordErr}</p>
<br/>
<button type="submit" value={Register} className="yam">Register</button>
<br/>
<p className="roman">I already have an account</p>
<br/>





        </form>




  
    
        </div>
    </div>

 

)
}
      export default Register
        
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        




















































































































































































































