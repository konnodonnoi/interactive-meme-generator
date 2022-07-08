import React, { useState } from "react";
import memesData from "../../memesData";
import "./Memes.css";

const Memes = () => {
  const [memeImage, setImage] = useState("")

  
  let url;
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setImage(url = memesArray[randomNumber].url)
    // url = memesArray[randomNumber].url;
    // console.log(url);
  };

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input type="text" className="form--input" placeholder="top-text" />
        <input type="text" className="form--input" placeholder="bottom-text" />
        <button className="form--button" onClick={getMemeImage}>
          get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="random meme imagery"/>
    </main>
  );
};

export default Memes;
