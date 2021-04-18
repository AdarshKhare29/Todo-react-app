

// import { useRef } from "react"

const Todo = ({ todo, handleToggle, deleteTodo, completedTodo, handleFilter }) => {



    // const showValue = (val, id) => {
    //     var count = 0
    //     Number(id)
    //     console.log('val', val[id].task)
    //     console.log("count starting value", count)
    //     if (val[id].complete) {
    //         console.log("completed")
    //         count = count + 1
    //         console.log(count)
    //         return count
    //     }
    //     else {
    //         count = count - 1
    //         console.log("completed", count)
    //         return count
    //     }
    // }


    const handleClick = (e) => {
        // let value = 
        handleToggle(e.currentTarget.id)
        // console.log('value', value)
        // showValue(value, e.currentTarget.id - 1)
        // let val = e.currentTarget.id - 1
        // completedTodo(val)
    }
    const handleDelete = (e) => {
        let id = parseInt(e.target.id, 10)
        console.log("deleted", id)

        deleteTodo(id)
    }
    return (
        <>
            <div className="todos-data">

                <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"} style={{ display: 'inline-block' }}>
                    <input type="checkbox" />
                    {/* <span className="todo-id">{todo.id}</span> */}
                    <span className="todo-name">{todo.task}</span>
                </div>
                <button id={todo.id} onClick={handleDelete}>-</button>
                {/* <ExtraInfo todo={todo} /> */}
            </div>
            {/* <button>{Completed.current}</button> */}
        </>
    )
}

export default Todo