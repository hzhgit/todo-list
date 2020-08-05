import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'
import { changeStatus } from '../action';

const mapStateToProps = (state) => {
   return {
      todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (id) => { dispatch({ type: 'DELETE_TODO', id: id }) },
   changeStatus: (id) => { dispatch(changeStatus(id)) }
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default TodoListContainer