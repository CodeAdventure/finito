import path from "path";

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "svelte-context-stores",
      fileName: (format) => `index.${format}.js`,
    },
  },
};
