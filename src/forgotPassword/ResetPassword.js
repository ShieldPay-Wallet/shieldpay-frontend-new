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
                            <p className="sign-up-text text-dark">Enter New Password</p>
                                <input placeholder="New Password" className="mb-5 inputs" name="newPassword" /> <br/>
                                
                            <Button type="submit" style={{color:'#FFF',fontWeight:'400',fontSize: '30px',width:'250px',height:'50px', backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}} onClick={(e)=>{
                                handleSubmit(e);
                              
                            }
                                
                            }
                            > Reset</Button>
                            </div>                            
                         </form>
                            <Modal show={show} onClose={()=> setShow(false)} ref={modalRef}> 
                                        <p className="mt-4">Success <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 50 58" fill="none">
                                        <path d="M51.6386 57.1294H6.97437C3.61059 57.1294 0.883789 54.4026 0.883789 51.0388V6.37458C0.883789 3.0108 3.61059 0.283997 6.97437 0.283997H51.6386C55.0024 0.283997 57.7292 3.0108 57.7292 6.37458V51.0388C57.7292 54.4026 55.0024 57.1294 51.6386 57.1294ZM25.6666 44.687L49.0138 21.3398C49.8066 20.547 49.8066 19.2615 49.0138 18.4687L46.1428 15.5976C45.35 14.8048 44.0645 14.8047 43.2716 15.5976L24.231 34.638L15.3414 25.7485C14.5486 24.9557 13.2632 24.9557 12.4702 25.7485L9.59916 28.6195C8.80637 29.4123 8.80637 30.6978 9.59916 31.4906L22.7954 44.6869C23.5883 45.4799 24.8737 45.4799 25.6666 44.687Z" fill="#55229E"/>
                                        </svg>
                                        </p>
                                        <a href=".." className=""> Go to Dashboard</a>
                            </Modal>
                     </div>
                    
                 </div>
                

             </div>
        </div>
       
    )
}
export default ForgotPassword;