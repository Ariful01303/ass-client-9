import React from 'react';
import { useHistory } from 'react-router';
import './Deteails.css'
const Details = (props) => {
    const history=useHistory();
    
    
    const {name,amount,language,photo,id,start}=props.corse;
    const handlar=()=>{
        history.push(`/detail/${id}`)
     };
    
    return (
        <div className="col-xl-3 col-md-3 col-sm-12 p-2 text-center">
        <div className="cart-style">
            <img className="img-fluid" src={photo} alt="" />
            <h4>{name}</h4>
            <p>Language: {language}</p>
            <p>Corse Start: <span className=" text-col">{start}</span></p>
            <p>Amount: ৳ {amount}</p>
            <div className="  p-4">
            <button className="btn btn-danger text-center" onClick={handlar}>View Details</button>
             
           
            </div>
            </div>
            
        </div>
        
    );
};

export default Details;