// import React from "react";
import React,{ useEffect,useRef,useState } from "react";
// import signImage from "../asset/signup.png"
import "../registeration/style.css"
import Modal from "../components/Modal";
import Button from "../components/Button";
import OtpInput from "../components/OtpInput";
import { useNavigate } from "react-router-dom";

const Otp =()=>{
    let navigate = useNavigate();
    const [show,setShow]= useState(false)
    const modalRef = useRef(null)

    const handleClick=(e)=>{
        e.preventDefault();
        //if the otp is added and user is verified,
        //setShow = true and navigate to kyc page
        setShow(true)

    }
    const handleBodyClick=(event)=>{

        if(modalRef.current && !modalRef.current.contains(event.target)){
                setShow(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('click',handleBodyClick);
    
        return () => {
          
        document.removeEventListener('click', handleBodyClick);
        }
    },[])


    
    return(
        <>
          <div className="container" id="otp-container">
             {/* <div className="outer-div"> */}
             
           
             {/* <div className="form-part"> */}
                    <div className="center-content text-center d-flex align-items-center justify-content-center" >
                       
                        <div className="container text-center">
                            <p className="sign-up-text text-dark">Enter your OTP number</p>
                            <form >
                                <OtpInput/> <br/>
                                
                                <Modal show={show} onClose={()=>setShow(false)} ref={modalRef} > 
                                    <p>Proceed to reset Password</p>
                                </Modal>

                               <Button type="submit" style={{color:'#FFF',fontWeight:'600',fontSize: '30px',width:'250px',height:'50px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}} onClick={(e)=>{
                                handleClick(e);
                                navigate("/ResetPassword")
                                }
                                }> Continue</Button>
                               
                            </form>
                        </div>
                       
                    </div>
                   

                </div>
       
        </>
    )
}
export default Otp;