import React, { useState } from 'react'

const Agregar = ({ setTasks, i, setI, setMsg }) => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        if (inputValue.trim() === "") {
            setMsg({ text: "El campo está vacío", type: "red" });
        } else {
            const nuevaTarea = {
                content: inputValue,
                id: i,
                createDate: new Date().toLocaleDateString("es-ES"),
                finishDate: null,
                finished: false,
            };

            setTasks(prev => [...prev, nuevaTarea]);
            setI(prev => prev + 1);
            setInputValue("");
            setMsg({ text: "", type: "" });
        }
    }

    return (
        <div className="add_container">
            <input
                type="text"
                className="add_input"
                placeholder="Add your task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
            />
            <button className="add_btn" onClick={handleClick}>+</button>
        </div>
    )
}

export default Agregar
