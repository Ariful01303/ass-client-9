import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

const Enrolling = () => {
    let {num}=useParams();
    const [enrolls,setEnrolls]=useState([])
    const [enroll,setEnroll]=useState({})
     const history=useHistory()
    useEffect(()=>{
        
        fetch("/fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setEnrolls(data))
    },[])
    useEffect(()=>{
        const foundCorse=enrolls.find((cor)=>cor.id===num)
        setEnroll(foundCorse)
    },[enrolls]);
    const btnhandlar=()=>{
        history.push("/complite")
    }
   
    return (
        <div className="text-center m-5">
            <h2>You learn <span className="text-col"> {enroll?.name}</span></h2>
            <h2>amount : <span className="fs-1">৳</span>{enroll?.amount}</h2>
            <button onClick={btnhandlar} className="btn btn-primary">Add To carft</button>
        
        </div>
    );
};

export default Enrolling;