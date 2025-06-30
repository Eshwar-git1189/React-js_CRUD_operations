import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();// useHistory hook is used to programmatically navigate
  // after the blog is added

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    // Simulate a delay for the POST request

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      // Reset the form fields after submission
      navigate("/"); // Navigate to the home page after adding the blog
    });
    // navigate(-1); // Navigate back to the previous page
    // or you can use navigate('/path') to navigate to a specific route
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {isPending && <button disabled>Adding Blog.... </button>}
        {!isPending && <button>Add Blog</button>}
        <p>{title}</p>
        <p>{body} </p>
      </form>
    </div>
  );
};

export default Create;
