import "./App.css";
import { useState } from "react";

function App() {
  let [display, setDisplay] = useState([]);

  let getData = async () => {
    let reqOption = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/OGMovieCast", reqOption);

    let dataConvert = await dataStore.json();

    setDisplay(dataConvert);

    console.log(dataConvert);
  };

  let getData2 = async () => {
    let reqOption2 = {
      method: "GET",
    };

    let dataStore2 = await fetch(
      "http://localhost:9441/GameChangerMovieCast",
      reqOption2
    );

    let dataConvert2 = await dataStore2.json();

    setDisplay(dataConvert2);
    console.log(dataConvert2);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getData();
        }}
      >
        OGMovieCast
      </button>
      <button
        onClick={() => {
          getData2();
        }}
      >
        GameChangerMovieCast
      </button>
      {display.map((ele, i) => {
        return (
          <div key={i} className=".movieCast">
            <h2>{ele.name}</h2>
            <img src={ele.imageUrl} alt={ele.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
