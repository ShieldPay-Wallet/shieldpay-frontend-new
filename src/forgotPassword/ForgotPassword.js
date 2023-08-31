import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Button from "../components/Button";
import React, { useEffect, useRef, useState } from "react";
import "../login/style.css"

const ForgotPassword = () =>{
    let navigate = useNavigate();

    const [show,setShow]= useState(false)
    const modalRef = useRef(null)
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(true)
        
    }
    const handleOutsideClick = (event)=>{
     
        if(modalRef.current && !modalRef.current.contains(event.target)){
            setShow(false);
        }
    }
    
    useEffect(()=>{
        document.addEventListener('click',handleOutsideClick);
    
        return () => {
          
        document.removeEventListener('click', handleOutsideClick);
        }
    },[])
  
    return (
        <div className="container" id="my-container">
            
             <div className="form-part">
                 <div className="center-content text-center">
                    
                     <div className="container text-center form-div">
                     <h2 className="mt-5 mb-5">Reset Password</h2>
                    
                         <form className="reset-password" onSubmit={handleSubmit}>
                            <div className="">
                            <p className="sign-up-text text-dark">Enter Email Address to reset Password</p>
                                <input placeholder="Email Address" className="mb-5 inputs" name="email" autoComplete="email"/> <br/>
                                
                            <Button type="submit" style={{color:'#FFF',fontWeight:'400',fontSize: '30px',width:'250px',height:'50px', backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}} onClick={(e)=>{
                                handleSubmit(e);
                                navigate("/PasswordResetOTP")
                            }
                                
                            }
                            > Next</Button>
                            </div>                            
                         </form>
                            <Modal show={show} onClose={()=> setShow(false)} ref={modalRef}> 
                                        <p className="mt-4">Check your mail for your OTP number </p>
                            </Modal>
                     </div>
                    
                 </div>
                

             </div>
        </div>
       
    )
}
export default ForgotPassword;