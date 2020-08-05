import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import  {addToDo}  from '../action/index'



const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text,status) => dispatch(addToDo(text,status))
    }
}

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)
export default TodoFormContainer;