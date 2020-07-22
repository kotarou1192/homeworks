import * as functions from "./index.js";
/*
import Global = NodeJS.Global;
export interface GlobalWithCognitoFix extends Global {
  fetch: any;
}
declare const global: GlobalWithCognitoFix;
global.fetch = require("node-fetch").default;
*/

describe("all functions test", () => {
  /*
  describe("fetchGitHubUserInfo test", () => {
    test("invalid user must be rejected", () => {
      const invalidUser = "hogehogehoge_invalid_user";
      expect(functions.fetchGitHubUserInfo(invalidUser)).rejects.toThrow();
    });
    test("if valid user is input in the argument, must return Promise<void>", () => {
      const validUser = "js-primer-example";
      expect(functions.fetchGitHubUserInfo(validUser)).toBeInstanceOf(Promise);
    });
  });
  */
  describe("escapeSpecialChars test", () => {
    test("& must be replaced", () => {
      expect(functions.escapeSpecialChars("&")).toBe("&amp;");
    });
    test("< must be replaced", () => {
      expect(functions.escapeSpecialChars("<")).toBe("&lt;");
    });
    test("> must be replaced", () => {
      expect(functions.escapeSpecialChars(">")).toBe("&gt;");
    });
    test('" must be replaced', () => {
      expect(functions.escapeSpecialChars('"')).toBe("&quot;");
    });
    test("' must be replaced", () => {
      expect(functions.escapeSpecialChars("'")).toBe("&#039;");
    });
  });
});
