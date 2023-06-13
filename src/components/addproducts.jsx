import axios from "axios";
import { useState } from "react";
import './addproducts.css';
import { Link,useNavigate } from "react-router-dom";

const AddProducts = () =>{

    const [brand,setBrand] = useState("");
    const [price,SetPrice] = useState("");
    const [discounts,SetDiscounts] = useState("");
    const [reviews,SetReviews] = useState("");
    const nav = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();
        const data = {
        brand:brand,
        price:price,
        discounts:discounts,
        reviews:reviews,
        };
        try{
            const response = await axios.post("http://localhost:8080/saveDetails",data);
            console.log(response.data);
            alert("Item added successfully");
            nav("/product-details");
        }
        catch(error){
            if(error.response.status===500){
                alert("can't add item");
            }
            console.log(error);
        }
    }


    return(
        <div className="sign">
            <h3>ADD ITEMS HERE!!</h3>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="brand" required onChange={(e)=>{setBrand(e.target.value)}}/>
                <input type="text" placeholder="price" required onChange={(e)=>{SetPrice(e.target.value)}}/>
                <input type="text" placeholder="discounts" required onChange={(e)=>{SetDiscounts(e.target.value)}}/>
                <input type="text" placeholder="reviews" required onChange={(e)=>{SetReviews(e.target.value)}}/>
                <button className="bu">ADD ITEM</button>
                <div><Link to="/">
                </Link></div>
            </form>
        </div>
    )
}

export default AddProducts;