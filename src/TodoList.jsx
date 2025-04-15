import React from 'react'
import Header from './Header'
import Agregar from './Agregar'
import Botonera from './Botonera'
import Lista from './Lista';

const TodoList = () => {
  return (
    <div class="container">
        <Header/>
        <Agregar/>
        <Botonera/>
        <Lista/>
    </div>
  )
}

export default TodoList;