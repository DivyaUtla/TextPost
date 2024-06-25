import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { fetchData } from '../../main.js';

const Login=()=>{

  const navigate= useNavigate();
  const [user,setUser]=useState({
    username:'',
    password:''
  });

  const{username,password}=user;

  const onChange=(e)=>setUser({...user,[e.target.name]:e.target.value});

  const onSubmit=(e)=>{
    e.preventDefault();
    fetchData('/user/login',user,"POST")
    .then((data) => {
      if (!data.message) {
        // navigate("/profile");
        navigate("/profile", { state: { username:user.username } });
        console.log(data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
    return(
      <body className="page2">
      <center>
        <div className="login-page">

       <form className='container1' onSubmit={onSubmit}>
           <center>
               <table>
                   <tbody style={{textAlign:'center'}}>
                       <tr>
                          <td>
                         <b> <label style={{color:'white'}} htmlFor="username">UserName</label></b>
                          </td> 
                          <td>
                            <input 
                                style={{ marginLeft: "30px", padding: "2px" }} 
                                type="text" 
                                placeholder="Enter UserName" 
                                name="username" 
                                id="username"
                                onChange={onChange}
                                value={username}
                                required
                            /> 
                          </td>
                       </tr>

                       <tr>
                          <td>
                         <b> <label  style={{color:'white'}} htmlFor="password">Password</label></b>
                          </td> 
                          <td>
                            <input 
                                style={{ marginLeft: "30px", padding: "2px" }} 
                                type="password" 
                                placeholder="Enter Password" 
                                name="password" 
                                id="password" 
                                onChange={onChange}
                                value={password}
                                required
                            /> 
                          </td>
                       </tr>

                        <button type="submit" className="btn " style={{padding: "5px 10px"}}>
                          Login
                        </button><br/><br/>
                        <b><Link class="txt3" href="#" style={{ marginLeft: "160px", padding: "8px" }}>Forgot Username / Password?</Link></b><br/>
                        <span>
                        <b><Link to="/Register" className="txt3" style={{ marginLeft: "30px", padding: "2px" }}>New User?</Link></b>
                      </span>
                   </tbody>
               </table>
           </center>
       </form>
       </div></center></body>
    )
}
export default Login;