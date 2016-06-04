//Third party libraries
var React = require ('react');
var uuid = require('node-uuid');

//Components
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
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
          id: uuid(), //generates randomized ID
          text: text,
          completed: false
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

  //update completed status for given todo
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map( (todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed; //opposite of what existed originally
      }

      return todo;
    })

    this.setState({todos: updatedTodos})
  },

  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
