import React from 'react'

const Lista = ({ arrayTasks, setTasks }) => {

    const toggleTarea = (id) => {
        const nuevasTareas = arrayTasks.map(task => {
            if (task.id === id) {
                const now = new Date().toISOString();
                return {
                    ...task,
                    finished: !task.finished,
                    finishDate: !task.finished ? now : null,
                };
            }
            return task;
        });

        setTasks(nuevasTareas);
    };

    return (
        <ul className="list_container">
            {arrayTasks.map((task) => (
                <li key={task.id} className="elemento">
                    <div className="input">
                        <input
                            type="checkbox"
                            className="task_input"
                            checked={task.finished}
                            onChange={() => toggleTarea(task.id)}
                        />
                        <label
                            className={`task_name ${task.finished ? "line" : ""}`}
                        >
                            {task.content}
                        </label>
                    </div>
                    <div className="date">
                        <p>{task.createDate}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Lista;
