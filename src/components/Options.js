import "./options.css";
import plus from "./plus.svg";
import ai from "./ai.svg";
import feed from "./feed.svg";
import profile from "./profile.svg";
import exit from "./exit.svg"

function Options() {
    return (<div className="options-container">
        <div className="options-inner-container">
            <div className="option">
                <img src={plus} alt="..." style={{width : "4rem"}} />
            </div>
            <div className="option highlights">
                <img src={ai} alt="..." />
            </div>
            <div className="option highlights">
                <img src={feed} alt="..." />
            </div>
            <div className="option highlights">
                <img src={profile} alt="..." />
            </div>
            <div className="option highlights">
                <img src={exit} alt="..." />
            </div>
        </div>
    </div>);
};

export default Options;