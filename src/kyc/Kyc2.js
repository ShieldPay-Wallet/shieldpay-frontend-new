import React from "react";
import "./style.css";
import Button from "../components/Button";

const Kyc2 = () =>{
  
    return (
        <div className="container mt-4" id="kyc-container">
            
             <div className=" form-part">
                 <div className="container p-5 center-content">
                    <div className="d-flex justify-content-between px-5">
                        <button className="page-number text-white">2 of 2</button>
                        <p className="text-dark">More Details About You</p>
                    </div>
                    <hr/>
                    <h6 className=" text-dark px-5"> Next of Kin </h6>
                     {/* <div className="form-div"> */}
                    
                         <form className="">
                            {/* <div className=""> */}
                                <input placeholder="Full Name" className="mb-4 inputs" />
                                <input placeholder="Email Address" className="mb-4 inputs" />
                                <input placeholder="Phone Number" className="mb-4 inputs" />
                                <input placeholder="Relationship" className="mb-4 inputs" />
                                <hr/> 
                                <div className="d-flex justify-content-between px-5">
                                <h6 className=" text-dark">BVN</h6>

               
                                </div>
                                <br/>
                                <input placeholder="BVN" className="mb-4 inputs" />
                                <div className="text-center" >
                               
                               
                                    <Button type="submit" style={{color:'#FFF',fontWeight:'400',fontSize: '30px',width:'250px',height:'50px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}} 
                                //    onClick={(e)=>
                                //    {
                                //     handleSubmit(e);
                                //     navigate("/Otp")
                                //    }}

                                > Continue</Button>
                                </div>                             
                          
                            
                         </form>
                     </div>
                    
                 </div>
                

             </div>

    )
}
export default Kyc2;