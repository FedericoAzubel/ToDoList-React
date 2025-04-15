import React from 'react'

const Agregar = () => {
    return (
        <div class="add_container">
            <input type="text" id="task-input" class="add_input" placeholder="Add your task" autocomplete="off" />
            <button id="task-btn" class="add_btn">+</button>
        </div>
    )
}

export default Agregar