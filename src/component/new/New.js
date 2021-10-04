import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const New = () => {
    let {code}=useParams();
    const [corses,setCorses]=useState([])
    const [corse,setcorse]=useState({})

    useEffect(()=>{
        
        fetch("/fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setCorses(data))
    },[])
    useEffect(()=>{
        const foundCorse=corses.find((cor)=>cor.id===code)
        setcorse(foundCorse)
    },[corses]);
    return (
        <div className="text-center cart-style w-50 m-auto p-2">
           
            <h4>Course Name : {corse?.name}</h4>
            <h4>If you enroll our course send <span className="text-col">{corse?.amount}</span> TK</h4>
            <img src={corse?.photo} alt="" />
            <p>Hi Sir,In our course {corse?.detail}</p>
        
        </div>
    );
};

export default New;