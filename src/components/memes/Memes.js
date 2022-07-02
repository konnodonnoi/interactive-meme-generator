import React from 'react';
import memesData from '../../memesData';
import './Memes.css';

const Memes = () => {

let url 
  const getMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
     url = memesArray[randomNumber].url
    console.log(url)
  }
    
  
  return (
  <main>

    <p>{url}</p>
    <div className='form'>

        <input type='text' className='form--input' placeholder='top-text'/>
        <input type='text' className='form--input' placeholder='bottom-text'/>
        <button className='form--button' onClick={getMemeImage} >get a new meme image 🖼</button>
    </div>
  </main>
  )
}

export default Memes;