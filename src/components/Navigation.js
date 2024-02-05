import logo from "./Logo.png";
import search from "./search.png";
import "./navigation.css";

function Navigation() {
    return (<div className="nav-container">
        <div className="nav-logo-container">
            <img src={logo} alt="..." />
        </div>
        <div className="nav-search-container">
            <div>
            <img src={search} alt="..." />
            <input type="text" placeholder="Search" />
            </div>
        </div>
    </div>);
}

export default Navigation;