import React from "react";

const TodoItem = ({ todo, setTodos, todos, handleEdit }) => {

const handleDelete = (id) => {
 setTodos(todos.filter(todo => todo.id !== id))
}

const handleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
}



  return (
    <ul>
      <li>
        <span style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.name}</span>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <button onClick={() => handleEdit(todo.id)}>Edit</button>
        <button onClick={() => handleComplete(todo.id)}>Complete</button>
      </li>
    </ul>
  );
};

export default TodoItem;
