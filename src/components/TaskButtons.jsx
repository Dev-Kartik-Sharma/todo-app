import './components.css';

export function TaskButtons({ onAddTask, onDeleteSelected, onDeleteAllTasks }) {
    return (
        <div className="buttons-container">
            <button onClick={onAddTask}>Add Task</button>
            <button onClick={onDeleteSelected}>Delete Selected</button>
            <button onClick={onDeleteAllTasks}>Reset</button>
        </div>
    );
}
