var React = require ('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: false
        },
        {
          id: uuid(),
          text: 'Go to the gym',
          completed: true
        },
        {
          id: uuid(),
          text: 'Go to graduation',
          completed: false
        }
      ]
    }
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
