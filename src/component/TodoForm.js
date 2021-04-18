import React, { useState } from 'react'

const TodoForm = ({ addTask }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue("");
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="enter todo..." />
                <button>Add Todos</button>
            </form>

        </>
    )
}
export default TodoForm
