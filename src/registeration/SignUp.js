import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal"
import "./style.css"
// import signImage from "../asset/signup.png";



const SignUp = () =>{
    const [show,setShow]= useState(false)
    const modalRef = useRef(null)
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(true)
    }
    const handleCancelClick = (event)=>{
        if(modalRef.current && !modalRef.current.contains(event.target)){
            setShow(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('click', handleCancelClick);
        return () => {
        document.removeEventListener('click', handleCancelClick);
        }
    },[])
    return(
        <div className="container" id="my-container">
           {/* <div className="outer-div">
                <div className="form-part"> */}
                    <div className="center-content text-center">
                       
                        <div className="container text-center form-div">
                        <h2>Welcome!</h2>
                        <p className="sign-up-text text-dark">Sign up by entering the information below</p>
                            <form className="sign-up" onSubmit={handleSubmit} >

                                <input placeholder="First Name" className="inputs" name="firstName" autoComplete="given-name"/>
                                <input placeholder="Last Name" className="inputs" name="lastName" autoComplete="name"/>
                                <input placeholder="Email" className="inputs" name="email" autoComplete="email"/>
                                <input placeholder="Password" className=" inputs" name="password"/>
                                <div className="" id="redirection">
                                    <p className="text-secondary already">Already have an Account?</p>
                                    <div className="login">
                                      <a href="./Login">Login</a>
                                    </div>
                                   
                                </div>
                                <Modal show={show} ref={modalRef}> 
                                    <p>Kindly check your email to get your OTP number <br/> for Account verification</p>
                                </Modal>

                               <Button type="submit" style={{color:'#FFF',fontWeight:'400',fontSize: '30px',width:'250px',height:'50px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}}> sign up</Button>
                             
                               
                            </form>
                        </div>
                       
                    </div>
                   

                {/* </div>
           </div> */}
         </div>
    );
  
}
export default SignUp;