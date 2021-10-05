import React from 'react';
import { useEffect, useState } from 'react';
import Student from '../student/Student';

const About = () => {
    const [students,setStudents]=useState([])
    useEffect(()=>{
        fetch("./fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])

    return (
        <div className="p-4">
        <div className="text-center cart-style w-50 m-auto p-2">
            <h2>About us</h2>
            <p>Education Inform is our passionate area.We love to share Our knowledge with other peoples. That's why We open this Web site and We share our knowledge here. All Student got help this site.  So all people stay with us and enjoy Our corses.</p>
        </div>
       
        
       <div>
        <h2 className="text-col text-center pt-5">Happy Student</h2>
            {
                students.slice(21,32).map(student=><Student
                    key={student.batch}
                    student={student}></Student>)
            }
        </div>
       
          
        </div>
    );
};

export default About;