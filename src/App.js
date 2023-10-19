import React, {useState} from 'react';


const App = () => {

  const [tasks, setTasks] = useState([
    {id: 1, title: 'Learn React Router', complited: false},
    {id: 2, title: 'Learn React DOM', complited: false},
    {id: 3, title: 'Learn React Hooks', complited: false},
  ])

  const [input, setInput] = useState('')

  const todoComplited = (id) => {
    setTasks(tasks.filter(task => {
      if (task.id === id) {
        task.complited = !task.complited
      }
      return task
    }))
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (e) => {
    if (e.code === 'Enter' && input.trim() !== '') {
      setTasks(tasks.concat([{id: Date.now(), title: input}]));
      setInput('')
    }
  }


  return (
    <div>
      <h1 className='title'>TO-DO-APP</h1>
      <input type="text" value={input} onKeyDownCapture={(e)=> addTask(e)} onChange={(e) => setInput(e.target.value) }/>
      {tasks.map(task => {
        return (
          <div className='tasks__wrapper' key={task.id}>
            <input type="checkbox" onClick={() => todoComplited(task.id)}/>
            <div className="task__title" 
                 style={{textDecoration: task.complited ? `line-through` : null}}>
                  {task.title}
            </div>
            <div className="task__delete" onClick={() => {removeTask(task.id)}}>&times;</div>
        </div>
        )
      })}

    </div>
  )
}


export default App