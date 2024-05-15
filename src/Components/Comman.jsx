import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTasks, sortTasksByPriority, sortTasksByCompleted, sortTasksByDueDate } from '../redux/slices/tasksSlice';

export default function Comman({ formVisible, setFormVisible }) {
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');

  function formHandler() {
    setFormVisible(!formVisible)
  }

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;

    switch (selectedOption) {
      case 'priority':
        dispatch(sortTasksByPriority());
        break;
      case 'completed':
        dispatch(sortTasksByCompleted());
        break;
      case 'dueDate':
        dispatch(sortTasksByDueDate());
        break;
      default:

        break;
    }
  };

  const handleSearch = () => {
    dispatch(searchTasks({ keyword: searchKeyword }));
  };

  return (<>
    <div className='flex flex-row justify-around pt-6 pb-5'>
      <button onClick={formHandler} className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold px-3">Create Task</button>

      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white "
        />
        <button onClick={handleSearch} className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold px-3 ml-3">Search</button>

      </div>
      <div>
        <select name="sorting" onChange={handleSortChange} className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white">
          <option value="">Sorting By</option>
          <option value="priority">Priority</option>
          <option value="completed">Completed</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>

    </div>
    <div className='w-full h-[1px] bg-indigo-600 mb-3'></div>
  </>
  );
}
