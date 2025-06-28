// const Home = () => {
//   const handleClick = (e) => {
//     console.log(`Hello Ninjas`, e);
//   };
//   const handleClickAgain = (name, e) => {
//     console.log(`Hello  ${name}`, e.target);
//   };
//   return (
//     <div className="home">
//       <h2>Home Page</h2>
//       <button onClick={handleClick}>Click </button>
//       {/* <button onClick={handleClickAgain("Eshwar")}>Click me again</button>
//       This makes function to get invoked before Click */}
//       <button
//         onClick={(e) => {
//           handleClickAgain(`Eshwar`, e);
//         }}
//       >
//         Click me Again
//       </button>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  //   // let name = 'Mario';
  //   // const handleClick = () => {
  //   //   name = 'luigi';
  //   //   console.log(name);

  //   // };
  //   const [name, setName] = useState('Mario');//Data type of values used inside the useState doesn't matter here. It can be Object,number,boolean,string etc..
  //   const [age,setAge] = useState(25);
  //   const handleClick = () => {
  //     setName('Luigi');
  //     setAge(30);
  //   }
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor sit amet",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "Lorem ipsum dolor sit amet",
      author: "Yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum dolor sit amet",
      author: "Mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Eshwar");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    console.log(`Deleted blog with id: ${id}`);
  };

  // useEffect(() => {
  //   console.log("useEffect ran");
  //   console.log(blogs);
  // }); // This will run every time the blogs state changes

  // useEffect(() => {
  //   console.log("useEffect ran for the first time");
  //   console.log(blogs);
  // }, []); // This will run only once when the component mounts

  //Adding useEffect Dependencies
  useEffect(() => {
    console.log("useEffect ran");
    console.log(name);
  }, [name]);
  // This will run every time the name state changes

  return (
    <div className="home">
      {/* <h2>Home Page</h2>
      <p>{name} is {age} years old.</p>
      <button onClick={handleClick}>Click </button> */}

      {/* Using map to iterate over the array of objects */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* Here we use props to pass data from parent component to child component. */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's blogs"
      /> */}
      <button onClick={() => setName("Virat Kohli")}>Idol Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
