import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams(); // Grab parameters from routes
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  console.log("ID from useParams:", id);
  console.log("Full fetch URL:", "http://localhost:8000/blogs/" + id);
  console.log("Fetched blog:", blog);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body} </div>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
