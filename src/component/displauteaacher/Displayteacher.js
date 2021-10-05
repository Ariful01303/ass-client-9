import React from 'react';

const Displayteacher = (props) => {
    const {name,contact,title,pictur}=props.teacher
    return (
        <div className="col-xl-3 col-md-3 col-sm-12 p-2 text-center">
        <div className="cart-style">
            <h2>{name}</h2>
            <h4>{title}</h4>
            <p> Phone Number: {contact}</p>
            <img className="img-fluid" src={pictur} alt="" />
           </div>
        </div>
    );
};

export default Displayteacher;