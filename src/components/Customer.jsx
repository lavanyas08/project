import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './customer.css';

const Cust = () =>{

    const nav = useNavigate();
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
        console.log(data);
      }, [data]);

    const fetchData = async() =>{
        try{
            const response = await axios.get("http://localhost:8080/getall");
            setData(response.data);
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleRemove = (id) =>{
        axios.delete(`http://localhost:8080/delete?id=${id}`).then(alert("customer removed"));
    }

    return(
    <div className="page">
        <h1 className="top">Customers</h1>
            <div className="cust">
            {data.map((customer) => (
            <div key={customer.id} className="cust-info">
                <p>Name: {customer.username}</p>
                <p>Email: {customer.email}</p>
                <p>phone: {customer.phoneno}</p>
                <p>Street: {customer.street}</p>
                <p>City:{customer.city}</p>
                <p>State:{customer.state}</p>
                <p>Country:{customer.country}</p>
                <button onClick={()=>{handleRemove(customer.id)}} className="remove">remove</button>
            </div>
            ))}
            </div>
    </div>
    )
}

export default Cust;


