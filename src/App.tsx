import React from 'react';
import { useState } from 'react';
import Tasks from './Tasks';
import Form from './Form';
import "./style.css"


function App() {

  const [submittedTasks, setSubmittedTasks] = useState<string[]>([]);

  const submitTask = (task: string) => setSubmittedTasks([...submittedTasks, task])

  return (
    <div className="App">
      <Form submitTask={submitTask}></Form>
      <Tasks tasks={submittedTasks} />
    </div>
  );
}


export default App;
