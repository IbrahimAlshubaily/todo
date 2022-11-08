import React from 'react';
import "./style.css";


interface TasksProps {
    tasks: string[]
}

export default function Tasks(props: TasksProps): JSX.Element {

    const tasksDivs = props.tasks.map(t => <div className='task'><p>{t}</p></div>)
    return <div className='task-board'>
        {tasksDivs}
    </div>
}