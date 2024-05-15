import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(), 
                ...action.payload
            };
            
            state.tasks.push(newTask);
        },
        editTask: (state, action) => {
            const { id, newData } = action.payload;
            console.log("edittask",newData);
            console.log(id)
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newData };
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        sortTasksByCompleted: (state) => {
            state.tasks.sort((a, b) => a.status.localeCompare(b.status));
        },
        sortTasksByPriority: (state) => {
            state.tasks.sort((a, b) => a.priority.localeCompare(b.priority));
        },
        sortTasksByDueDate: (state) => {
            state.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        },
        searchTasks: (state, action) => {
            const { keyword } = action.payload;
            state.tasks = state.tasks.filter(task =>
                task.title.toLowerCase().includes(keyword.toLowerCase()) ||
                task.description.toLowerCase().includes(keyword.toLowerCase())
            );
        },
    },
});

export const { addTask, editTask, deleteTask, sortTasksByCompleted, sortTasksByPriority, sortTasksByDueDate, searchTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
