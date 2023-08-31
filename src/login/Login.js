import React from "react";
// import loginImage from "../asset/webpix.png"
import Button from "../components/Button";
import "./style.css"

const Login = () =>{
    return(
        // login page
        <div className="container" id="my-container">
            
             <div className="form-part">
                 <div className="center-content text-center">
                    
                     <div className="container text-center form-div">
                     <h2 className="mt-5 mb-3">Welcome Back!</h2>
                     <p className="sign-up-text text-dark mb-5">Login by entering the information below</p>
                         <form className="login-form">
                            <div className="">
                                <input placeholder="Email" className="mb-5 inputs" name="email" autoComplete="email"/> <br/>
                                <input placeholder="Password" className="mb-5 inputs" name="password"/> <br/>
                                <div className="d-flex justify-content-around" >
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault" id="label-name">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="./ForgotPassword" id="forgot-password">Forgot Password</a>
                                    
                                    
                                </div>
                                
                            <Button type="submit" style={{color:'#FFF',fontWeight:'400',fontSize: '30px',width:'250px',height:'50px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}}> Login</Button>
                            </div>
                        

                            
                         </form>
                     </div>
                    
                 </div>
                

             </div>
        </div>
  
    )

}
export default Login;