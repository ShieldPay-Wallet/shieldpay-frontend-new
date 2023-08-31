import React from "react";
import "./style.css"

const Kyc1 = () =>{
  
    return (
        <div className="container mt-4" id="kyc-container">
            
             <div className=" form-part">
                 <div className="container p-5 center-content">
                    <div className="d-flex justify-content-between px-5">
                        <button className="page-number text-white">1 of 2</button>
                        <p className="text-dark">Kindly Complete Your Registeration</p>
                    </div>
                    <hr/>
                    <h6 className=" text-dark px-5 mb-4"> KYC </h6>
                     {/* <div className="form-div"> */}
                    
                         <form className="">
                            {/* <div className=""> */}
                                <label className="px-5">Select a Form of Identification</label>
                                <select className="select d-block mb-2 inputs pd-5">
                                    <option>NIN</option>
                                    <option>Drivers Licence</option>
                                    <option>Voters Card</option>
                                </select>
                                <input placeholder="Home Address" className="mb-4 inputs" />
                                <hr/> 
                                <div className="d-flex justify-content-between px-5">
                                <h6 className=" text-dark"> Add Cards </h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M18.9163 8.10211H12.5658V1.75156C12.5658 0.9723 11.9338 0.340332 11.1546 0.340332H9.74333C8.96406 0.340332 8.33209 0.9723 8.33209 1.75156V8.10211H1.98155C1.20228 8.10211 0.570312 8.73408 0.570312 9.51334V10.9246C0.570312 11.7038 1.20228 12.3358 1.98155 12.3358H8.33209V18.6864C8.33209 19.4656 8.96406 20.0976 9.74333 20.0976H11.1546C11.9338 20.0976 12.5658 19.4656 12.5658 18.6864V12.3358H18.9163C19.6956 12.3358 20.3276 11.7038 20.3276 10.9246V9.51334C20.3276 8.73408 19.6956 8.10211 18.9163 8.10211Z" fill="#726D6D" fill-opacity="0.9"/>
                                </svg>
               
                                </div>
                                <br/>
                                <div className="" >
                                <input placeholder="Card Name" className="grouped-inputs"  id="input1"/> 
                                <input placeholder="Card Number" className="grouped-inputs" /> 
                                <input placeholder="Exp.Date" className="grouped-inputs" />
                                <input placeholder="CVV" className="" id="input4"/>
                                    
                                </div>                             
                         </form>
                         <a href="/Kyc2" className="float-end mx-4 py-2 nav-linky">Next</a>
                     </div>
                    
                 </div>
                

             </div>

    )
}
export default Kyc1;