import React from 'react'

const Display = (props) => {

    const allTasks = props.allTasks
    const updateCompleted = props.updateCompleted

    return (
        <ul>
            {
                allTasks.map((task, index) => {
                    return <li style={{ listStyleType: "none" }} key={index}>
                        {task.text}
                        <input checked={task.completed} onChange={e => updateCompleted(e.target.checked, index)} type='checkbox' />
                    </li>
                })
            }
        </ul>
    )
}

export default Display