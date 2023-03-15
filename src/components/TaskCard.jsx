import './components.css';

export function TaskCard({ task, index, deleteMultiple, onCheckboxChange, onDeleteTask }) {
    return (
        <div className="task-card">
            <div className="task-heading">
                <h2>{task.title}</h2>
            </div>
            <div className="task-details">
            <p>
                <input
                type="checkbox"
                checked={deleteMultiple.includes(index)}
                onChange={() => onCheckboxChange(index)}
                />
                {task.description}
            </p>
            <div className="single-button-container">
                <button onClick={() => onDeleteTask(index)}> Delete </button>
            </div>
            </div>
        </div>
    );
}
