var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => { //calls function for every element in array
        return(
          //pass every item on todo down as a prop
          <Todo key={todo.id} {...todo}/> //give each element a unique key prop
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
