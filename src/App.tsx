import React, { useEffect } from 'react';
import { useState } from 'react';
import Tasks from './Tasks';
import Form from './Form';
import "./style.css"

const fetchTasks = (key: string): string[] => {
  const tasks = localStorage.getItem(key);
  if (tasks)
    return JSON.parse(tasks);
  return []
}

function App() {

  const [todoTasks, setTodoTasks] = useState<string[]>(() => fetchTasks("todo-tasks"));
  const [doneTasks, setDoneTasks] = useState<string[]>(() => fetchTasks("done-tasks"));


  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(todoTasks))
  }, [todoTasks])


  useEffect(() => {
    localStorage.setItem("done-tasks", JSON.stringify(doneTasks))
  }, [doneTasks])


  const submitTask = (task: string) => setTodoTasks([...todoTasks, task])

  const removeTask = (removeIdx: number, isDone: boolean) => {
    if (isDone) {
      setDoneTasks(doneTasks.filter((_: string, idx: number) => idx !== removeIdx));
    } else {
      setTodoTasks(todoTasks.filter((_: string, idx: number) => idx !== removeIdx));
    }
  }

  const completeTaks = (removeIdx: number) => {
    setDoneTasks([...doneTasks, todoTasks[removeIdx]]);
    removeTask(removeIdx, false);
  }

  return (
    <div className="App">
      <Form submitTask={submitTask}></Form>
      <Tasks todoTasks={todoTasks} doneTasks={doneTasks} removeTask={removeTask} completeTask={completeTaks} />
    </div>
  );
}


export default App;
