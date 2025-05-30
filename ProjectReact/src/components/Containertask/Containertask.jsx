import React, { useContext } from 'react';
import { context } from '../../Context/Context';

export const Containertask = () => {
  const { tasks, setTasks, title, setTitle, description, setDescription } = useContext(context);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && description) {
      const newTask = { 
        id: Date.now(), 
        title, 
        description, 
        completed: false 
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <div className='formTask'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        name="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button onClick={handleAddTask}>Add Task</button> 
    </div>
  );
};