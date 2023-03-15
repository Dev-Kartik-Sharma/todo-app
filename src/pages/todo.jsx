import React, { useState, useEffect } from 'react';
import './todo.css';
import {TaskButtons} from '../components/TaskButtons';
import {TaskInput} from '../components/TaskInput';
import {TasksList} from '../components/TasksList';

function ToDoApp() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deleteMultiple, setDeleteMultiple] = useState([]);

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
        } else {
            window.alert('Please enter the title and description first !');
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
        } else {
            window.alert('No tasks available');
        }
    }

    const handleDeleteSelected = () => {
        if (deleteMultiple.length === 0) {
            window.alert('Please select at least one task to delete!');
            return;
        }
        
        if (window.confirm(`Are you sure you want to delete ${deleteMultiple.length} task(s)?`)) {
            const newTasks = tasks.filter((task, index) => !deleteMultiple.includes(index));
            setTasks(newTasks);
            setDeleteMultiple([]);
        }
    }

    const handleCheckboxChange = (index) => {
        const newDeleteMultiple = [...deleteMultiple];
            if (newDeleteMultiple.includes(index)) {
                const indexToDelete = newDeleteMultiple.indexOf(index);
                newDeleteMultiple.splice(indexToDelete, 1);
            } else {
                newDeleteMultiple.push(index);
            }
            setDeleteMultiple(newDeleteMultiple);
    }
    

    return (
        <div className="app-container">
            <div class="heading">
                <h1> My TODO list </h1>
            </div>
            <TaskInput title={title} description={description} onTitleChange={handleTitleChange} onDescriptionChange={handleDescriptionChange} />
            <TaskButtons onAddTask={handleAddTask} onDeleteSelected={handleDeleteSelected} onDeleteAllTasks={handleDeleteAllTasks} />
            <hr color="tomato" width="80%" />
            <TasksList tasks={tasks} deleteMultiple={deleteMultiple} onCheckboxChange={handleCheckboxChange} onDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default ToDoApp;