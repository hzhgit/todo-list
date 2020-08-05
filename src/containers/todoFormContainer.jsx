import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import  {addToDo,initData}  from '../action/index'


const mapStateToProps = (state) => {
    return {
       todoList: state.todoList
    }
 };

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text,status) => dispatch(addToDo(text,status)),
        initData:(data) => dispatch(initData(data))
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer;