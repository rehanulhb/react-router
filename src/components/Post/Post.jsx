import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px' ,
        borderRadius : '20px',
      }

      const handleShowDetail = () =>{
            navigate(`/post/${id}`);
      }

    return (
        <div style={postStyle}>
            <h3>Post of ID: {id}</h3>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;