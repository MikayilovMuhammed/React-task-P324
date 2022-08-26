import React from "react";
import Intro from "../Intro";
import "./index.scss";

// Hook
function Navbar({ counter, number }) {
  const [state, setState] = React.useState(5);
  const [isShowIntro, setIsShowIntro] = React.useState(false);
  const [inputValue] = React.useState("");
  const [people, setPeople] = React.useState([]);
  //   const [number, setNumbet] = React.useState(5);

  const addCount = () => {
    setState(state + Number(inputValue));
  };

  //   const getInputValue = (e) => {
  //     setInputValue(e.target.value);
  //   };

  const showIntro = () => {
    setIsShowIntro(!isShowIntro);
  };

  const getInputValue = React.useCallback(
    (e) => {
      if (isShowIntro) {
        console.log("Salam");
      }
    },
    [isShowIntro]
  );

  React.useEffect(() => {
    const arr = [
      { id: 1, name: "Muha", surname: "Mikayilov" },
      { id: 2, name: "Fexrin", surname: "Aliyev" },
      { id: 3, name: "Seymur", surname: "Manafov" },
    ];

    setPeople(arr);
  }, []);

  // const handle = () => {
  //   return 6;
  // };

  //   const handleMemo = React.useMemo(() => {
  //     return 6;
  //   }, []);

  React.useEffect(() => {
    if (inputValue.length >= 3 && isShowIntro) {
      console.log("Salam");
      //   setInputValue("salam");
    }
    // if ()
  }, [inputValue.length, isShowIntro]);

  return (
    <>
      <h1>Navbar {state}</h1>
      <button onClick={addCount}>add</button>
      <input onChange={(e) => getInputValue(e)} />
      <input onChange={getInputValue} />
      <button onClick={() => console.log(inputValue)}>Show inputVal</button>

      <br />
      <br />
      <br />

      <button onClick={showIntro}>
        {!isShowIntro ? "Show" : "Hidden"} Intro
      </button>

      {isShowIntro && <Intro counter={() => state} />}
      <ul>
        {people.map(({ name, surname }, idx) => (
          <li key={idx}>
            <span>
              {name} {surname}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
