// import { useState, useRef } from "react"
// import Todo from "./Todo"

const TodoList = ({ todoList, handleToggle, handleFilter, deleteTodo, completedTodo }) => {
    // console.log('todolist', todoList)
    let active;
    const handleToDoDelete = () => {
        handleFilter()
        // setCompleted(0)
    }

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
        if (todoList.length > 0) {
            return (
                <>
                    <button style={{ margin: '20px' }}
                        onClick={handleToDoDelete}>Delete Completed </button>
                    <button style={{ margin: '20px' }}>Total todos:{todoList.length}</button>
                    <button style={{ margin: '20px' }} >Completed todos:{renderComplete()}</button>
                    <button style={{ margin: '20px' }}>Active todos:{renderActive()}</button>
                </>
            )
        }
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
                        <button id={todo.id} onClick={handleDelete}>-</button>
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