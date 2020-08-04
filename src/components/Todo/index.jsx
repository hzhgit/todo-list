import React from 'react'
import './index.css'

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.index);
    }


    complete = () => {
        this.setState({isComplete: !this.state.isComplete})
    }

    render() {
        return (
            <div>
                <p onClick={this.complete} className={this.state.isComplete?"completed":"uncompleted"}>
                    {this.props.todo}---------<button onClick={this.deleteTodo}>X</button>
                </p>
            </div>
        )
    }
}

export default ToDo