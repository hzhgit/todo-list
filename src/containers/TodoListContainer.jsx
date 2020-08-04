import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'

const mapStateToProps = (state) => {
   return {
    todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (index) => {dispatch({type:'DELETE_TODO', index:index})}
})

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoList);
export default TodoListContainer