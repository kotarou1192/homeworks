import React, { Validator } from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }: Prop): JSX.Element => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

type Prop = {
  onClick?:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  completed?: Validator<boolean>;
  text?: Validator<string>;
};

export default Todo;
