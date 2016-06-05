//TODO: take text, validate, call function that gets submitted as prop

var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var strTodo = this.refs.todoText.value;

    if (strTodo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(strTodo);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you have to do?"></input>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
