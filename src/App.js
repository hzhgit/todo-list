import React from 'react';
import './App.css';
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import DoneListContainer from "./containers/DoneListContainer"
import { HashRouter, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <span><Link to='/'>ALL TODO LIST</Link></span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span><Link to='/done-todo-list'>DONE TODO LIST</Link></span>
        <Route path="/" exact component={TodoListContainer} />
        <Route path="/done-todo-list" component={DoneListContainer} />
      </HashRouter>
      <TodoFormContainer></TodoFormContainer>
    </div>
  );
}

export default App;
