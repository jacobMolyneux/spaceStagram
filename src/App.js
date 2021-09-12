import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import { ImageCard } from "./components/card.js";

const apiKey =
  "https://api.nasa.gov/planetary/apod?api_key=GPUGbLvmJxTiOY0ftc1SVstnldjZmkaQoc0IWtBV&count=10";

function App() {
  let [Images, setImages] = useState([]);
  let [spaceState, setSpaceState] = useState(true);
  let [marsState, setMarsState] = useState(false);
  useEffect(() => {
    fetch(apiKey)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(Images.concat(data));
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        <button
          className="SearchButton"
          id="spaceSearchBtn"
          onClick={() => setSpaceState((spaceState = true))}
        >
          Space Images
        </button>
        <button
          className="searchButton"
          id="MarsSearchBtn"
          onClick={() => setMarsState((marsState = true))}
        >
          Mars Images
        </button>
      </div>
      <div id="container">
        {Images.map((Image) => (
          <ImageCard
            title={Image.title}
            image={Image.hdurl}
            date={Image.date}
            description={Image.explanation}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
