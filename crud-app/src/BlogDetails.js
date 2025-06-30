import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams(); // Grab parameters from routes
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  // console.log("ID from useParams:", id);
  // console.log("Full fetch URL:", "http://localhost:8000/blogs/" + id);
  // console.log("Fetched blog:", blog);

  const handleDelete = () => {
  fetch("http://localhost:8000/blogs/" + blog.id,{
    method:'DELETE'
  }).then(()=>{
    navigate('/');
  });
  }

  return ( 
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body} </div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
