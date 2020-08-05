import React from 'react'
import { getTodoList, addTodo } from '../../store/api'
import { Button,Input } from 'antd';
import './index.css'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            size: 'large',
        }
    }

    handleSubmit = (e) => {
        addTodo(this.state.value, false).then((response) => {
            this.props.addToDo(response.data.id, response.data.content, response.data.status)
        })
    }

    changeContent = (e) => {
        this.setState({ value: e.target.value })
    }

    componentDidMount() {
        getTodoList().then((response) => {
            this.props.initData(response.data)
        })
    }


    render() {

        return (
            <div>
                <Input placeholder="Basic usage" onChange={this.changeContent} class={Input}/>
                <br/>
                <Button type="primary" size={this.state.size} onClick={this.handleSubmit}>提交</Button>
            </div>
        )
    }
}

export default ToDoForm