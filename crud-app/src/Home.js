const Home = () => {
  const handleClick = (e) => {
    console.log(`Hello Ninjas`, e);
  };
  const handleClickAgain = (name, e) => {
    console.log(`Hello  ${name}`, e.target);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click </button>
      {/* <button onClick={handleClickAgain("Eshwar")}>Click me again</button>
      This makes function to get invoked before Click */}
      <button
        onClick={(e) => {
          handleClickAgain(`Eshwar`, e);
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
