import './App.css';
import React, { useState } from 'react'
import Header from './component/Header'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

function App() {

  const [todoList, setTodoList] = useState([])

  const handleToggle = (id) => {
    // console.log("handel Toggle", id)
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoList(mapped);

    // console.log("mapped", mapped)
    return mapped
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    let count = filtered.length;
    // console.log("filterd", filtered)
    setTodoList(filtered);
    return count

  }

  const deleteTodo = (id) => {
    console.log("id", id)
    let deletedTodo = todoList.filter((deletedTodo) => deletedTodo.id !== id)
    // console.log('todoList in delete todo function', deletedTodo)
    setTodoList(deletedTodo)
    // console.log('todoList after delete todo function', todoList)
  }

  const completedTodo = () => {
    let filtered = todoList.filter(task => {
      return task.complete;
    });
    let count = filtered.length;
    // console.log("filterd", filtered, count)
    return count
  }

  const addTask = (value) => {
    let copy = todoList
    copy = [...copy, { id: todoList.length + 1, task: value, complete: false }]
    setTodoList(copy);
    console.log('todoList in app', value)
  }

  const deleteAll = () => {
    setTodoList([])
  }

  return (
    <div className="todo-form">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} deleteTodo={deleteTodo} completedTodo={completedTodo} deleteAll={deleteAll} />
    </div>)
}
export default App;
