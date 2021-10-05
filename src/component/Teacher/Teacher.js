import React from 'react';
import { useEffect, useState } from 'react';
import Displayteacher from '../displauteaacher/Displayteacher';

const Teacher = () => {
    const [teachers,setTeachers]=useState([])
    useEffect(()=>{
      fetch("./fakeData.JSON")
      .then(res=>res.json())
      .then(data=>setTeachers(data))
    },[])
    return (
        <div>
            
            <div className="container p-3">
         <div className="d-flex row">
            <h2>OUR <span className="text-col">TEACHERS</span></h2>
            {
                teachers.slice(10,21).map(teacher=><Displayteacher
                    key={teacher.contact}
                    teacher={teacher}></Displayteacher>)
            }
            </div>
            </div>
            </div>
    );
};

export default Teacher;