import React from 'react'
import './Memes.css';

const Memes = () => {
  return (
  <main>
    <form className='form'>
        <input type='text' className='form--input' placeholder='top-text'/>
        <input type='text' className='form--input' placeholder='bottom-text'/>
        <button className='form--button'>get a new meme image 🖼</button>
    </form>
  </main>
  )
}

export default Memes;