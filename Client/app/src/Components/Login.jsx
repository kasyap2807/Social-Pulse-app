import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [con, setCon] = useState(1);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [Email, setEmail] = useState('');
    const [otps, setotps] = useState(false);
    const [otp, setotp] = useState(0);
    const [pref,setpref] = useState(false);
    const [jwt,setjwt]= useState("")
    const navigate = useNavigate();


    const Login= async() =>{
      try{
        const response = await axios.post("http://localhost:8083/authenticat",{"username":user,"password":password})
        if(!(response.data.jwtToken==="nope")){
          navigate('/Home'
          , { state:{
            token:JSON.stringify(response.data.jwtToken)
          }}
          );
          toast.success("Login Success!!")
        }
        else{

          toast.error("Login failed!!")
        }
      }
      catch{
        toast("Failed")
      }
    }
    
    const  Signup = async () =>{
       try {
        const response = await axios.post('http://localhost:8083/createuser', {
          username: user,
          password: password,
          email: Email,
          name: name
        });
        console.log(response)

        if(response.data==="ok"){
          setpref(true)
          setCon(1);
          console.log("signup success");
        }
        else if(response.data){
          setpref("User id already exists");
          console.log("User id already exists");
          toast.error("User id already exists....");
        }
      } catch (error) {
        setpref("sorry server down");
        console.log("sorry server down");
        toast.warn("sorry server down");
      }
        
    }
  
    const forget=()=>{}
  
    const Enterotp=()=>{}

    const checksignup = () =>{
      if(pref){
        toast.success("User id created....");
        setpref(false);
      }
    }
  
    if(con===1){
    return (
      <div className="App" onMouseOver={checksignup}>
              
              <div className="Left">
              <div className="Left_Head">
              <h1>Social Pulse Hub</h1>
              </div>
              </div>
              <div className="login">
                <label htmlFor="user">User Id : </label>
                <input className="user" type="text" required={true} onChange={(e)=>setUser(e.target.value)} value={user}></input><br/>
                <label htmlFor="password">password : </label>
                <input className="password" type="password" required={true} onChange={(e)=>setPassword(e.target.value)} value={password}></input><br/>
                <div className="Links">
                <a onClick={() => setCon(3)}>Forgot Password?</a>
                <a onClick={() => setCon(2)}>New User?</a>
                </div><br/>
                <button type='submit' onClick={Login}>Login</button>
                <ToastContainer />
              </div>
              
        </div>
    );
    }
    if(con===2){
      return(
      <div className="App">
              <div className="login">
                <label htmlFor="Name">Name : </label>
                <input className="Name" type="text" required={true} onChange={(e)=>setname(e.target.value)}></input><br/>
                <label htmlFor="Email">Email : </label>
                <input className="Email" type="email" required={true} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <label htmlFor="user">User Id : </label>
                <input className="user" type="text" required={true} onChange={(e)=>setUser(e.target.value)}></input><br/>
                <label htmlFor="password">password : </label>
                <input className="password" type="password" required={true} onChange={(e)=>setPassword(e.target.value)}></input><br/>
                <div className="Links">
                <a onClick={() => setCon(1)}>Already User?</a>
                {/* <h5>{test}</h5> */}
                </div><br/>
                <button onClick={Signup}>Sign up</button>
              </div>
              <div className="Left">
              <div className="Left_Head">
              <h1>Social Pulse Hub</h1>
              <h3>Registration Page</h3>
              </div>
              </div>
              <ToastContainer />
        </div>
    );}
  
    else{
      if(!otps){
        return(
            <div className="App">
                    <div className="login">
                      <label htmlFor="Email">Email : </label>
                      <input className="Email" type="email" required={true} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                      <div className="Links">
                      <a onClick={() => setCon(1)}>HOME</a>
                      </div><br/>
                      <div>
                      <button onClick={()=>setotps(true)}>SEND OTP</button>
                      </div>
                      
                    </div>
              </div>
          );
      }
      return(
        <div className="App">
                  <div className="login">
                    <label htmlFor="Email">Email : </label>
                    <input className="Email" type="email" required={true} onChange={(e)=>setEmail(e.target.value)}></input><br/>
                    <label htmlFor="otp">Enter otp : </label>
                    <input className="otp" type='number' onChange={(e)=>setotp(e.target.value)}></input><br/>
                    <button onClick={Enterotp}>VERIFY OTP</button><br/>
                    <div>
                    <div className="Links">
                    <a onClick={() => setCon(1)}>HOME</a>
                    </div><br/>
                    </div>
                  </div>
            </div>
      )
        
      
    }
}

export default Login;

