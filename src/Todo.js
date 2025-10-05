import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const handleAddTodo = (e) => {
          e.preventDefault();
    if (!editTodo && input.trim().length !== 0) {
      const newTodo = {
        id: crypto.randomUUID(),
        name: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    } else if ((editTodo && input.trim().length !== 0)){
        if(editTodo.name === input) return
      setTodos(
        todos.map((el) =>
          el.id === editTodo.id ? { ...el, name: input } : el
        )
      );
      setEditTodo(null);
      console.log(todos)
    }
    setInput("");
  };

  const handleEdit = (id) => {
    setEditTodo(todos.find((todo) => todo.id === id));
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.name);
    }
  }, [editTodo]);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        placeholder="enter task here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={(e) => handleAddTodo(e)}>
        {!editTodo ? "Add" : "Edit Mode"}
      </button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default Todo;
