import React from 'react'

const Display = (props) => {

    const {allTasks, updateCompleted, deleteTask} = props

    const styleCompleted = (completed) => {
        return {
            textDecoration : completed && "line-through",
            listStyleType: "none"
        }
    }

    return (
        <ul>
            {
                allTasks.map((task, index) => {
                    return <li style={styleCompleted(task.completed)} key={index}>
                        {task.text}
                        <input checked={task.completed} onChange={e => updateCompleted(e.target.checked, index)} type='checkbox' />
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                })
            }
        </ul>
    )
}

export default Display