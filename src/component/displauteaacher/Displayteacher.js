import React from 'react';

const Displayteacher = (props) => {
   
    return (
        <div className="col-xl-3 col-md-3 col-sm-12 p-2 text-center">
        <div className="cart-style">
            <h2>{props.teacher.name}</h2>
            <h4>{props.teacher.title}</h4>
            <p> Phone Number: {props.teacher.contact}</p>
            <img className="img-fluid" src={props.teacher.pictur} alt="" />
           </div>
           
        </div>
    );
};

export default Displayteacher;