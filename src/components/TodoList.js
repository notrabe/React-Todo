// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import TodoForm from './TodoForm'
import Todo from  './Todo'
export default class TodoList extends React.Component {
    state = {
        todos: []

    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id ===id){
                    return{
                        ...todo,
                        complete:!todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        return(
        <div>
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        toggleComplete = {() => this.toggleComplete(todo.id)} 
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                        todo={todo}/>
                ))}
            </div>
            {this.state.todos.filter(todo => todo.complete).length ? (<div>
                <button id='completeButton'onClick={this.removeComplete}>clear complete</button>
            </div>): null}
        </div>
        );
    }
}