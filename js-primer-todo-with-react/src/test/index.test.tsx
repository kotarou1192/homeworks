import { Todo } from "../apps/todo";
import { act } from "react-dom/test-utils";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import React from "react";

let container: HTMLElement = document.createElement("div");

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

describe("App test", () => {
  test("add a Todo", () => {
    const date = new Date();
    act(() => {
      ReactDOM.render(
        <Todo
          text="hoge"
          deadline={date}
          isDone={true}
          todoNumber={0}
          onClick={() => {
            return;
          }}
          deleteTodo={(n) => {
            return;
          }}
        />,
        container
      );
    });
    expect(container.textContent).toBe(`hoge${date.toISOString()}`);
  });
});
