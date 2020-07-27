import '../assets/css/Todo.css';

import React from 'react';

const Task = (props) => {
    return (
        <div>
            <div
                className="task"
                // style={{
                //     textDecoration: props.task.completed ? 'line-through' : '',
                // }}
            >
                {props.task.title}
                <button
                    style={{ background: 'red' }}
                    onClick={props.removeTask(props.index)}
                >
                    x
                </button>
                <button onClick={props.completeTask(props.index)}>
                    Complete
                </button>
            </div>
        </div>
    );
};

export default Task;
