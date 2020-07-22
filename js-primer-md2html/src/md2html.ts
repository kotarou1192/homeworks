import marked from "marked";

interface options {
  gfm: boolean;
  [x: string]: boolean;
}

export const md2html = (markdown: string, cliOptions: options): string => {
  return marked(markdown, {
    gfm: cliOptions.gfm,
  });
};
