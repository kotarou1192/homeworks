import React from "react";
// import "../styles/src/apps/todo.css";

export interface TodoProps {
  text: string;
  deadline: Date;
  isDone: boolean;
}

type onClick = {
  onClick?: () => void;
};

export const Todo = (props: TodoProps & onClick) => {
  return (
    <div
      className={props.isDone ? "todo todo__done" : "todo todo__doing"}
      onClick={props.onClick}
    >
      <p className={"todo__text"}>{props.text}</p>
      <p className={"todo__date"}>{props.deadline.toISOString()}</p>
    </div>
  );
};
