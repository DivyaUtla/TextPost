import React from 'react';
import { Link } from 'react-router-dom';
//import { Link} from "react-router-dom";

function LoginForm(){
    return(
       <form className='container'>
           <center>
               <table>
                   <tbody>
                       <tr>
                          <td>
                          <label htmlFor="username">UserName</label>
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
                          <label htmlFor="password">Password</label>
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
                        <Link class="txt3" href="#" >Forgot Username / Password?</Link><br/>
                        <span>
                        <Link to="/Register" className="txt3" style={{ marginLeft: "1px", padding: "2px" }}>New User?</Link>
                      </span>
                   </tbody>
               </table>
           </center>
       </form>
    )
}
export default LoginForm;