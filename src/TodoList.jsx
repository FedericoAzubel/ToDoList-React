import React, { useState } from 'react'
import Header from './Header'
import Agregar from './Agregar'
import Botonera from './Botonera'
import Lista from './Lista'
import Span from './Span'

const TodoList = () => {
  const [arrayTasks, setTasks] = useState([]);
  const [i, setI] = useState(0);
  const [msg, setMsg] = useState({ text: "", type: "" });

  return (
    <div className="container">
      <Header />
      <Agregar setTasks={setTasks} i={i} setI={setI} setMsg={setMsg} />
      <Botonera arrayTasks={arrayTasks} setTasks={setTasks} setMsg={setMsg} />
      <Span msg={msg} />
      <Lista arrayTasks={arrayTasks} setTasks={setTasks} />
    </div>
  )
}

export default TodoList;


/*
  ───────────── COMPONENTES ─────────────

  Header:
    - Muestra el título "ToDo List" y una imagen decorativa.
    - Es un componente estático sin lógica interna.

  Agregar:
    - Muestra un input y un botón "+" para añadir tareas.
    - Usa el estado local para controlar el texto ingresado.
    - Usa setTasks para agregar una nueva tarea al array.
    - Usa setI para incrementar el contador de IDs.
    - Usa setMsg para mostrar errores (como input vacío).

  Botonera:
    - Tiene dos botones:
        1. "Mostrar rápida": muestra la tarea finalizada más antigua.
        2. "Borrar tareas": vacía completamente la lista.
    - Recibe el array de tareas y lo modifica con setTasks.
    - Usa setMsg para mostrar mensajes al usuario.

  Span:
    - Muestra mensajes al usuario (errores, confirmaciones).
    - Aplica estilos según el tipo (rojo, negro, etc.).

  Lista:
    - Recorre y muestra todas las tareas activas o completadas.
    - Permite marcar tareas como terminadas o desmarcarlas.
    - Usa setTasks para actualizar el estado al cambiar el checkbox.
*/
