//Third party libraries
var React = require ('react');
var uuid = require('node-uuid');
var moment = require('moment');

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

  //update completed status for given todo
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map( (todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed; //opposite of what existed originally
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    })

    this.setState({todos: updatedTodos})
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
              <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
