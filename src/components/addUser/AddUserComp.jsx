import './addUser.css'

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AddUserComp() {
    const navigate=useNavigate()

    const [user,setUser]=useState({username:"",email:""})
    const {username,email}=user

    const HandleClickCancel=()=>{
        navigate("/");
    }

    const Onchange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const HandleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:9090/auth/register",user)
            navigate("/")
        } catch (error) {
            console.error(error.message || error)
        }
    }
  return (
    <section className='AddUserMainSec'>
        <form onSubmit={HandleSubmit}>
            <div>
                <label htmlFor="usernameId">Username</label><br/>
                <input type="text" name="username" value={username} onChange={(e)=>Onchange(e)} id='usernameId'/>
            </div>
            <div>
                <label htmlFor="emailId">Email</label><br/>
                <input type="email" name="email" value={email} onChange={(e)=>Onchange(e)} id='emailId'/>
            </div>
            <div className='AddUserBtnMainDiv'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={HandleClickCancel}>Cancel</button>
            </div>
        </form>
    </section>
  )
}
