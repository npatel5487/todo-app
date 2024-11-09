import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/ToDoList"
import {useState} from 'react'

function App() {
  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete: true},
  //   {input: 'Get the Groceries!', complete: false},
  //   {input: 'Learn how to web design!', complete: false},
  //   {input: 'Say hi to Gran Gran !', complete: false}
  // ]
  const [todos, setTodos] = useState([{input: 'Hello! Add your first todo!', complete: true}
  ])

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input:newTodo, complete: false}]
    setTodos(newTodoList)


  }
  
  function handleEditTodo(){

  }

  function handleDeleteTodo(){

  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
