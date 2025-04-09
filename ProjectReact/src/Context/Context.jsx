import { createContext, useState } from 'react';
export const context = createContext();

export const Provider = ({ children }) => { 
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [filter, setFilter] = useState('all'); 

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <context.Provider value={{
      tasks,
      setTasks,
      title,
      setTitle,
      description,
      setDescription,
      filter,
      setFilter,
      filteredTasks
    }}>
      {children}
    </context.Provider>
  );
};