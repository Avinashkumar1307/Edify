import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import { MdCancelPresentation } from "react-icons/md";
export default function TaskForm({ formVisible, setFormVisible }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: '',
        dueDate: '',
        status: 'incomplete'
    });
    const alldata = useSelector((state) => state.tasks)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const formHandler = () => {
        setFormVisible(!formVisible);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(formData));
        console.log("alldata", alldata)
        setFormData({
            title: '',
            description: '',
            priority: '',
            dueDate: '',
            status: 'incomplete'
        });
        setFormVisible(!formVisible);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">

            <div className="bg-black w-full sm:w-auto md:w-96 rounded-lg p-8">
                <div className="flex justify-end items-right" onClick={formHandler}>
                    <MdCancelPresentation className='text-white ' />

                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-1">
                    <label className="font-bold text-lg text-white">Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                    <label className="font-bold text-lg text-white">Description</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                    <label className="font-bold text-lg text-white">Priority</label>
                    <select name="priority" value={formData.priority} onChange={handleChange} className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <label className="font-bold text-lg text-white">Due Date</label>
                    <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                    <label className="font-bold text-lg text-white">Status</label>
                    <select name="status" value={formData.status} onChange={handleChange} className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">
                        <option value="incomplete">Incomplete</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit" className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">Create Task</button>
                </form>
            </div>
        </div>
    );
}
