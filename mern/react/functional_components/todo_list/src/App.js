import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {text:task, completed: false}])
  }

  const deleteTask = (index) => {
    const newTasksList = tasks.filter((task, idx) => {
      return index != idx
    })
    setTasks(newTasksList)
  }

  const updateCompleted = (bool, index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if(index == idx){
        task.completed = bool
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <Form addTask = {addTask} />
      <Display allTasks = {tasks} updateCompleted = {updateCompleted} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
