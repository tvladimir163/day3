import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/index';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from './utils/constants';

function App() {
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_TOKEN)

    return todoList ? JSON.parse(todoList) : []
  })


  useEffect(() => {
    localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
  }, [todos])

  const addToList = (value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
    }
    setTodos((prev) => [newTodo, ...prev])
  }

 const deleteList = () => {
  setTodos([])
 }

 const deleteOneTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

  return (
    <div className="App">
      <Header addToList={addToList}/> 

     

      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} />

      <Footer />
    </div>
  );
}

export default App; 