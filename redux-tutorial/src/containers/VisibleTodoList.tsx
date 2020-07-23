import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";
import visibilityFilter from "../reducers/visibilityFilter";
import PropTypes from "prop-types";

const getVisibleTodos = (todos?: any[], filter?: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos?.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos?.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

type Todos = {
  id?: any;
  completed?: any;
  text?: any;
}[];

// { ({ todos, toggleTodo }: Prop): JSX.Element; propTypes: { todos: PropTypes.Validator<PropTypes.InferProps<{ id: PropTypes.Validator<number>; completed: PropTypes.Validator<boolean>; text: PropTypes.Validator<string>; }>[]>; toggleTodo: PropTypes.Validator<...>; }; }'

type State = {
  todos?: Todos;
  visibilityFilter?: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
};

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: (...args: any[]) => any) => ({
  toggleTodo: (id: any) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
