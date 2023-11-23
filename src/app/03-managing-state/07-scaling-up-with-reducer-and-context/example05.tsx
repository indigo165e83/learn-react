"use client"
import { useReducer } from 'react';
import AddTask from './add-task05';
import TaskList from './task-list05';
import { TasksProvider } from './task-context05';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
