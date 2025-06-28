//  const BlogList = ({blogs,title}) => { (We can destructure props object and instead we can directly use blogs,title 
const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
