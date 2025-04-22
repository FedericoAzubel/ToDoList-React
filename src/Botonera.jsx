import React from 'react'

const Botonera = ({ arrayTasks, setTasks, setMsg }) => {

    const handleMostrarRapida = () => {
        const completadas = arrayTasks.filter(t => t.finished && t.finishDate);

        if (completadas.length === 0) {
            setMsg({ text: "No hay tareas completadas.", type: "black" });
            return;
        }

        const ordenadas = [...completadas].sort((a, b) => new Date(a.finishDate) - new Date(b.finishDate));
        const masRapida = ordenadas[0];

        setMsg({ text: `La tarea más rápida fue: ${masRapida.content}`, type: "black" });
    };

    const handleBorrarTareas = () => {
        if (arrayTasks.length === 0) {
            setMsg({ text: "La lista ya está vacía.", type: "black" });
        } else {
            setTasks([]);
            setMsg({ text: "", type: "" });
        }
    };

    return (
        <div className="btn_best_container">
            <button className="fastest_btn" onClick={handleMostrarRapida}>Mostrar rápida</button>
            <button className="delete-btn" onClick={handleBorrarTareas}>Borrar tareas</button>
        </div>
    )
}

export default Botonera;
