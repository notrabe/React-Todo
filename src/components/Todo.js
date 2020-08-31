import React from 'react'

export default props => (
    <div  style={{ display: 'flex', justifyContent:'center'}} className='todo'>
        <div 
            style={{
                textDecoration: props.todo.complete ? 'line-through' : ''
            }} 
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>
        <button onClick={props.onDelete} id = "deleteButton">x</button>
    </div>
);