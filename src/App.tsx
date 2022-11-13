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
    console.log("save todo")
    console.log(todoTasks)
  }, [todoTasks])


  useEffect(() => {
    localStorage.setItem("done-tasks", JSON.stringify(doneTasks))
  }, [doneTasks])


  const submitTask = (task: string) => setTodoTasks([...todoTasks, task])

  const updateTask = (updateIndex: number, newValue: string) => {
    todoTasks[updateIndex] = newValue;
    localStorage.setItem("todo-tasks", JSON.stringify(todoTasks))

  }

  const removeTask = (removeIdx: number, isDone: boolean) => {
    if (isDone) {
      setDoneTasks([...doneTasks.slice(0, removeIdx), ...doneTasks.slice(removeIdx + 1)]);
    } else {
      console.log(todoTasks.length)
      setTodoTasks([...todoTasks.slice(0, removeIdx), ...todoTasks.slice(removeIdx + 1)]);
      console.log()
      console.log(todoTasks.length)


    }
  }

  const completeTaks = (removeIdx: number) => {
    setDoneTasks([...doneTasks, todoTasks[removeIdx]]);
    removeTask(removeIdx, false);
  }

  return (
    <div className="App">
      <Form submitTask={submitTask}></Form>
      <Tasks todoTasks={todoTasks} doneTasks={doneTasks} updateTask={updateTask} removeTask={removeTask} completeTask={completeTaks} />
    </div>
  );
}


export default App;
