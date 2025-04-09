import React, { useContext } from 'react';
import { Containertask } from '../Containertask/Containertask';
import { ListTask } from '../ListTask/ListTask';  
import { FilterTask } from '../FilterTask/FilterTask';
import { context } from '../../Context/Context';

export const Task = () => {
  const { filteredTasks, setTasks } = useContext(context);

  const deleteTask = (indexToDelete) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToDelete)); 
  };

  const toggleTaskCompletion = (indexToToggle) => {
    setTasks(prevTasks =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='containerTask'>
      <h1>To-Do List</h1>
      <Containertask />
      <FilterTask />
      <ListTask tasks={filteredTasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} /> 
    </div>
  );
};