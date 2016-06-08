//Third party libraries
var React = require ('react');
var uuid = require('node-uuid');
var moment = require('moment');

//Components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function(){
    return(
      <div className>
        <h1 className = "page-title">Todo</h1>

        <div className = "row">
          <div className = "column small-centered small-11 medium-6 large-5">
            <div className = "container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
