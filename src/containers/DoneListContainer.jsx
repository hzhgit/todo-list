import { connect } from 'react-redux'
import { changeStatus ,deleteToDo } from '../action';
import DoneToDoList from '../components/DoneToDoList';

const mapStateToProps = (state) => {
   return {
      todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (id) => { dispatch(deleteToDo(id)) },
   changeStatus: (id) => { dispatch(changeStatus(id)) }
})

const DoneListContainer = connect(mapStateToProps, mapDispatchToProps)(DoneToDoList);
export default DoneListContainer