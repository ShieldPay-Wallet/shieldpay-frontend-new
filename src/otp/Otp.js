import React from "react";
// import signImage from "../asset/signup.png"
import "../registeration/style.css"
import Modal from "../components/Modal";
import Button from "../components/Button";
import OtpInput from "../components/OtpInput";

const Otp =()=>{
    // const [show,setShow]= useState(false)

    
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
                                
                                <Modal  > 
                                    <p>Kindly check your email to get your OTP number <br/> for Account verification</p>
                                </Modal>

                               <Button type="submit" style={{color:'#FFF',fontWeight:'600',fontSize: '30px',width:'250px',height:'50px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}} > Continue</Button>
                               
                            </form>
                        </div>
                       
                    </div>
                   

                </div>
             {/* </div> */}

             {/* </div> */}
       
        </>
    )
}
export default Otp;