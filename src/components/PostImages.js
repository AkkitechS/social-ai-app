import "./post-images.css";
import profilepic from "./profilepic.jpg";

function PostImages() {
    var images = 3;
    return (<div className="post-image-container">
        {images === 1 ? <img className="post-image-single" src={profilepic} alt="..." /> : <div className="post-image-slider">
                <img className="post-image" src={profilepic} alt="..." />
                <img className="post-image" src={profilepic} alt="..." />
                <img className="post-image" src={profilepic} alt="..." />
                <img className="post-image" src={profilepic} alt="..." />
                <img className="post-image" src={profilepic} alt="..." />
            </div>}
    </div>);
}

export default PostImages;