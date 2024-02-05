import "./post-description.css";

function PostDescription() {

    const textStyle = {
        color : "#00ffff"
    }

    return (<p className="post-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices...<span style={textStyle}>more</span>
    </p>);
}

export default PostDescription;