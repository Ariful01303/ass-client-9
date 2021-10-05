import React from 'react';

const Student = (props) => {
    const {student,picture,batch}=props.student
    return (
        <div className="p-4">
            
        <div className="text-center cart-style w-50 m-auto p-2">
        
            <h2>{student}</h2>
            <p className="text-col">Batch No. {batch}</p>

            <img className="img-fluid" src={picture} alt="" />
        </div>
        </div>
    );
};

export default Student;