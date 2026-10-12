import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const [task, setTask] = useState([]);
  const [filter, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const handlerFilter = () => {
    const filteredItem = task.filter((task) => task.text === search)
    if(filteredItem){
      setFiltered(filteredItem)
    }
    setFiltered(task)
  }

  const getTasks = () => {
    axios.get('http://localhost:8000/tasks')
      .then(({ data }) => { 
        setTask(data) 
        toast('success', 'Task create succes')
      })
      .catch((e) => {console.log(e)
        toast('error')
  })
  }

  useEffect(() => {
    getTasks();
  }, [])
  return (
    <>
      <CreateTask getTasks={getTasks} />
      <h1>Задачи</h1>
      <input type="text" onChange={e => setSearch(e.target.value)} placeholder='поиск...' />
      <button onClick={handlerFilter}>Найти</button>
      <h1>Задачи</h1>
      <Tasks tasks={task} />
      <ToastContainer />
    </>
  )
}

export default App
