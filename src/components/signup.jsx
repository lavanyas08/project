import axios from "axios";
import { useState } from "react";
import './signup.css';
import { Link,useNavigate } from "react-router-dom";

const SignUp = () =>{

    const [user,setUser] = useState("");
    const [email,SetEmail] = useState("");
    const [pass,SetPass] = useState("");
    const [phone,SetPhone] = useState("");
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [state,SetState] = useState("");
    const [pincode,setPincode] = useState("");
    const [country,setCountry] = useState("");
    const nav = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();
        const data = {
        username:user,
        password:pass,
        email:email,
        phoneno:phone,
        country:country,
        state:state,
        city:city,
        street:street,
        pincode:pincode
        };
        try{
            const response = await axios.post("http://localhost:8080/register",data);
            console.log(response.data);
            alert("signed up successfully");
            nav("/");
        }
        catch(error){
            if(error.response.status===500){
                alert("User Already Exsist");
            }
            console.log(error);
        }
    }


    return(
        <div className="sign-up">
            <form onSubmit={handleSignUp}>
            <h3>Sign Up Here!!</h3>
                <input type="text" placeholder="Username" required onChange={(e)=>{setUser(e.target.value)}}/>
                <input type="text" placeholder="email" required onChange={(e)=>{SetEmail(e.target.value)}}/>
                <input type="password" placeholder="password" required onChange={(e)=>{SetPass(e.target.value)}}/>
                <input type="text" placeholder="phone no" required onChange={(e)=>{SetPhone(e.target.value)}}/>
                <input type="text" placeholder="street" required onChange={(e)=>{setStreet(e.target.value)}}/>
                <input type="text" placeholder="city" required onChange={(e)=>{setCity(e.target.value)}}/>
                <input type="text" placeholder="state" required onChange={(e)=>{SetState(e.target.value)}}/>
                <input type="text" placeholder="pincode" required onChange={(e)=>{setPincode(e.target.value)}}/>
                <input type="text" placeholder="country" required onChange={(e)=>{setCountry(e.target.value)}}/>
                <button className="but">signup</button>
                <div><Link to="/login">
                
                <span className="class">Already have an account?Login here!</span>
                </Link></div>
            </form>
        </div>
    )
}

export default SignUp;