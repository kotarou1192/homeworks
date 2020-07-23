import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

type Todos = {
  id: number;
  completed: boolean;
  text: string;
}[];

type State = {
  todos: Todos;
  visibilityFilter: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
};

const mapStateToProps = (state: State, ownProps: { filter: string }) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: (...args: any[]) => any,
  ownProps: { filter: string }
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
