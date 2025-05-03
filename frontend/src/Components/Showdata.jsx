import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Showdata() {
    let[user_data,setUserdata]=useState([]);
    useEffect(()=>{
     datalao();
    })
    async function datalao(){
        await axios.get("http://localhost:3005/Web/user")
        .then((abc)=>{
            console.log(abc.data)
            setUserdata(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    async function remove(id){
     try {
      if(window.confirm("Are you sure you want to delete this record")){
        await axios.delete(` http://localhost:3005/Web/user/${id}`).then(()=>{
          datalao();
          toast.info("Record Delete Sucessfully")
        })
      }
     } catch (error) {
      
     }
    }
  return (
    <div className='container'>
      <ToastContainer/>
        <h1>User data</h1>
        <hr />
        <div className='row'>
          {(user_data.length === 0) ?(
          <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="card-title text-danger"></div>
                </div>
            </div>
          </div>
          ):
          user_data.map((a)=>(
            <div className="col-md-3 mt-2">
                <div className="card">
                    <div className="card-title">{a.user_name}</div>
                    <div className="card-text">{a.user_email}</div>
                    <button className='btn btn-danger btn-sm' onClick={()=>{remove(a._id)}}><i class="bi bi-trash3"></i></button>
                </div>
            </div>
          ))
          }
        </div>
    </div>
  )
}
