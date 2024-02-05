import "./registration.css";
import InputContainer from "./InputContainer";

const Registration = () => {
    return (<div className="register-container">
        <h3 className="register-title">Registration</h3>
        <InputContainer placeholder="First name" type="text" />
        <InputContainer type="text" placeholder="Last name" />
        <InputContainer type="text" placeholder="Username" />
        <InputContainer type="text" placeholder="Email" />
        <InputContainer type="password" placeholder="Password" />
        <InputContainer type="password" placeholder="Retype password" />
        <div className="register-btn-container">
            <button className="register-btn">Register</button>
        </div>
    </div>);
};

export default Registration;