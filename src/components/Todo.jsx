import React, { useState } from 'react';
import './todo.css';

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleAddTask = () => {
        if (title !== '' && description !== '') {
            setTasks([...tasks, {title, description}]);
            setTitle('');
            setDescription('');
        }
    }

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const handleDeleteAllTasks = () => {
        setTasks([]);
    }

    return (
        <div className="app-container">
            <div class="heading">
                <h1> My TODO list </h1>
            </div>
            <div class="input-container">
                <div>
                    <label htmlFor="title-input">Title of Task : </label> 
                    <input id="title-input" type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label htmlFor="description-input"> Description : </label>
                    <input id="description-input" type="text" value={description} onChange={handleDescriptionChange} />
                </div>
            </div>
            <div class="buttons-container">
                <button onClick={handleAddTask}> Add Task 
                </button>
                <button onClick={handleDeleteAllTasks}> Reset </button>
            </div>
            <hr color="tomato" width="80%" />
            <div class="tasks-container">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <div class="task-card">
                                <div class="task-details">
                                    <h2> {task.title} </h2>
                                    <p> {task.description} 
                                    </p>
                                </div>
                                <button onClick={() => handleDeleteTask(index)}> 
                                    Delete 
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoApp;