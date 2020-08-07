import React from 'react';
import './App.css';
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import DoneListContainer from "./containers/DoneListContainer"
import { HashRouter, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu mode="horizontal">
          <Menu.Item key="all">
            <Link to='/'>ALL TODO LIST</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to='/done-todo-list'>DONE TODO LIST</Link>
          </Menu.Item>
        </Menu>

        <TodoFormContainer/>

        <Route path="/" exact component={TodoListContainer} />
        <Route path="/done-todo-list" component={DoneListContainer} />
      </HashRouter>
    </div>
  );
}

export default App;
