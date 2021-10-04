import React from 'react';
import { useHistory } from 'react-router';
import './Deteails.css'
const Details = (props) => {
    const history=useHistory()
    const {name,amount,language,photo,id}=props.corse;
    const handlar=()=>{
        history.push(`/detail/${id}`)
     }
    return (
        <div className="col-xl-3 col-md-3 col-sm-12  p-2 text-center">
        <div className="cart-style">
            <img className="img-fluid" src={photo} alt="" />
            <h4>{name}</h4>
            <h4>Language: {language}</h4>
            <h4>Amount: <span className="fs-1">৳</span> {amount}</h4>
            <div className="d-flex justify-content-between p-5">
            <button className="btn btn-danger" onClick={handlar}>Details</button>
             
            <button className="btn btn-primary">Confrom</button>

            </div>
            </div>
            
        </div>
        
    );
};

export default Details;