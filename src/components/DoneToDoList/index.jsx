import React from 'react'
import Todo from '../Todo'
import { Divider } from 'antd';

class DoneToDoList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (<React.Fragment>
            <h2>todo list</h2>
            <Divider />
            <div>
                {this.props.todoList.filter((item) => item.status === true).map((todo, index) =>
                    <Todo key={index} todo={todo} index={index} deleteTodo={this.props.deleteTodo} changeStatus={this.props.changeStatus} />
                )}
            </div>
        </React.Fragment>)

    }
}

export default DoneToDoList