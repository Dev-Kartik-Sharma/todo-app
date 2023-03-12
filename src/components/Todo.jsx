import React, { useState, useEffect } from 'react';
import './todo.css';

function ToDoApp() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle('');
        setDescription('');
    }, [tasks]);

    const handleTitleChange = (event) => {
        if (event.target.value.length <= 20)
            setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        if (event.target.value.length <= 80)
            setDescription(event.target.value);
    }

    const handleAddTask = () => {
        if (title !== '' && description !== '') {
            setTasks([...tasks, {title, description}]);
        }
    }

    const handleDeleteTask = (index) => {
        if (window.confirm('Are you sure ? This task will be deleted !')) {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        } 
    }

    const handleDeleteAllTasks = () => {
        if (tasks.length>0 && window.confirm('Are you sure ? All tasks will be deleted !')) {
            setTasks([]);
        }
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
                                <div class="task-heading">
                                    <h2> {task.title} </h2>
                                </div>
                                <div class="task-details">
                                    <p> {task.description} 
                                    </p>
                                    <div class="single-button-container">
                                        <button onClick={() => handleDeleteTask(index)}> 
                                            Delete       
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoApp;