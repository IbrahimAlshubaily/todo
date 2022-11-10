import React from 'react';
import "./style.css";


interface TasksProps {
    todoTasks: string[]
    doneTasks: string[]
    removeTask: Function
    completeTask: Function
}

export default function Tasks(props: TasksProps): JSX.Element {

    const task = (title: string, idx: number, className: string) => {

        const completeTaksButton = <button className='task-button'
            onClick={() => props.completeTask(idx)}>
            ✅
        </button>
        return <div key={idx} className={"task " + className}>
            <h5>{title}</h5>
            <div className='task-buttons'>
                <button className='task-button'
                    onClick={() => props.removeTask(idx, className === "done-task")}>
                    🗑️
                </button>
                {className === "done-task" ? null : completeTaksButton}
            </div>
        </div>
    }

    const todoTasksDivs = props.todoTasks.map((title: string, idx: number) => task(title, idx, "todo-task"))
    const doneTasksDivs = props.doneTasks.map((title: string, idx: number) => task(title, idx, "done-task"))
    return <div className='task-board'>
        <div className='tasks'>{todoTasksDivs}</div>
        <div className='tasks done-tasks'>{doneTasksDivs}</div>
    </div>

}
