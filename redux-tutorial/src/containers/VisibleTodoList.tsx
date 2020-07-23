import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

interface Id {
  id?: number;
}

interface OwnProps {
  todos?: any[];
}

interface DispatchProps {
  toggleTodo: (id: number) => any;
}

export type Props = Id & OwnProps & DispatchProps;

type Todos = {
  id: any | undefined;
  completed: any | undefined;
  text: any | undefined;
}[];

type State = {
  todos: Todos;
  visibilityFilter: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
};

const getVisibleTodos = (todos: any[], filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

// { ({ todos, toggleTodo }: Prop): JSX.Element; propTypes: { todos: PropTypes.Validator<PropTypes.InferProps<{ id: PropTypes.Validator<number>; completed: PropTypes.Validator<boolean>; text: PropTypes.Validator<string>; }>[]>; toggleTodo: PropTypes.Validator<...>; }; }'

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: (...args: any[]) => any) => ({
  toggleTodo: (id: any) => dispatch(toggleTodo(id)),
});

export default connect<OwnProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
