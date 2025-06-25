// import "./App.css";

// function App() {
//   const title = "React CRUD App";
//   const likes = 10;
//   // const person = {
//   //   name: 'John',
//   //   age: 30,
//   // };
//   const link = "https://www.amazon.com";

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked {likes} times </p>

//         {/* <p>{person}</p>
//          Cannot display object/boolean directly in JSX */}

//         <p>{55}</p>
//         <p>{`hello ninjas`} </p>
//         <p>{[1, 2, 4, 3, 2]} </p>
//         <p>{Math.random() * 10} </p>

//         <a href={link}>Amazon Site</a>
//       </div>
//     </div>
//   );
// }

// export default App;

import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
