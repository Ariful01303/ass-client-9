import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Search.css'


const Services = () => {
    const [carts,setCarts]=useState([])
    const [displaycarts, setDisplaycarts] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=>res.json())
        .then(data=>{
            setDisplaycarts(data);
            setCarts(data);
            })

    },[])
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedcarts = carts.filter(cart => cart.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplaycarts(matchedcarts);
    }
    return (
        <div>
         <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Course" />
            </div>
        <div className="container p-3">
         <div className="d-flex row">
            <h2>OUR <span className="text-col">COURSES</span></h2>
            {
              displaycarts.slice(0,10).map(cart=><Details
                key={cart.id}
                corse={cart}></Details>)
            }
        </div>
        </div>
        </div>
    );
};

export default Services;