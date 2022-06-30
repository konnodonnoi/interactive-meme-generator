import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <header className='header'>
     < img
     className='header--image' 
     src='../../images/troll-face.png' alt='naruto-troll' />
        <h3  className='header--title' >
        Meme Generator
    </h3>
<h4  className='header--project' >
React Course- Project III
</h4>


    </header>
  )
}

export default Header;