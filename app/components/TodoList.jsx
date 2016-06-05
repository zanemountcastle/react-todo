var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className = "container__message">Nothing to do</p>
        );
      }

      return todos.map((todo) => { //calls function for every element in array
        return(
          //pass every item on todo down as a prop
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> //give each element a unique key prop
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
