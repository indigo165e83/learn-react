"use client"
import AddTask from './add-task06';
import TaskList from './task-list06';
import { TasksProvider } from './task-context06';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
