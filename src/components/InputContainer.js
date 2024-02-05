import "./registration.css";

function InputContainer({ placeholder, type }) {
    return (<div className="register-input-container">
    <input type={type} placeholder={placeholder} />
</div>);
}

export default InputContainer;