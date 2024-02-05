import profilepic from "./profilepic.jpg";
import "./profile_and_image.css";

function ProfileImageAndName() {
    return (<div className="profile-name">
        <table>
            <tbody>
            <tr>
                <td rowSpan="2">
                    <img className="profilepic" src={profilepic} alt="..." />
                </td>
                <td>
                    <span className="profile-name-username">Jianna Marich</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span className="profile-name-time">2 hours ago</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>);
}

export default ProfileImageAndName;