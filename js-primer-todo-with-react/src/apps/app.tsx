import * as React from "react";
import { Todo, TodoProps } from "./todo";
import { AddTodo } from "./addTodo";

export const App: React.SFC = () => {
  const [todos, setTodo] = React.useState<TodoProps[]>([]);
  const [isDone, setDone] = React.useState<boolean[]>([]);

  const deleteTodo = (index: number): void => {
    const todoLeft = todos.slice(0, index);
    const todoRight = todos.slice(index + 1, todos.length);
    const slicedTodos = todoLeft.concat(todoRight);

    const isDoneLeft = isDone.slice(0, index);
    const isDoneRight = isDone.slice(index + 1, todos.length);
    const slicedIsDone = isDoneLeft.concat(isDoneRight);

    setTodo(slicedTodos);
    setDone(slicedIsDone);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>入力してエンターを押す</p>
      <AddTodo
        todos={todos}
        setTodo={setTodo}
        setDone={setDone}
        isDone={isDone}
      />
      <p
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        リストをクリックしてDone, もう一度クリックしてDoing
      </p>
      <div style={{ display: "inline-block" }}>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isDone={isDone[index]}
              deadline={todo.deadline}
              onClick={() => {
                const isDoneCopy = isDone.concat();
                isDoneCopy[index] = !isDoneCopy[index];
                setDone(isDoneCopy);
              }}
              deleteTodo={deleteTodo}
              todoNumber={index}
            />
          );
        })}
      </div>
    </div>
  );
};
