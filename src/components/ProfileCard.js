import profilepic from "./profilepic.jpg";
import "./profile_card.css";

function ProfileCard() {
    return (<div className="profile-card-container">
        <div className="profile-card-inner-container">
            <div className="profile-card-image-container">
                <img className="profile-card-image" src={profilepic} alt="..." />
                <span className="profile-card-username">Jianna Marich</span>
                <span className="profile-card-tag">Content creator</span>
            </div>
            <div className="profile-card-user-info">
                <div className="profile-card-user-info-item">
                    <span className="profile-card-user-info-item-text1">300</span>
                    <span className="profile-card-user-info-item-text2">Posts</span>
                </div>
                <div className="profile-card-user-info-item">
                    <span className="profile-card-user-info-item-text1">24.1k</span>
                    <span className="profile-card-user-info-item-text2">Followers</span>
                </div>
                <div className="profile-card-user-info-item">
                    <span className="profile-card-user-info-item-text1">3000</span>
                    <span className="profile-card-user-info-item-text2">Following</span>
                </div>
            </div>
        </div>
    </div>);
}

export default ProfileCard;