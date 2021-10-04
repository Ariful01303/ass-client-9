import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

const Enrolling = () => {
    let {num}=useParams();
    const [corses,setCorses]=useState([])
    const [corse,setcorse]=useState({})
     const history=useHistory()
    useEffect(()=>{
        
        fetch("/fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setCorses(data))
    },[])
    useEffect(()=>{
        const foundCorse=corses.find((cor)=>cor.id===num)
        setcorse(foundCorse)
    },[corses]);
    const btnhandlar=()=>{
        history.push("/complite")
    }
   
    return (
        <div className="text-center m-5">
            <h2>You learn <span className="text-col"> {corse?.name}</span></h2>
            <h2>amount : <span className="fs-1">৳</span>{corse?.amount}</h2>
            <button onClick={btnhandlar} className="btn btn-primary">Add To carft</button>
        
        </div>
    );
};

export default Enrolling;