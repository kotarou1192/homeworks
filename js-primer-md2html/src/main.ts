import program from "commander";
import fs from "fs";
import { md2html } from "./md2html";

program.option("--gfm", "enable GitHub Flavored Markdown");
program.parse(process.argv);

const filepath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filepath, { encoding: "utf-8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});
