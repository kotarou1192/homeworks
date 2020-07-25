import * as React from "react";
import { TodoProps } from "./todo";
import "../styles/src/apps/addTodo.css";

interface AddTodoProps {
  todos: TodoProps[];
  isDone: boolean[];
  setTodo: (value: TodoProps[]) => void;
  setDone: (done: boolean[]) => void;
}

export const AddTodo = (props: AddTodoProps): JSX.Element => {
  const [text, setText] = React.useState("");
  const handleText = (key: React.KeyboardEvent): void => {
    if (key.key !== "Enter" || key.shiftKey === true) return;
    if (text.length < 1 && text.length > 200) return;
    if (text.replace(/[\n|\s]/g, "").length < 1) return;
    const newTodo = [
      {
        text: text,
        isDone: false,
        deadline: new Date(),
        todoNumber: props.todos.length,
      },
    ];
    const todos = props.todos.concat(newTodo);
    const isDone = props.isDone.concat([false]);
    props.setDone(isDone);
    props.setTodo(todos);
    window.alert("作成しました。");
    setText("");
  };
  return (
    <div className="inputarea">
      <input
        id="text"
        value={text}
        className="input"
        onChange={(str) => {
          setText(str.target.value);
        }}
        onKeyPress={(key) => {
          handleText(key);
        }}
      ></input>
    </div>
  );
};
