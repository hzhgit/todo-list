import React from 'react'

class ToDo extends React.Component {
    deleteTodo = () =>{
        this.props.deleteTodo(this.props.index);
    }

    render() {
        return (
            <div>
                <p>{this.props.todo}---------<button onClick={this.deleteTodo}>X</button></p>
            </div>
        )
    }
}

export default ToDo