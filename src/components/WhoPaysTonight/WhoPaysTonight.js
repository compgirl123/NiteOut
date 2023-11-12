import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './WhoPaysTonight.scss';
import { v4 as uuidv4 } from 'uuid';
import { InputField } from '../InputField/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ThemeWrapper } from '../ThemeWrapper/ThemeWrapper';

const WhoPaysTonight = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [chosenPerson, setChosenPerson] = useState(null);

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
    if (todos.length > 0) {
      const randomIndex = Math.floor(Math.random() * todos.length);
      const randomPerson = todos[randomIndex];
      setChosenPerson(randomPerson);
    } else {
      setChosenPerson(null);
    }
  }

  const handleReset = () => {
    setTodos([]);
    setChosenPerson('');
  }

  return (
    <>
      <ThemeWrapper>
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
          <div className="partOne">
          {todos.length > 0 && todos.map((todo, index) => (
            <div className="toDo" key={todo.id}>
              <p>{todo.task}</p>
              <FontAwesomeIcon className="deleteIcon" icon={faTrash} onClick={() => deleteToDo(todo.id)} />
            </div>
          ))}
        </div>
        <div className="partTwo">
        {todos.length > 1 &&
          <Button type="submit" className="todo-btn" onClick={handleWhoPays}>
            Who Will Pay Tonight?
          </Button>
          }
          <br/>
          <h3 style={{ textAlign: 'center'}}>{chosenPerson ? 'Chosen Person: ' + chosenPerson.task : ''}</h3>
          {chosenPerson && <Button type="submit" className="todo-btn" onClick={handleReset}>
            Reset
          </Button>}
        </div>
      </ThemeWrapper>
    </>
  );
}

export default WhoPaysTonight;
