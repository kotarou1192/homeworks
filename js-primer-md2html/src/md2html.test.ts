import fs from "fs";
import path from "path";
import { md2html } from "./md2html";

describe("convarts Markdown to HTML", () => {
  test("GFM=false", () => {
    const sample = fs.readFileSync(
      path.resolve(__dirname, "./fixtures/sample.md"),
      { encoding: "utf-8" }
    );
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./fixtures/expected.html"),
      { encoding: "utf-8" }
    );
    expect(md2html(sample, { gfm: false })).toBe(expected);
  });

  test("GFM=true", () => {
    const sample = fs.readFileSync(
      path.resolve(__dirname, "./fixtures/sample.md"),
      { encoding: "utf-8" }
    );
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./fixtures/expected-gfm.html"),
      { encoding: "utf-8" }
    );
    expect(md2html(sample, { gfm: true })).toBe(expected);
  });
});
