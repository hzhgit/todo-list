import React from 'react'
import {getTodoList} from '../../store/api'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        this.props.addToDo(this.state.value,false)
    }

    changeContent = (e) => {
        this.setState({ value: e.target.value })
    }

    componentDidMount(){
        getTodoList().then((response) => {
            this.props.initData(response.data)
        })
    }


    render() {

        return (
            <div>
                <input type="text" onChange={this.changeContent} />
                <input type="submit" onClick={this.handleSubmit} value="提交" />
            </div>
        )
    }
}

export default ToDoForm