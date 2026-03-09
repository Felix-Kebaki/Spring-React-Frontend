import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export function Profile() {
    const [info,setInfo]=useState({});
    const {id}=useParams();
    
    useEffect(()=>{
      getProfile(id)
    },[])

    const getProfile=async(getId)=>{
        try{
        const response=await axios.get(`http://localhost:9090/auth/userInfo/${getId}`)
        setInfo(response.data)
        }catch(error){
            console.error(error.message || error)
        }
    }

  return (
       <section>
        <div>
            <p>Your profile</p>
            <p>Username: <span>{info.username}</span></p>
            <p>Email: <span>{info.email}</span></p>
        </div>
    </section>
  )
}
