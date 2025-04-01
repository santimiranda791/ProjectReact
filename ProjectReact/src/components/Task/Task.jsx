import React, { useState } from 'react';
import { Containertask } from '../Containertask/Containertask';
import { ListTask } from '../ListTask/ListTask';  
import { FilterTask } from '../FilterTask/FilterTask';

export const Task = () => {
  const [tasks, setTasks] = useState([]); 

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]); 
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete)); 
  };

  const toggleTaskCompletion = (indexToToggle) => {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='containerTask'>
      <h1>To-Do List</h1>
      <Containertask addTask={addTask} />
      <FilterTask />
      <ListTask tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} /> 
    </div>
  );
};