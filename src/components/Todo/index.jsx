import React from 'react'
import './index.css'
import { deleteTodo,modifyTodo } from '../../store/api'
import { Divider } from 'antd';

class ToDo extends React.Component {

    deleteTodo = (event) => {
        event.stopPropagation()
        deleteTodo(this.props.todo.id).then((response) => {
            this.props.deleteTodo(this.props.todo.id)
        });
    }


    complete = (event) => {
        event.stopPropagation()
        modifyTodo(this.props.todo.id,{id:this.props.todo.id,content:this.props.todo.text,status:!this.props.todo.status}).then((response) => {
            console.log(response)
            this.props.changeStatus(this.props.todo.id,{id:response.data.id,content:response.data.content,status:response.data.status})
        })
    }

    render() {
        console.log(this.props.todo.status)
        return (
            <div>
                <p onClick={this.complete} className={this.props.todo.status ? "completed" : "uncompleted"}>
                    {this.props.todo.text}---------<button onClick={this.deleteTodo}>X</button>
                </p>
                <Divider />
            </div>
        )
    }
}

export default ToDo