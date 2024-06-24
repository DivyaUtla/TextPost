import React from 'react';
import { Link } from 'react-router-dom';
//import { Link} from "react-router-dom";

function LoginForm(){
    return(
       <form className='container1'>
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
                                id="username" required
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
                                type="text" 
                                placeholder="Enter Password" 
                                name="password" 
                                id="password" required
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
    )
}
export default LoginForm;