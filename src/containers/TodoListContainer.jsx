import { connect } from 'react-redux'
import ToDoList from '../components/TodoList'
import { changeStatus,deleteToDo } from '../action';

const mapStateToProps = (state) => {
   return {
      todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (id) => { dispatch(deleteToDo(id)) },
   changeStatus: (id) => { dispatch(changeStatus(id)) }
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default TodoListContainer