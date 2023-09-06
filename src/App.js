import SignUp from './registeration/SignUp';
import {Route,Routes} from "react-router-dom"
import Login from './login/Login';
import Otp from './otp/Otp';
import Kyc1 from './kyc/Kyc1';
import Kyc2 from './kyc/Kyc2';
import ForgotPassword from './forgotPassword/ForgotPassword';
import PasswordResetOTP from './forgotPassword/PasswordResetOTP';
import ResetPassword from './forgotPassword/ResetPassword';

function App() {
  return(
     <>
     <Routes>
        <Route path={'/'} element={<SignUp/>}/>
        <Route path={'/Login'} element={<Login/>}/>
        <Route path={'/Otp'} element={<Otp/>}/>
        <Route path={'/Kyc1'} element={<Kyc1/>}/>
        <Route path={'/Kyc2'} element={<Kyc2/>}/>
        <Route path={'/ForgotPassword'} element={<ForgotPassword/>}/>
        <Route path={'/PasswordResetOTP'} element={<PasswordResetOTP/>}/>
        <Route path={'/ResetPassword'} element={<ResetPassword/>}/>

     </Routes>
    
     </>
  );
}

export default App;