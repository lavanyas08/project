import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './customer.css';

function Pro() {
    const nav = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/fetchDetails");
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBrand = (product) => {
        console.log(product.id);
        console.log(product);
        let email = "erdfghk";
        nav("/add-items", { state: { email, pro: [product] } });
    };

    return (
        <div className="page">
            <h1 className="top">Product Details</h1>
            <div className="cust">
                {data.map((product) => (
                    <div key={product.id} className="cust-info" onClick={() => handleBrand(product)}>
                        <p>Name: {product.brand}</p>
                        <p>Discount: {product.discounts}</p>
                        <p>Reviews: {product.reviews}</p>
                        <p>Price: {product.price}</p>
                        <br />
                        <div>
                            <Link to="/add-items">
                                <button className ="rem">Add items</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pro;
