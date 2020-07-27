import React, { useState } from 'react';

const CreateTask = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        props.addTask(value);
        setValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    );
};

export default CreateTask;
