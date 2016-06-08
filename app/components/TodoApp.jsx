//Third party libraries
var React = require ('react');
var uuid = require('node-uuid');
var moment = require('moment');

//Components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),    //generates randomized ID
          text: text,
          completed: false,
          createdAt: moment().unix(),    // timestamp
          completedAt: undefined    // when completed checked
        }
      ]
    });
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return(
      <div className>
        <h1 className = "page-title">Todo</h1>

        <div className = "row">
          <div className = "column small-centered small-11 medium-6 large-5">
            <div className = "container">
              <TodoSearch onSearch = {this.handleSearch}/>
              <TodoList />
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
