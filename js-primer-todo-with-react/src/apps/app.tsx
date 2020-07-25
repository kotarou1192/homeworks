import * as React from "react";
import { Todo, TodoProps } from "./todo";

export const App: React.SFC = () => {
  const [todos, setTodos] = React.useState<TodoProps[]>([]);

  return (
    <div>
      <Todo text={"hoge"} deadline={new Date()} isDone={true} />
    </div>
  );
};
