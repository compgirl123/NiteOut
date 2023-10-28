import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import './WhoPaysTonight.scss';
import { v4 as uuidv4 } from 'uuid';
import { InputField } from './InputField/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const WhoPaysTonight = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);


  const addToDo = (todo) => {
    alert(todo);
    if (todo) {
      setTodos([...todos, { id: uuidv4(), task: todo }]);
    } else {
      console.log("err");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
    setValue('');
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <div className="toDoWrapper">
        <form className="todoform" onSubmit={handleSubmit}>
          <InputField type="text"
            placeholder="Add a new task"
            onChange={(e) => setValue(e.target.value)}
            value={value}/>
          <Button type="submit" className="todo-btn">
            Add
          </Button>
        </form>
        {todos.length > 0 && todos.map((todo, index) => (
          <div className="toDo" key={todo.id}>
            <p>{todo.task}</p>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteToDo(todo.id)} />
          </div>
        ))}
      </div>
    </>
  );
}

export default WhoPaysTonight;

