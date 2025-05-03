import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 

export default function Register() {
    let [Name,setname] =useState("");
    let [Email,setemail] =useState("");
    let [Pass,setpass] =useState("");
    let [Age,setage] =useState(0);

    function clear(){
        setname("");
        setemail("");
        setpass("");
        setage(0);
    }
  async function save_data(){
       try {
        let pswd_regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        let username_regex = /^[A-Za-z0-9_]{3,20}$/
       if(!Name || !Email || !Pass || !Age === 0){
        toast.error("All fields  are require");
       }
       else if (!pswd_regex.test(Pass)){
        toast.error("Password invalid");

       }
       else if (!username_regex.test(Name)){
        toast.error("Username invalid");

       }
       else if (Age < 18){
        toast.error("Age must be or greater than 18 ");
         }
         else{
        await axios.post(" http://localhost:3005/Web/reg",{
            user_name:Name,
            user_email:Email,
            password:Pass,
            Age:Age
         })
        console.log("data added sucessfully")
        toast.success("Data saved sucessfully");
        clear()
       }
       } catch (error) {
        if(error.status === 409){
          toast.error("Email already exit")
        }
        else{
          toast.error(error)
          console.log(error)
        }
     
       } 
    }
  return (
    <div className='container'>
    <h2>User Registeration form</h2> <hr/>
    <p>Enter Your Name</p>
    <input type='text'
    placeholder='Enter Your Name' 
    className='form-control my-2' 
    value={Name}
    onChange={(e)=>setname(e.target.value)}/>

     <p>Enter Your Email</p>
    <input type='text'
    placeholder='Enter Your Email' 
    className='form-control my-2'
    value={Email}
    onChange={(e)=>setemail(e.target.value)} />

     <p>Enter Your Password</p>
    <input type='password'
    placeholder='Enter Your Password' 
    className='form-control my-2' 
    value={Pass}
    onChange={(e)=>setpass(e.target.value)}/>

     <p>Enter Your Age</p>
    <input type='number'
    placeholder='Enter Your Age' 
    className='form-control my-2'
    value={Age}
    onChange={(e)=>setage(e.target.value)} />
  <button className='btn btn-primary' onClick={save_data}>Register Me</button>
<ToastContainer/>
    </div>
    
  )

}
