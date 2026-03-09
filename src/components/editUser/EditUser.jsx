import '../addUser/addUser.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function EditUser() {
    const navigate=useNavigate()
    const {id}=useParams();

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
            await axios.put(`http://localhost:9090/auth/updateUser/${id}`,user)
            navigate("/")
        } catch (error) {
            console.error(error.message || error)
        }
    }

    useEffect(()=>{
        getUserInfo();
    },[])

    const getUserInfo=async()=>{
        const response=await axios.get(`http://localhost:9090/auth/userInfo/${id}`)
        setUser(response.data)
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
                <button type='submit'>Save</button>
                <button type='button' onClick={HandleClickCancel}>Cancel</button>
            </div>
        </form>
    </section>
  )
}
