import "./App.scss";
import Navbar from "./home/Navbar";
import React from "react";
// import Intro from "./home/Intro";
// import "./home/Navbar/index.scss";

function App() {
  const counterFunc = (a = 5) => {
    return a++;
  };

  return (
    <>
      <Navbar counter={counterFunc} number={5} />
      {/* <Intro counter={counterFunc} /> */}
    </>
  );
}

export default App;
