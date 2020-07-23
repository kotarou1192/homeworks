import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { Props } from "../containers/VisibleTodoList";

class TodoList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
    if (this.props.todos === undefined) return <ul></ul>;
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}
/*
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
*/
export default TodoList;
