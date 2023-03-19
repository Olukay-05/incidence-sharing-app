import InputField from "../../reusable-components/input-reusable/InputField";
import img from "../assets/star-img.png";
import "./UserLogin.css";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //  const [password, setPassword] = useState("")

     const handleEmailChange = (event) => {
         const newValue = event.target.value;
         setEmail(newValue)
     }
     const handlePasswordChange = (event) => {
         const newPassword = event.target.value;
         setPassword(newPassword)
     }


     const handleClick = () => {
         const userDetails = {
             userEmail: email,
             userPassword: password 
         }

         console.log(userDetails)
     }


    return ( 
        <div className="parent-container">
        <div className="login-container">
            <div className="side-img">
                <img src={img} alt="" />
            </div>
            
            <div className="input-box">
                <h2>Welcome</h2>
                
                <form action="">
                    <div>email</div>
                    <InputField
                        type="text"
                        name="email"
                        value=""
                        onChange={handleEmailChange}
                    />
                    <div>password</div>
                    <InputField 
                        type="password"
                        name="password"
                        value=""
                        onChange={handlePasswordChange}
                    />
                </form>
                <p>forgot password?</p>
                <button type="login" onClick={handleClick}>Login</button>
            </div>
        </div>
        </div>
     );
}
 
export default Login;