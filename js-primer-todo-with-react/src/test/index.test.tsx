import { App } from "../apps/app";
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
  test("should display hello, world", () => {
    act(() => {
      ReactDOM.render(<App />, container);
    });
    expect(container.textContent).toBe("hello, world");
  });
});
