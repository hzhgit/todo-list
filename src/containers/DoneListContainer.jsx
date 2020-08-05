import { connect } from 'react-redux'
import { changeStatus } from '../action';
import DoneToDoList from '../components/DoneToDoList';

const mapStateToProps = (state) => {
   return {
      todoList: state.todoList
   }
};

const mapDispatchToProps = (dispatch) => ({
   deleteTodo: (index) => { dispatch({ type: 'DELETE_TODO', index: index }) },
   changeStatus: (id) => { dispatch(changeStatus(id)) }
})

const DoneListContainer = connect(mapStateToProps, mapDispatchToProps)(DoneToDoList);
export default DoneListContainer