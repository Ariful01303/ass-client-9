import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const Home = () => {
    const [corses,setCorses]=useState([]);
    useEffect(()=>{
     fetch('./fakeData.JSON')
     .then(res=>res.json())
     .then(data=>setCorses(data))
    },[])
    return (
        <div className="container">
            <h2>OUR <span className="text-col">COURSES</span></h2>
            <div className="d-flex row">
            
             {
                corses.slice(0,4).map(corse=><Details corse={corse}></Details>)
            }
            
            
            </div>
          
        </div>
    );
};

export default Home;