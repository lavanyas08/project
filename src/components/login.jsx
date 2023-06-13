import axios from 'axios';
import './login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () =>{
    const nav = useNavigate(); 
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState("");


    const handlelogin = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.get(`http://localhost:8080/checklogin?user=${user}&password=${password}`)
            console.log(response.data);
            setData(response.data);
            if(response.data==="Login sucessfull"){
                alert("Logged in successfully");
                setData("");
                nav("/");
            }
            else{
                setData("Invalid UserName/Password")
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className="login-page1">
            <form onSubmit={handlelogin}>
            <h3>LOGIN</h3>
                <input type="text" placeholder="UserName" onChange={(e)=>{
                    setUser(e.target.value);
                }}/>
                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <Link to="/forgot-pass" className="signn">
                
                <h4 className='my'>Forget Password?</h4>
                </Link>
                <button>Login</button>
                
                <Link to="/sign-up" className='login' >
                
                <h4 className='myclass'>Don't have an account ? signup here!</h4>
                </Link>
                {data&&<div className='error'>{data}</div>}
            </form>
        </div>
    )
}

export default Login;