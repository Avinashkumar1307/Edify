import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

export default function TaskList() {
    const tasks = useSelector((state) => state.tasks.tasks);
    return (
        <div className='w-full h-screen bg-black'>
            <div className='w-full h-full bg-black grid grid-cols-3'>
                {tasks.length > 0 && tasks.map((task) => (
                    <div key={task.id}>
                        {console.log("inside map", task)}
                        <Task key={task.id} task={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}
