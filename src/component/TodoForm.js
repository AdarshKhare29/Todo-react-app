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
            <form onSubmit={handleSubmit}>
                <hr className="hr" />
                <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="enter todo..." className="todo-input" />
                {/* <button>Add Todos</button> */}
                <hr className="hr" />
            </form>

        </>
    )
}
export default TodoForm
