import React from 'react'
import './index.css'

class ToDo extends React.Component {

    deleteTodo = () => {
        this.props.deleteTodo(this.props.index);
    }


    complete = () => {
        this.props.changeStatus(this.props.index)
    }

    render() {
        return (
            <div>
                <p onClick={this.complete} className={this.props.todo.status?"completed":"uncompleted"}>
                    {this.props.todo.text}---------<button onClick={this.deleteTodo}>X</button>
                </p>
            </div>
        )
    }
}

export default ToDo