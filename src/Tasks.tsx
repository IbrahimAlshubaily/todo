import React, { } from 'react';
import "./style.css";

interface TasksProps {
    todoTasks: string[]
    doneTasks: string[]
    updateTask: Function
    removeTask: Function
    completeTask: Function
}

interface TaskProps {
    value: string,
    idx: number,
    isDone: boolean
    updateTask: Function
    removeTask: Function
    completeTask: Function

}

export default function Tasks(props: TasksProps): JSX.Element {
    const createTask = (value: string, idx: number, isDone: boolean) => {
        return <Task key={idx.toString() + value} isDone={isDone} value={value} idx={idx}
            updateTask={props.updateTask} removeTask={props.removeTask} completeTask={props.completeTask} />
    }

    return <div className='task-board'>
        <div className='tasks'>{props.todoTasks.map((value: string, idx: number) => createTask(value, idx, false))}</div>
        <div className='tasks done-tasks'>{props.doneTasks.map((value: string, idx: number) => createTask(value, idx, true))}</div>
    </div>

}


function Task(props: TaskProps) {


    const className = props.isDone ? "done-task" : "todo-task";
    return (
        <div className={"task " + className}>
            <textarea
                className='task-edit-input'
                defaultValue={props.value}
                readOnly={props.isDone}
                style={{ height: props.value.length + 25 }}
                onInput={e => {
                    props.updateTask(props.idx, e.currentTarget.value)
                    e.currentTarget.style.height = e.currentTarget.value.length + 25 + "px"
                }} />

            <div className='task-buttons'>

                <button className='task-button'
                    onClick={() => {
                        props.removeTask(props.idx, props.isDone);
                    }}>
                    🗑️
                </button>

                {props.isDone ? null : <button className='task-button'
                    onClick={() => props.completeTask(props.idx)}>
                    ✅
                </button>}

            </div>
        </div>
    );
}
