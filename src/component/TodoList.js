// import { useState, useRef } from "react"
// import Todo from "./Todo"

const TodoList = ({ todoList, handleToggle, handleFilter, deleteTodo, completedTodo, deleteAll }) => {
    // console.log('todolist', todoList)
    let active;
    // const handleToDoDelete = () => {
    //     handleFilter()
    //     // setCompleted(0)
    // }

    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
        completedTodo()
        // count = count + 1
        // setCompleted(count)
    }
    const handleDelete = (e) => {
        console.log("delete indivdual", todoList)
        deleteTodo(+e.target.id)
    }

    const renderActive = () => {
        active = todoList.filter(todo => todo.complete == false)
        return active.length
    }

    const renderComplete = () => {
        active = todoList.filter(todo => todo.complete !== false)
        return active.length
    }


    const renderButton = () => {
        // if (todoList.length > 0) {
        return (
            <div>
                <button style={{ margin: '20px' }}
                    onClick={handleFilter} className="delete-btn">Delete Completed </button>
                <p style={{ margin: '20px' }} className="btn back-blue">Total todos:<span>{todoList.length}</span></p>
                <p style={{ margin: '20px' }} className="btn back-green">Completed todos:<span>{renderComplete()}</span></p>
                <p style={{ margin: '20px' }} className="btn back-yellow">Active todos:<span>{renderActive()}</span></p>
                {/* {todoList.length > 0 ? <button className="delete-btn" onClick={deleteAll}>Delete All Todos</button> : ''} */}
                <button className="delete-btn" onClick={deleteAll}>Delete All Todos</button>
            </div>
        )
        // }
    }
    return (<>
        <div>
            {todoList.map((todo) => {
                console.log("todo", todo)

                return (
                    // <div>
                    // <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} deleteTodo={deleteTodo} completedTodo={completedTodo} />
                    // {todo.task}

                    // </div>
                    // todo.task
                    <div className="todos-data">

                        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"} style={{ display: 'inline-block' }}>
                            <input type="checkbox" />
                            <span className="todo-name">{todo.task}</span>
                        </div>
                        <button id={todo.id} onClick={handleDelete} className="fa fa-minus fa-trash-alt"></button>
                    </div>
                );
            })}


        </div>
        {renderButton()}
        {/* {todoList.length > 0} */}

    </>
    )
}
export default TodoList