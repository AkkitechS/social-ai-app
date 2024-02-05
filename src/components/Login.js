import "./login.css";
import logo from "./Logo.png";

const Login = () => {
  return (
    <>
    <h3 className="title">Login</h3>
    <div className="login-container">
      <div className="left">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo..." />
        </div>
      </div>
      <div className="right">
        <div className="form-container">
          <div className="input-container">
            <input type="text" placeholder="Username/Email" />
          </div>
          <div className="input-container">
            <input type="text" placeholder="Password" />
          </div>
          <div className="input-container">
            <button>Login</button>
          </div>
          <div className="labels-container">
            <span>Don't have an account?</span>
            <span> | </span>
            <a href="https://www.google.com"><span>Create account</span></a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
