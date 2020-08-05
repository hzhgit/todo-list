import React from 'react'
import Todo from '../Todo'
import { Divider } from 'antd';
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <Divider />
            <h2>todo list</h2>
            <Divider />
            <div>
                {this.props.todoList.map((todo, index) =>
                    <Todo key={index} todo={todo} deleteTodo={this.props.deleteTodo} changeStatus={this.props.changeStatus} />
                )}
            </div>
        </React.Fragment>)

    }
}

export default ToDoList