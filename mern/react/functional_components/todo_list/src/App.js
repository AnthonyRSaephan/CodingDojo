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

  const updateCompleted = (bool, index) => {
    tasks[index].completed = bool
  }

  return (
    <div className="App">
      <Form addTask = {addTask} />
      <Display allTasks = {tasks} updateCompleted = {updateCompleted}/>
    </div>
  );
}

export default App;
