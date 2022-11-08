import React from 'react';
import { useState } from 'react';
import "./style.css";

interface FormProps {
    submitTask: Function
}

export default function Form(props: FormProps): JSX.Element {

    const [task, setTask] = useState("");


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        props.submitTask(task);
        setTask("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <input className='task-input'
                placeholder='Enter task'
                onChange={e => setTask(e.target.value)}
                value={task}
            />
            <button className="task-submit" type='submit'>Submit</button>

        </form>
    );
}
