import React from 'react'
import './index.css'
import { deleteTodo,modifyTodo } from '../../store/api'


class ToDo extends React.Component {

    deleteTodo = (event) => {
        event.stopPropagation()
        deleteTodo(this.props.todo.id).then((response) => {
            this.props.deleteTodo(this.props.todo.id)
        });
    }


    complete = (event) => {
        event.stopPropagation()
        modifyTodo(this.props.todo.id).then((response) => {
            this.props.changeStatus(this.props.todo.id)
        })
    }

    render() {
        return (
            <div>
                <p onClick={this.complete} className={this.props.todo.status ? "completed" : "uncompleted"}>
                    {this.props.todo.text}---------<button onClick={this.deleteTodo}>X</button>
                </p>
            </div>
        )
    }
}

export default ToDo