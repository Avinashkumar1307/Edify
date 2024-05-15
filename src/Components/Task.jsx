import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/slices/tasksSlice';

export default function Task({ task }) {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEdit = () => {
        // Dispatch editTask action with editedTask
        dispatch(editTask({ id: task.id, newData: editedTask }));
        setEditing(false); // Turn off editing mode after submission
    };

    const handleDelete = () => {
        // Dispatch deleteTask action with task ID
        dispatch(deleteTask(task.id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({
            ...editedTask,
            [name]: value
        });
    };

    return (
        <div className="bg-black">
            <div className="bg-black flex flex-col w-80 rounded-lg px-8 pt-10 border border-indigo-600">
                <div className="flex flex-col items-center">
                    <div className="bg-black border border-indigo-600 rounded-lg p-4 mt-2 w-80">
                        {editing ? (
                            <div className="text-white">
                                <h3 className="font-semibold">Task Title:
                                    <input
                                        type="text"
                                        name="title"
                                        value={editedTask.title}
                                        onChange={handleChange}
                                        className="text-white bg-transparent border-b border-white focus:outline-none ml-2"
                                    />
                                </h3>
                                <p className="mt-2">Description:
                                    <input
                                        type="text"
                                        name="description"
                                        value={editedTask.description}
                                        onChange={handleChange}
                                        className="text-white bg-transparent border-b border-white focus:outline-none ml-2"
                                    />
                                </p>
                                <p className="mt-2">Priority:
                                    <select
                                        name="priority"
                                        value={editedTask.priority}
                                        onChange={handleChange}
                                        className="text-white bg-transparent border-b border-white focus:outline-none ml-2"
                                    >
                                        <option value="" className='bg-black'>Select Priority</option>
                                        <option value="low" className='bg-black'>Low</option>
                                        <option value="medium" className='bg-black'>Medium</option>
                                        <option value="high" className='bg-black'>High</option>
                                    </select>
                                </p>
                                <p className="mt-2">Due Date:
                                    <input
                                        type="date"
                                        name="dueDate"
                                        value={editedTask.dueDate}
                                        onChange={handleChange}
                                        className="text-white bg-transparent border-b border-white focus:outline-none ml-2"
                                    />
                                </p>
                                <p className="mt-2">Status:
                                    <select
                                        name="status"
                                        value={editedTask.status}
                                        onChange={handleChange}
                                        className="text-white bg-transparent border-b border-white focus:outline-none ml-2 "
                                    >
                                        <option value="" className='bg-black'>Select Status</option>
                                        <option value="completed" className='bg-black'>Completed</option>
                                        <option value="incompleted" className='bg-black'>Incompleted</option>
                                    </select>
                                </p>

                                {/* Submit button */}
                                <button className="border border-indigo-600 bg-black text-white rounded-lg py-2 px-4 mt-2" onClick={handleEdit}>Submit</button>
                            </div>
                        ) : (
                            <div className="text-white">
                                <h3 className="font-semibold">Task Title: {task?.title}</h3>
                                <p className="mt-2">Description: {task?.description}</p>
                                <p className="mt-2">Priority: <span className={`${task?.priority === 'low' ? 'text-green-500' :
                                        task?.priority === 'medium' ? 'text-red-400' :
                                            'text-red-900'
                                    }`}>{task?.priority}</span></p>
                                <p className="mt-2">Due Date: {task?.dueDate}</p>
                                <p className="mt-2">Status: <span className={`text-${task?.status === 'completed' ? 'green-500' : 'red-500'}`}>{task?.status}</span></p>
                                {/* Edit and Delete buttons */}
                                <div className="flex justify-between mt-4">
                                    <button className="border border-indigo-600 bg-black text-white rounded-lg py-2 px-4" onClick={() => setEditing(true)}>Edit</button>
                                    <button className="border border-indigo-600 bg-black text-white rounded-lg py-2 px-4" onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
