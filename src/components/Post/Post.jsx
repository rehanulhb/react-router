import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, } = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px' ,
        borderRadius : '20px',
      }
    return (
        <div style={postStyle}>
            <h3>Post of ID: {id}</h3>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;