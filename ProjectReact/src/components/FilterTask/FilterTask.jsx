import React, { useContext } from 'react';
import { context } from '../../Context/Context';

export const FilterTask = () => {
  const { filter, setFilter } = useContext(context);

  return (
    <div className='filterTask'>
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={filter === 'pending' ? 'active' : ''}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};