import React from 'react';
import { Link} from "react-router-dom";

function RegisterForm(){
    return(
       <form className='container'>
           <center>
           <table>
            <tbody>
            <tr>
                <td>
                  <b><label htmlFor="firstname" style={{color:'white'}}>Firstname</label></b>
                </td>
                <td>
                  <input 
                  style={{ marginLeft: "30px", padding: "2px" }} 
                  type="text" 
                  placeholder="Enter FirstName" 
                  name="firstname" 
                  id="firstname" required
                  />
                </td>
              </tr>

              <tr>
                <td>
                <b> <label htmlFor="lastname" style={{color:'white'}}>Lastname</label></b>
                </td>
                <td>
                  <input 
                  style={{ marginLeft: "30px", padding: "2px" }}  
                  type="text" 
                  placeholder="Enter LastName" 
                  name="lastname" 
                  id="lastname" required
                  />
                </td>
              </tr>

             <tr>
                 <td>
                 <b> <label htmlFor='username' style={{color:'white'}}>UserName</label></b>
                 </td>
                 <td>
                     <input
                        style={{marginLeft:"30px",padding:"2px"}}
                        type="text" placeholder='Enter UserName'
                        id='username'
                        name='username'
                        required
                     />
                 </td>
             </tr>

             <tr>
                <td>
                <b> <label htmlFor="email" style={{color:'white'}}>Email</label></b>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                <b><label htmlFor="password" style={{color:'white'}}>Password</label></b>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                <b><label htmlFor="password2" style={{color:'white'}}>Confirm Password</label></b>
                </td>
                <td>
                  <input
                    style={{ marginLeft: "30px", padding: "2px" }}
                    type="password"
                    id="password2"
                    placeholder="Enter password"
                    name="password2"
                    required
                  />
                </td>
              </tr>
              <br/>

              <tr>
                  <td>
                    <button type="submit" className="btn"
                  style={{ 
                      marginLeft: "30px auto 10px auto", 
                      padding: "5px 10px", 
                      backgroundColor:'darkcyan',
                      display:'block',
                      color:'white',
                      textTransform:'uppercase',
                      borderRadius:'10px' }} 
                    >
                     Register
                    </button>
                  </td>
                  
                  <td>
                    <button type="reset" className="btn"
                        style={{ 
                            marginLeft: "30px auto 10px auto", 
                            padding: "5px 10px", 
                            backgroundColor:'silver',
                            display:'block',
                            color:'black',
                            textTransform:'uppercase',
                            borderRadius:'10px' }} 
                     >
                     Cancel
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
                      <span style={{color:'white'}}  className="txt1">Already have an account? </span>
                      <span>
                      <b><Link to="/Login" className="txt3" style={{ marginLeft: "5px", padding: "2px", color:'green'}}>Sign in</Link></b>
                      </span>
                    </div>
                  </td>
                </tr>

            </tbody>
          </table>
           </center>
       </form>
                
    )
}

export default RegisterForm;