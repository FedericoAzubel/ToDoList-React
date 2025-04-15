import React from 'react'
import Portapapeles from './assets/portapapeles.png' 

const Header = () => {
  return (
    <div class="container_2">
        <h2>ToDo List</h2>
        <img src={Portapapeles} class="list_img"></img>
    </div>
  )
}

export default Header