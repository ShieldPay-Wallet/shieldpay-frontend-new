import { forwardRef } from "react";
import "../registeration/style.css"

const Modal = forwardRef(({children,show,onClose},ref) =>{
  
    if(!show){
        return false;
    }
    return(
        <div className="modal-container" onClick={onClose} >
            <div className="modal-contentt" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            
        </div>
    );

})
export default Modal;