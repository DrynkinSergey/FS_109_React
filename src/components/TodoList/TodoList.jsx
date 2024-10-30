import { useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
import { nanoid } from 'nanoid';
export const TodoList = () => {
  // const [todos, setTodos] = useState(() => {
  // const savedData = window.localStorage.getItem('todos');
  // if (savedData !== null) {
  //   return JSON.parse(savedData);
  // }
  // todosData;
  // });

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? todosData);

  const [newValue, setNewValue] = useState('');
  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      id: nanoid(4),
      todo: newValue,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <>
      <div className='flex'>
        <input value={newValue} onChange={e => setNewValue(e.target.value)} className={s.input} />
        <button onClick={handleAddTodo} className='btn border'>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </>
  );
};
