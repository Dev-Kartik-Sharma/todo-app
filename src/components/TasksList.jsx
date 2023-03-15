import './components.css';
import { TaskCard } from './TaskCard';

export function TasksList({ tasks, deleteMultiple, onCheckboxChange, onDeleteTask }) {
    return (
        <div className="tasks-container">
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                <TaskCard
                    task={task}
                    index={index}
                    deleteMultiple={deleteMultiple}
                    onCheckboxChange={onCheckboxChange}
                    onDeleteTask={onDeleteTask}
                />
                </li>
            ))}
            </ul>
        </div>
    );
}
