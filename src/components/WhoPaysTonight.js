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
  const [arrayIndex, setArrayIndex] = useState(0);
  const [chosenPerson, setChosenPerson] = useState('');

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);


  const addToDo = (todo) => {
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

  const handleWhoPays = () => {
    setArrayIndex(Math.floor(Math.random()* todos.length));
    setChosenPerson(todos[arrayIndex].task);
  }

  return (
    <>
      <div className="toDoWrapper" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="partOne" style={{ width: '50%', border: '1px solid blue'  }}>
        <form className="todoform" onSubmit={handleSubmit}>
        <div className="input-container">
          <InputField
            type="text"
            placeholder="Add a person"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          </div>
          <div className="button-container">
            <Button type="submit" className="todo-btn">
              Add
            </Button>
          </div>
        </form>
        {todos.length > 0 && todos.map((todo, index) => (
          <div className="toDo" key={todo.id}>
            <p>{todo.task}</p>
            <FontAwesomeIcon className="deleteIcon" icon={faTrash} onClick={() => deleteToDo(todo.id)} />
          </div>
        ))}
      </div>
      <div className="partTwo" style={{ width: '50%', border: '1px solid blue', display: 'flex', justifyContent: 'center', height: '100%' }}>
      <Button type="submit" className="todo-btn" onClick={() => handleWhoPays() }>
          Who Will Pay Tonight?
        </Button>
        <h2>Chosen Person:{chosenPerson}</h2>
      </div>
    </div>
    </>
  );
}

export default WhoPaysTonight;

