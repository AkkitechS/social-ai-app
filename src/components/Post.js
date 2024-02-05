import "./post.css";
import ProfileImageAndName from "./ProfileImageAndName";
import PostDescription from "./PostDescription";
import PostImages from "./PostImages";
import like from "./like.svg";
import comment from "./comment.svg";
import share from "./share.svg";

function Post() {
    return (<div className="post-container">
        <div className="post-inner-container">
            <ProfileImageAndName />
            <PostDescription />
            <PostImages />
            <div className="post-likes-and-share-container">
                <div className="post-like-container">
                <span className="post-like-icon post-icon">
                    <img src={like} alt="..." />
                </span>
                <span className="post-like-text post-text">
                    20 likes
                </span>
                </div>
                <div className="post-comment-container">
                <span className="post-comment-icon post-icon">
                    <img src={comment} alt="..." />
                </span>
                <span className="post-text">20 comments</span>
                </div>
                <div className="post-share-container">
                <span className="post-share-icon post-icon">
                    <img src={share} alt="..." />
                </span>
                <span className="post-share-text post-text">
                    Share
                </span>
                </div>
            </div>
        </div>
    </div>);
}

export default Post;