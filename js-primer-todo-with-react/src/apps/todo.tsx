import React from "react";
import "../styles/src/apps/todo.css";

export interface TodoProps {
  text: string;
  deadline: Date;
  isDone: boolean;
  todoNumber: number;
}

type onClick = {
  onClick: () => void;
};

type deleteTodo = {
  deleteTodo: (n: number) => void;
};

export const Todo = (props: TodoProps & onClick & deleteTodo): JSX.Element => {
  return (
    <ul>
      <li
        className={
          props.isDone
            ? "todo todo__card todo__card__done"
            : "todo todo__card todo__card__doing"
        }
        onClick={props.onClick}
      >
        <p className={"todo__card__text"}>{props.text}</p>
        <p className={"todo__card__date"}>{props.deadline.toISOString()}</p>
      </li>
      <li>
        <button
          className={"todo__button"}
          onClick={() => props.deleteTodo(props.todoNumber)}
        >
          削除
        </button>
      </li>
    </ul>
  );
};
